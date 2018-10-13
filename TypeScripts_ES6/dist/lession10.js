"use strict";
var getpercent = function () { return 2; };
var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = 20; }
    console.log(value + tax);
    console.log(arguments.length);
    //
};
getBonus(undefined, 1);
//# sourceMappingURL=lession10.js.map