//创建http服务器
var http = require('http')
//创建node.js文件操作对象
var fs =require('fs')
//导入模板引擎
var template =require('art-template')

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

//创建服务
http
.createServer(function (req,res){
    //获取url
    var url =req.url

    //根据url做出响应
    if(url==="/"){
        //读取对应html文件
        fs.readFile('./view/index.html',function(err,data){
            //判断如果出错，返回404
            if(err){
                return res.end('404 Not Found')
            }

            //运用模板引擎进行html文档字符串转换，使用对应数据进行模板引擎的渲染
            var htmlStr = template.render(data.toString(),{
                mycomments:comments
            })

            res.end(htmlStr)
        })   
    }
    else if(url.indexOf('/public/')===0){
        fs.readFile('.'+url,function(err,data){
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else if(url==='/post'){

        fs.readFile('./view/post.html',function(err,data){
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else{
        fs.readFile('./view/404.html',function(err,data){
            if(err){

                if(err){
                    return res.end('404 Not Found')
                }
            }
        })
    }
})
.listen(3000,function(){
    console.log('lang...')
})