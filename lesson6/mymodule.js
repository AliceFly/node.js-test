/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var path = require('path');
/**
 * obj1 目录
 * obj2 后缀
 * callback 回调函数
 */
module.exports = function(obj1,obj2,callback) {
    fs.readdir(obj1,function(err,list) {
        if(err)
            return callback(err);
        // 筛选和后缀相同的文件
        data = list.filter(function(file) {
            return path.extname(file) == '.'+obj2;
        })
        callback(null,data);
    })
}
