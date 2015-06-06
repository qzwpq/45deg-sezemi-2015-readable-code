"use strict"; // strict mode にする (cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)

// モジュール読み込み
var fs = require('fs');

(function main(){
    var filename = process.argv[2]; // argv = ["node", "app.js", filename]
    var contents = fs.readFileSync(filename, 'utf-8');
    console.log(contents);
})();
