"use strict"; // strict mode にする (cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)

// モジュール読み込み
var fs = require('fs');
var rl = require('readline');

(function main(){
    var filename = process.argv[2]; // argv = ["node", "app.js", filename]

    if(typeof filename !== "string") { // ファイル名が与えられていない
        console.log("No Input File.");
        process.exit();
    }

    var inputStream = fs.createReadStream(filename);
    // ファイル入力(非同期)のためのモジュール
    var inputReadLine = rl.createInterface({'input': inputStream, 'output': {}});
    // 一行づつ読み込むためのインターフェース

    var recipies = []; // レシピを保存する

    inputReadLine
        .on('line', function(line){ // 一行読み込む
            recipies.push(line); // レシピに追加
        })
        .on('close', function(){ // ファイル読み込み完了
            recipies.forEach(function(recipie, index){
                console.log((index + 1) + ':' + recipie); // 1-indexed
            });
        });
})();
