//加载http
var http=require("http")
//使用http.cteatServer()创建一个WEB服务器
var server=http.createServer()
//服务器要干嘛
//提供服务：对数据的服务
//发请求
//接受请求
//处理请求
//给个反馈（发送响应）
//注册request请求事件
//当客户端请求过来，就会自动触发服务器得request得请求时间，然后执行第二个参数：回调处理 
server.on("request",function(request,response){
    console.log("受到客户端请求了"+request.url)
    


    if(request.url=="/"){
        response.write("nono")
        response.end()
    }
    if(request.url=="/login"){
        response.write("login")
        response.end()
    }
    if(request.url=="/register"){
        response.write("register")
        response.end()
    }
    
})
//启动服务器,绑定端口号
server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过http：//127.0.0.0：3000/来进行访问")
    
})
