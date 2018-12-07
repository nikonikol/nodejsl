var http =require('http')
var fs=require("fs")
var server=http.createServer()
server.on('request',function(req,res){


    var url=req.url
if(url==="/")
{
    fs.readFile("./resource/index.html",function(err,data)
    {
        if(err)
        {
            res.setHeader('Content-Type',"text/plain;charset=utf-8")
            res.end("文件读取失败")
        }
        else
        {
            res.setHeader('Content-Type',"text/html;charset=utf-8")
            res.end(data)
        }
    })
}
if(url==="/img")
{
    fs.readFile("./resource/image_1x.png",function(err,data)
    {
        if(err)
        {
            res.setHeader('Content-Type',"text/plain;charset=utf-8")
            res.end("文件读取失败")
        }
        else
        {
            res.setHeader('Content-Type',"image/png;charset=utf-8")
            res.end(data)
        }
    })
}

})

server.listen(8222,function(){
    console.log('server is running')
})