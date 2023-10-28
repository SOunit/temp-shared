ここに`05-http-request`のコード全コピーして作業してください。

## 変更点

- とりあえずカルーセル動くようにした
- AngularJS に関連したタスクを潰した。これで作業できるといいけど、わからんかったら聞いて
  - AngularJS 内で Slider の初期化をしてる。
  - ほかの JS ロジックが必要なときは、`$scope.functionName = function(){}`でその中にロジック書いたら動く
    - ほぼ普通の JS と変わらんと思うけど、ややこしかったら聞いて。基本は JS のロジック触らずにできたらよいけど、わからん。
- スタイルシート分けた。partial を使ってる。
  - どこがどこに依存してるかわかりやすいようにファイル分けた。
  - scss を使うことにした。less だと partial がうまくコンパイルされんかった。
    - `Live Sass Compiler`という vscode の plugin いれて、`command + shift + p`でコマンドウィンドウ開いて、`Live Sass: Watch Sass`をすると、ファイルの変更がウォッチされる
- prettier の設定ファイルを導入した
  - こっちの vscode のフォーマット設定となおとのやつで差分あって、差分チェック時に鬱陶しかった。これで解消されているはず