# Readable Code 勉強会 2015
* 使う言語: Node.js 

## 実行環境
Node.js v0.12.4

## レシピの記述方法
次のようなテキストファイルをこのディレクトリに作成してください

```
<<レシピ名>> <<URL>>
<<レシピ名>> <<URL>>
.
.
.

```

## 実行方法
レシピを`recipe-data.txt`というファイルに作成したとします

表示したいレシピのIDを`id1, id2 ...`とします

IDは記載されている順に`1,2,3,...`と付与されます

レシピのIDを与えない場合はすべてのレシピが表示されます

以下のコマンドで実行することができます
```
node app.js ./recipe-data.txt [id1 [id2 [[...]]]]
```
