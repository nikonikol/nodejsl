/**
 * student.js
 * 数据操作文件模块
 * 职责操作文件中的数据，只处理数据，不关心业务
 * 这里才是node的精华所在
 * 封装异步api
 */
var dbpath = './db.json'
var fs = require('fs')
/**
 * 获取所有学生数据
 */
exports.find = function (callback) {
    fs.readFile(dbpath,'utf8' ,function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}


/**
 * 添加保存学生
 */
exports.save = function (student,callback) {
    fs.readFile(dbpath,'utf8' ,function (err, data) {
        if (err) {
            return callback(err)
        }
        var students=JSON.parse(data).students
        //处理id不重复
        student.id=students[students.length-1].id+1
        //将用户对象保存到数组中
        students.push(student)
        //把对象数据转换成字符串
        var fileData=JSON.stringify({
            students:students
        })
        //把字符串保存到文件中
        fs.writeFile(dbpath,fileData,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}


/**
 * 更新学生
 */
exports.updateById = function (student,callback) {
    
    fs.readFile(dbpath,'utf8',function(err,data){
        if(err)
        {
            return callback(err)
        }
        var stus=JSON.parse(data).students
        student.id=parseInt(student.id)
        var studentedit=stus.find(function(item){
            return item.id===parseInt(student.id)
        })
        for(var key in student){
            studentedit[key]=student[key]
        }
        var fileData=JSON.stringify({
            students:stus
        })
  
        //把字符串保存到文件中
        fs.writeFile(dbpath,fileData,function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}   




/**
 * 删除学生
 */
exports.delete = function (id,callback) {

    
        fs.readFile(dbpath,'utf8',function(err,data){
            if(err)
            {
                return callback(err)
            }

            var stus=JSON.parse(data).students
           
            var deleteiid=stus.findIndex(function(item){
                return item.id===parseInt(id)
            })

            stus.splice(deleteiid,1)

            var fileData=JSON.stringify({
                students:stus
            })
     
            //把字符串保存到文件中
            fs.writeFile(dbpath,fileData,function(err){
                if(err){
                    return callback(err)
                }
                callback(null)
            })
        })
       

   
}

/**
 * 查找学生
 */
exports.findbyid = function (id,callback) {
    fs.readFile(dbpath,'utf8',function(err,data){
        if(err){
            return callback(err)
        }
        var students =JSON.parse(data).students
        var ret =students.find(function(item){
            return item.id===parseInt(id) 
        })
        callback(null,ret)
    })
}