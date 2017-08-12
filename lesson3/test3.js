/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs'); // 引入fs模块
var data = fs.readFileSync(process.argv[2],'utf-8'); // 获取文本内容 文件末尾的最后一行并没有进行换行,否则会多一行
var num = data.split('\n').length; // 截取换行的字符串放在一个数组中,然后获取数组的长度
console.log('这个文件的内容行数为：'+num+'行'); // 打印数组的长度
// 使用方法 node test3.js 文件名