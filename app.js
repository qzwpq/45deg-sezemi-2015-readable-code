"use strict"; // strict mode にする (cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)

// モジュール読み込み
var fs = require('fs');
var rl = require('readline');

(function main(){
    var filename = process.argv[2]; // argv = ["node", "app.js", filename, [id, id, ....]]

    var targetIds = process.argv[3];

    if(typeof filename !== "string") { // ファイル名が与えられていない
        console.log("No Input File.");
        process.exit();
    }

    var inputStream = fs.createReadStream(filename);
    // ファイル入力(非同期)のためのモジュール
    var inputReadLine = rl.createInterface({'input': inputStream, 'output': {}});
    // 一行づつ読み込むためのインターフェース

    var recipieNameArray = []; // レシピの名前の配列

    var recipies=[]; // レシピの名前とIDを含めるオブジェクトの配列

    inputReadLine
        .on('line', function(line){ // 一行読み込む
            recipieNameArray.push(line); // レシピに追加
        })
        .on('close', function(){ // ファイル読み込み完了
            recipieNameArray.forEach(function(recipie, index){
                var recipieObj = {
                    id   : index + 1, // 1-indexed
                    name : recipie
                };

                recipies.push(recipieObj);
            });
        });

})();
