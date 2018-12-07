var a=require("fs")

a.writeFile("write.md","大家好，我limingwai我是大笨蛋",function(error){
    
    if(error){
        console.log("文件写入失败")
        console.log(error)
    }
    else{
        console.log("文件写入成功")
    }
}
)
