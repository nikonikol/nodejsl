var express =require('express')
var fs = require('fs')

var app = express()

app.engine('html',require('express-art-template'))

app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public'))

app.get('/', function(req,res){
    //readFile 的第二个可选参数，传入utm8 即可不用tostring()
    fs.readFile('./db.json',"utf8",function(err,data){
        if(err){
            return res.status(500).send('Server error')
        }
        res.render('index.html',{
            students: JSON.parse(data).students,
            imgs:JSON.parse(data).imgs
        })
    })
    
})

app.listen(3000,function(){
    console.log('go````')
})