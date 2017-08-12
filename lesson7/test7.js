/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
http.get(process.argv[2], function (res) {
    res.setEncoding('utf8'); // 转化为utf-8编码格式
    res.on('data', function(data) {
        // res.on('data') 监听data事件
        console.log(data);
    }).on('error', function(err) {
        // res.on('error')  接收反应错误
        console.error('错误信息：' + err);
    }).on('end',function() {
        // res.on('end') 数据获取完毕事件
        console.log('数据获取完毕');
    })
});