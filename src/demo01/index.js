/**
 * Created by Administrator on 2016/12/4 0004.
 */
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); //