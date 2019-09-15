module.exports = app => {
    const express = require('express')
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

    app.use('/admin/api/rest/:resource',async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    },router)

    //上传
    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'),async (req,res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login',async (req,res) => {
        const {username,password} =req.body
        const AdminUser = require('../../models/AdminUser')
        // 1.查询用户
        const user = await AdminUser.findOne({username:username}).select('+password')
        if(!user){
            return res.status(422).send({
                message:'用户不存在'
            })
        }
        // 2. 校验密码
        const isValid = require('bcrypt').compareSync(password,user.password)
        if(!isValid){
            return res.status(422).send({
                message:'密码错误'
            })
        }
        //3. 返回token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({_id:user._id},app.get('secret'))
        res.send({token})
    })
}