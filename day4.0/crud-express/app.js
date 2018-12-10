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
            pictures: JSON.parse(data).pictures,
            students: JSON.parse(data).students
        })
    })
    
})
app.get('/chart', function(req,res){
    //readFile 的第二个可选参数，传入utm8 即可不用tostring()
    res.render('mychart.html')
    
})
app.get('/login', function(req,res){
    //readFile 的第二个可选参数，传入utm8 即可不用tostring()
    res.render('login.html')
    
})

app.listen(3000,function(){
    console.log('歪歪真帅')
})