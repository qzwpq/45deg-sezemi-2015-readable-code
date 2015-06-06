# メモ
# No.1
### 実際のコード
https://github.com/45deg/45deg-sezemi-2015-readable-code/blob/08850d2af205455981788e005a2062f92f667382/app.js
### 説明
モジュール読み込み部分とメインの処理部分をつなげて書くとわかりづらいと感じた。
そのため、mainという関数としてメインの処理部分を明示した。


# 気づいたこと
* 処理全体を(function main(){ ... }()でくくっている
モジュールの読み込みと分かれていて読みやすい

# No.7
### 実際のコード
https://github.com/qzwpq/45deg-sezemi-2015-readable-code/blob/315c693ef096285a2a6b4865875f2bae591671f6/app.js#L7-L20
### 説明
簡単な書式を使って出力する関数を作ることで今後の機能拡張が楽になる
