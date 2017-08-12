/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var path= require('path');
// process.argv[2] 目录
fs.readdir(process.argv[2], function (err, list) {
    // obj 后缀名
    list.forEach(function (obj) {
        if (path.extname(obj) == '.' + process.argv[3]){
            console.log(obj);
        }
    });
});
// 使用方法 node test5.js 目录 后缀
