/**
 * Created by Administrator on 2017/8/11.
 */
var num = 0;
process.argv.forEach(function(value,index){
        if(index >=2) {
            num += Number(process.argv[index]);
        }
})
console.log(num);