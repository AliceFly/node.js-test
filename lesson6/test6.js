/**
 * Created by Administrator on 2017/8/11.
 */
var mymodule = require('./mymodule');
mymodule(process.argv[2],process.argv[3],function(err,list) {
    if(err)
        return console.log(err);
    list.forEach(function(data) {
        console.log(data)
    })

})