"use strict";
exports.__esModule = true;
exports.customfox = exports.fox = void 0;
function fox() {
    return "https://randomfox.ca/images/" + Math.floor((Math.random() * 122) + 1) + ".jpg";
}
exports.fox = fox;
function customfox(urls) {
    return urls[Math.floor((Math.random() * urls.length))];
}
exports.customfox = customfox;
