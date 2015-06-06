"use strict"; // strict mode にする (cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Strict_mode)

// モジュール読み込み
var fs = require('fs');
var rl = require('readline');

var printRecipie = function(recipie) {
    console.log(recipie.id + ': ' + recipie.name);
};

var getNameById = function(id, recipies) {
    for (var i = recipies.length - 1; i >= 0; i--) {
        var recipie = recipies[i];
        if (recipie.id === id) {
            return recipie.name;
        }
    }
    new Error('the id in not in the object');
};



(function main() {
    var filename = process.argv[2]; // argv = ["node", "app.js", filename, [id, id, ....]]

    var targetIds = process.argv.slice(3).map(function(i) {
        return i - 0; // typeof i === 'string'
    });

    if (typeof filename !== "string") { // ファイル名が与えられていない
        console.log("No Input File.");
        process.exit();
    }

    // ファイル入力(非同期)のためのモジュール
    var inputStream = fs.createReadStream(filename);

    // 一行づつ読み込むためのインターフェース
    var inputReadLine = rl.createInterface({
        'input': inputStream,
        'output': {}
    });

    var inputLines = []; // the array of the data of recipe

    var recipies = []; // レシピの名前とIDを含めるオブジェクトの配列

    inputReadLine
        .on('line', function(line) { // 一行読み込む
            inputLines.push(line);
        })
        .on('close', function() { // ファイル読み込み完了
            inputLines.forEach(function(line, index) {

                // split at the space(s)
                line = line.split(/\s+/);

                var name = line[0];
                var url  = line[1];
                var recipieObj = {
                    id: index + 1, // 1-indexed
                    name: name,
                    url:url
                };

                recipies.push(recipieObj);
            });
            // 引数(ID)の処理
            if (targetIds.length === 0) {
                // print all the recipies
                recipies.forEach(printRecipie);
            } else {
                //print the specified recipie(s)
                targetIds.forEach(function(id) {
                    var name = getNameById(id, recipies);
                    var recipie = {
                        name: name,
                        id: id
                    };
                    printRecipie(recipie);
                });
            }
        });

})();
