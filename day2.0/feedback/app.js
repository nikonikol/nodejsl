//创建http服务器
var http = require('http')
//创建node.js文件操作对象
var fs =require('fs')
//导入模板引擎
var template =require('art-template')
//url模块
var url=require("url")

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
//对我们来讲，其实至于要判定，如果你的请求路径是/pinglun就可以

//创建服务
http
.createServer(function (req,res){
    // //获取url
    // var url =req.url
    //使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true，表示直接讲查询字符串被转化为一个对象（通过query属性来访问）
    var parseObj=url.parse(req.url,true)
    var pathname=parseObj.pathname
    //根据url做出响应
    if(pathname==="/"){
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
    else if(pathname.indexOf('/public/')===0){
        fs.readFile('.'+pathname,function(err,data){
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else if(pathname==='/post'){

        fs.readFile('./view/post.html',function(err,data){
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else if(pathname==="/pinglun"){
        //一次请求对应一次相应，相应结束这次请求也就结束
        // res.end(JSON.stringify(parseObj.query))
        //获取表单提交数据parseObj。query
        //生成日期到数据对象中，然后储存到数组中
        //让用户重新跳转到首页
        var comment=parseObj.query
        comment.datetime="asdfafad"
        comments.unshift(comment)
        //如何通过服务器让客户端重定向
        //1.状态码设置为302临时重定向
        // 2.在响应头中通过lacation告诉客户端往哪重定向setheader
        res.statusCode=302
        res.setHeader("location","/")
        res.end()
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