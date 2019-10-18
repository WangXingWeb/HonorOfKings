module.exports = app => {
    const router = require('express').Router()

    //这里也可以通过mongoose应用模型
    const mongoose = require('mongoose')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')

    //const Article = require('../../models/Article')
    router.get('/news/init',async(req,res) => {
        const parent = await Category.findOne({
            name:'新闻分类'
        })
        const cats = await Category.find().where({
            parent:parent
        }).lean()
        const newsTitles = ["四周岁庆典爆料⑦ | 英雄新形象！局外展示大升级~", "四周岁庆典爆料⑥ | 信誉系统再升级，对局数据更清晰！", "四周岁庆典爆料⑤ | 局内优化新体验，周年庆福利抢先看！", "四周岁庆典爆料④丨排位赛改版！快来查看你的新赛季段位", "四周岁庆典爆料③丨全新战令来袭，两款限定皮肤抢先看！", "10月10日正式服不停机更新公告", "10月9日抢先服不停机更新公告", "10月8日【抢先服】“四周岁特别版本”更新公告", "峡谷最强战队争霸赛 违规账号惩罚名单", "10月10日体验服停机更新公告", "抢先服更新 新赛季来袭", "峡谷最强战队争霸赛落幕，冠军诞生！", "乐享小长假 永久皮肤等你拿", "千灯会活动开启 参与必得四周岁专属回城特效", "新英雄西施登场 金秋福利开始放送", "【KPL今日预报】TS vs eStarPro，挑战不可能", "你是赛评师：一诺伪五杀AG零封RNG.M，重回西部第一你觉得AG强在哪？", "高校联赛榜单活动超嗨来袭！电竞热血等待燃烧！", "嘴强王者：为什么KPL赛场的天秀英雄，路人局却鲜有出场？", "王者电竞周刊：eStar七连胜“大魔王”强势占领东部第一，无铭苏烈极限一打三反制"]
        const newList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a,b) => Math.random()-0.5)
            return {
                categories:randomCats.slice(0,2),
                title:title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newList)
        res.send(newList)
    })

    router.get('/news/list',async(req,res) => {
        // const parent = await Category.findOne({
        //     name:'新闻分类'
        // }).populate({
        //     path:'children',
        //     populate:{
        //         path:'newsList'
        //     }
        // }).lean()
        const parent = await Category.findOne({
            name:'新闻分类'
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            { 
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }        
            },
            {
                $addFields:{
                    newsList: { $slice: ['$newsList',5]}
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories:{ $in: subCats }
            }).limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news =>{
                news.CategoryName =cat.name == '热门' ?
                news.categories[0].name : cat.name
                news.CategoryName = cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    app.use('/web/api',router)
}