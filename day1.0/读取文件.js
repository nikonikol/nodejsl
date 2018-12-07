var fs =require('fs')
fs.readFile("hello.txt",function(error,data)
{
 console.log(data.toString())   
})