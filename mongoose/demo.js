var mongoose=require('mongoose')

var Schema=mongoose.Schema

//链接数据库
mongoose.connect('mongodb://localhost/itcast')

//设计表结构
//约束的目的是为了保证数据的完整性，不要脏数据
// var blogSchema=new Schema(
//     {
//         title:String,
//         author:String,
//         body:String,
//         comments:[{body:String,date:Date}],
//         date:{type:Date,default:Date.now},
//         hidden:Boolean,
//         meta:{
//             votes:Number,
//             favs:Number
//         }
//     })
var userSchema=new Schema({
    username:{
        type:String,
        require:true//必须有
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        
    }
})

//将文档结构发布到模型
//mongoose.model 方法就是用来将一个架构发布为model
//第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//          mongoose会自动将大写名词中的字符串转化为小写复数的的集合
//第二个参数：架构Schema
//返回值：构造模型参数
var User=mongoose.model("user",userSchema)

//当我们有了模型构造参数之后，我们就可以对users集合中的数据为所欲为

//#region 新建模型
// var admin=new User({
//     username:'222',
//     password:'1234564',
//     email:'126161@qq.com'
// })

// admin.save(function(err,ret){
//     if(err)
//     {
//         console.log('导入失败')
//     }
//     else
//     {
//         console.log('导入成功')
//         console.log(ret)
//     }
    
// })
//#endregion



//#region 查询模型

//查询所有
User.find(function(err,ret){
    if(err){
        console.log('查询失败')
    }
    else
    {
        console.log(ret)
    }
})

//按条件查询，前一个为参数
// User.find({
//     username:'hhh'
// },function(err,ret){
//     if(err){
//         console.log('查询失败')
//     }
//     else
//     {
//         console.log(ret)
//     }
// })

//只找符合对象的第一个，如果没有条件，则查询第一个
// User.findOne({
//     username:'hhh'
// },function(err,ret){
//     if(err){
//         console.log('查询失败')
//     }
//     else
//     {
//         console.log(ret)
//     }
// })
//#endregion

//#region 删除模型
// User.remove({
//     username:'hhh'
// },function(err,ret){
//     if(err){
//         console.log('删除失败')
//     }
//     else
//     {
//         console.log('删除成功')
//         console.log(ret)
//     }
// })
//#endregion

//#region 更新数据
// User.findByIdAndUpdate('5c0fdd1dbc91210ea495e34b',{password:'12345'},function(err,ret){
//         if(err){
//             console.log('更新失败')
//         }
//         else
//         {
//             console.log('更新成功')
//         }
//     })
//#endregion