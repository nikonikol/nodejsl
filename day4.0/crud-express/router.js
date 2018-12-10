
/**
 * router.js路由模块
 * 职责
 *  处理路由
 *  根据不同请求响应url
 */
var fs=require('fs')
//Express提供了一个更好的方式
//专门包装路由
var express=require('express')
var Student=require('./student')

//1.创建一个路由容器
var router=express.Router()
//2.把路由都挂在到router路由容器中
// router.get('/', function(req,res){
//     //readFile 的第二个可选参数，传入utm8 即可不用tostring()
//     fs.readFile('./db.json',"utf8",function(err,data){
//         if(err){
//             return res.status(500).send('Server error')
//         }
//         res.render('index.html',{
//             students: JSON.parse(data).students,
//             imgs:JSON.parse(data).imgs
//         })
//     })
    
// })

router.get('/students', function(req,res){
    Student.find(function(err,students){
        if(err)
        {
            return res.status(500).send('Server error')
        }
        res.render('index.html',{
            students:students
        })
    })
    
})
router.get('/students/new', function(req,res){
    res.render('new.html')
    
})
router.post('/students/new', function(req,res){
    Student.save(req.body,function(err){
        if (err) 
        {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
})
    //将数据保存到db.json    
    //像读取出来 转成对象
    //在对象中push数据
    //然后把对象转化为字符串
    //再将字符串储存起来   

router.get('/students/edit', function(req,res){
   
    
    Student.findbyid(parseInt(req.query.id),function(err,student){
        if(err){
            return res.status(500).send('Server error')
        }
        res.render('edit.html',{
            studentedit:student
    })
    })
    
    
})
router.post('/students/edit', function(req,res){

    Student.updateById(req.body,function(err){
        if(err){
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
    
})
router.get('/students/delete', function(req,res){


    Student.delete(req.query.id,function(err){
        if (err) 
        {
            return res.status(500).send('Server error')
        }
       // res.render('index.html')
    })   
    
   
})
router.post('/students/delete', function(req,res){
    
})
//把router导出
module.exports=router