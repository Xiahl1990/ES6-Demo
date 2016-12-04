"use strict";

/**
 * Created by Administrator on 2016/12/4 0004.
 */
var a = [];

var _loop = function _loop(i) {
    a[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
a[6](); //
//# sourceMappingURL=index.js.map