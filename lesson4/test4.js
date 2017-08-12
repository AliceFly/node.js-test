/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
fs.readFile(process.argv[2],'utf-8',function(err,data) {
    if(err)
        return console.error(err);
    console.log('这个文件的内容行数为：'+data.split('\n').length+'行');
})
// 启用方法：node test4.js 文件名(使用于结尾没有换行)