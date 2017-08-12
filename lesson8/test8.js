/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
http.get(process.argv[2], function (res) {
    var size = 0;
    var text;
    res.setEncoding('utf8');
    res.on('data', function(data) {
        size += data.length;
        text += data;
    }).on('error', function(err) {
        // res.on('error')  接收反应错误
        console.error('错误信息：' + err);
    }).on('end',function() {
        // res.on('end') 数据获取完毕事件
        console.log('字符串内容长度为：' +size+'行')
        console.log(text);
        console.log('数据获取完毕');
    })
});