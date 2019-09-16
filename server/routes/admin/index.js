module.exports = app => {
    const express = require('express')
    const AdminUser = require('../../models/AdminUser')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams:true
    })
    
    router.post('/',async (req,res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    router.put('/:id',async (req,res) => {
        await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    router.delete('/:id',async (req,res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send(model)
    })

    router.get('/',async (req,res) => {
        let queryOptions = {}
        //针对Category关联父分类
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        if(req.Model.modelName === 'Article'){
            queryOptions.populate = 'categories'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })

    router.get('/:id',async (req,res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
   
    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')

    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

    //上传
    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../../uploads'})
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async (req,res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login',async (req,res) => {
        const {username,password} =req.body
        
        // 1.查询用户
        const user = await AdminUser.findOne({username:username}).select('+password')
        assert(user,422,'用户不存在')
        
        // 2. 校验密码
        const isValid = require('bcryptjs').compareSync(password,user.password)
        assert(isValid,422,'密码错误')
        // if(!isValid){
        //     return res.status(422).send({
        //         message:'密码错误'
        //     })
        // }
        //3. 返回token
        const token = jwt.sign({_id:user._id},app.get('secret'))
        res.send({token})
    })

    //错误处理
    app.use(async(err,req,res,next) => {
        res.status(err.statusCode || 500).send({
            message:err.message
        })    
    })
}