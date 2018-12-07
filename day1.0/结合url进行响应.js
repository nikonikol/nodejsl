var http=require('http')

var server =http.createServer()

server.on('request',function(req,res){
    console.log('ok'+req.url)
    console.log("请求我的客户端的端口号："+req.socket.remotePort,req.socket.remoteAddress)
    var url=req.url
    var product=[
        {
        name:'apple',
        price:222
        },
        {
        name:'banbana',
        price:11
        },
        {
        name:'boluo',
        price:12
        },
        {
        name:'pear',
        price:321
        }

    ]
    if(url==="/product"){
        res.end(JSON.stringify(product))
    }
})

server.listen(3333,function(){
console.log('服务器启动成功：')
})