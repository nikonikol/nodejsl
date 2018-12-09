var express = require ('express')
var bodyParser=require('body-parser')
var app=express()

//当以/public开头时，去。/public/目录中寻找对应的文件,此时在网页中查看时必须加上public，前一个参数为标识符可以修改
//app.use('/public/',express.static("./public/"))
//当以/public开头时，去。/public/目录中寻找对应的文件，此时不能加上public
app.use('/public/',express.static("./public/"))

//配置使用模板引擎//其中前一个参数可以修改
app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//如果想要修改默认的views目录，则可以
//app.set('views',render函数的默认路径)

//创建假数据数组
var comments=[
    {
        name:'jack',
        message: '今天真冷',
        datetime:'2018-12-07'
    },
    {
        name:'jack1',
        message: '今天真冷',
        datetime:'2018-12-07'
    },
    {
        name:'jack2',
        message: '今天真冷',
        datetime:'2018-12-07'
    },
    {
        name:'jack3',
        message: '今天真冷',
        datetime:'2018-12-07'
    }
]

app.get('/',function(req,res){
    res.render('index.html',{
        mycomments:comments

    })
})

//处理表单post请求
app.post('/post',function(req,res){
    //req.query拿不到url中的数据
    var mycomments = req.body
    mycomments.datetime='2018-12-12'
    comments.unshift(mycomments)
    res.redirect('/')
})

app.get('/post',function(req,res){
    res.render('post.html')
 })

app.get('/pinglun',function(req,res){
    var mycomments = req.query
    mycomments.datetime='2018-12-12'
    comments.unshift(mycomments)
    res.redirect('/')
 })

app.listen(3000,function(err,data){
    console.log("hhhhh")
})