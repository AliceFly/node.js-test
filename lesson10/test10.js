/**
 * Created by Administrator on 2017/8/12.
 */
var net = require("net");
var server = net.createServer(function(socket){
   socket.write('data',function() {
       var date = new Date();
       var year = date.getFullYear();
       var month = date.getMonth() > 10 ? date.getMonth() : '0'+date.getMonth();
       var day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
       var hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
       var min = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
       console.log(year + '-' + month + '-' + day + ' ' + hour + ':' + min);
   })
    socket.end('data');
})
server.listen(process.ragv[2],function() {
    console.log('node is ok')
})