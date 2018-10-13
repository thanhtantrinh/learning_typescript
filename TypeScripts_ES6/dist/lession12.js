"use strict";
var displayColorsSpead = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messagesSpead = "Hello";
var colors = ['Red', 'Green', 'Blue'];
displayColorsSpead.apply(void 0, [messagesSpead].concat(colors));
//# sourceMappingURL=lession12.js.map