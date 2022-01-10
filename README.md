# Scratch
Scratchとは、ブロックをつなげていくだけでプログラミングすることができるプログラミング初心者に最適な学習教材です。
## 事前実験準備
今回の実験は、先に実行するプログラムのインストールと環境構築を行うため、必ず読むようにしてください。

また、何か分からないことがあれば、ご連絡ください。
### Scratch 3.0ローカルサーバ構築
各自のPCにプログラムをダウンロードする前にまず、Node.jsとgitをインストールします。
#### Node.jsのインストール
安定版である「LTS」が書かれている方のボタンを選択してダウンロードしてください。

ダウンロードしたものを実行し、ライセンスに合意しディレクトリはそのままでカスタム設定もそのままにしてインストールを選択していってください。

nodejsのダウンロードは[こちら](https://nodejs.org/)
#### gitのインストール
以下のURL先に「Download」のボタンがあるのでそこからダウンロードしてください。

gitのダウンロードは[こちら](https://gitforwindows.org/)

インストール方法は[こちら](https://www.sejuku.net/blog/72673)

#### プログラムのダウンロード
次に下記の二つのリンクからプログラムをダウンロードします。

「ZIPファイルでダウンロード」の項目を参照してください。

ダウンロード方法は[こちら](https://tetsufuku-blog.com/github-download/)

scratch-guiのダウンロードは[こちら](https://github.com/igakilab/scratch-gui/tree/log-making)

scratch-vmのダウンロードは[こちら](https://github.com/igakilab/scratch-vm/tree/new-blocks)

ダウンロードしたものを解凍してscratch-gui、scratch-vmに名前を変更し任意のフォルダにまとめてください。
### guiとvmの連動登録
次にscratch-guiとscratch-vmを連動登録します。

まず、アプリ一覧もしくは検索にgitbashを入力し起動します。

まずは下記のコマンドを実行してください。

```bash
npm install --global yarn
```
入力して完了したら一度閉じてgitbashをもう一度入力し起動してください。

cdコマンドでscratch-guiの方まで移動してください。

現在いる場所がわからない場合は
```bash
pwd
```
と入力してください。

移動したら、以下をコピーして貼り付けてください。

```bash
git config --global user.name "test"
git config --global user.email "kennkyuusituyou.mail@gmail.com" 
git init
git remote add scratch-gui https://github.com/igakilab/scratch-gui.git
git remote -v
cd ../scratch-vm
git config --global user.name "test"
git config --global user.email "kennkyuusituyou.mail@gmail.com" 
git init
git remote add scratch-vm https://github.com/igakilab/scratch-vm.git
git remote -v
cd ../
cd scratch-vm && yarn install && yarn link
cd ../
cd scratch-gui && yarn link scratch-vm && yarn install
```

登録が出来たらscratch-guiにいることを確認して以下のコマンドを入力してください。
```bash
Yarn start
```
ファイヤーウォールから許可確認がくる場合がありますが許可してください。

少し待つとローカルホストに繋がるのでgoogle chrome から下記のリンクに入ります。

[http://localhost:8601/](http://localhost:8601/)

アクセスした際にcookieが許可されていないことがあるのでもし何も表示されなければ確認してください。

## 実験対象のScratchプログラム
### 実験環境
作成して頂きたいプログラムはコウモリに当たるとゲームオーバー、カギをゲットするとゲームクリアになるようなアクションゲームを作成して頂きたいです。

下記はイメージになります。

![ゲームオーバー](https://user-images.githubusercontent.com/56244478/148726870-10021407-8289-4286-adc5-f24698212c16.gif)

#### 制作中のお願い
ブロックの取り扱い

・変数とブロックの追加は自由ですが、プレイ画面上に表示することは禁止です

使用可能なスクリプト

・最大4つまでとします

背景はそのまま

変数やリスト作成したときに自動でチェックボックスにチェックが着きます。

記録するのには問題はありませんがチェックをつけたままだとPCに負荷がかかり動作に支障が出る場合があるので変数やリストを作った他のところにあるチェックボックスにはチェックを付けないようにしてください。

##### 1.猫の左右の動かし方
![猫の移動のさせ方](https://user-images.githubusercontent.com/56244478/148726245-5eb1b423-c95a-4912-aac0-ab31c3912097.gif)

まずは、みどりのはたが押された時にゲームスタートするようにします。

キーボードの右のキーを押された時に、ネコが右にうごくようにします。

右方向はx座標で、プラスの数を入れます。

◯歩の部分は自分が好きな数を入れてOKです👌

##### 2.床を変える方法
![床を変える](https://user-images.githubusercontent.com/56244478/148726879-d2964178-8ff7-41fa-aea4-7a849db309dd.gif)

##### 3.猫をジャンプさせる方法
![ジャンプ](https://user-images.githubusercontent.com/56244478/148726878-fdd8d7f7-ae18-414f-91d8-a78feb77095a.gif)

ヒント

ジャンプということは「重力」が常に働いていますよね。
ただし、このままだと床に着地できません！
##### 4.敵を動かす方法
![敵を動かす](https://user-images.githubusercontent.com/56244478/148726882-2040688b-81c8-4188-a072-9e6cfc853082.gif)

##### 5.ゲーム終了時
1~4を通してある程度の操作には慣れたと思います。

そこで次はゲーム終了時についてブロックを組み合わせて作ってみてください。

## 制作終了後
実験終了後は作成したscratchプログラムの保存データとWebSqlで所得したデータを回収します。

### Scratchプログラムの保存方法
画面左上にある「ファイル」をクリックし「コンピューターに保存」を選択してください。

するとダウンロードフォルダの中に表示されるので名前を「学生番号(6桁)＋自身の名前」に変更してください。

以下のURLからデータをアップロードしてもらったら完了です。

アップロード先は[こちら](https://drive.google.com/drive/folders/1kvceXkVtfqNM4gRZTK5NJRzk6zKsGtMc?usp=sharing)

### WebSqlで所得したデータの保存方法
画面右上にある「Google Chromeの設定」から「その他のツール」、「デベロッパーツール」の順で選択してください。

すると、上のバーにコンソールやアプリケーション、要素などが書かれているところがあるのでそこにある「アプリケーション」を選択してください。

選択すると中央に縦のメニューバーが表示されるようになるのでそこの「ウェブSQL」から「scratch3.0db」を押したら「Editing_Table」、「Running_Table」の中のデータを所得します。

以下のURLからエクセルデータを複製して名前を「学生番号(6桁)＋自身の名前」に変更してください。

アップロード先は[こちら](https://drive.google.com/drive/folders/16gpy7ZNUuGxgemuVZXf2PXc9qsIw9HgP?usp=sharing)

変更したエクセルの中に「Editing_Table」と「Running_Table」のデータ全てをコピーして各々張り付けしてください。

コピーするときはCTRL+Aだとその他余分なモノまでコピーされるのでお手数ですが範囲選択でコピーしてください。



# English
# scratch-gui
#### Scratch GUI is a set of React components that comprise the interface for creating and running Scratch 3.0 projects

## Installation
This requires you to have Git and Node.js installed.

In your own node environment/application:
```bash
npm install https://github.com/LLK/scratch-gui.git
```
If you want to edit/play yourself:
```bash
git clone https://github.com/LLK/scratch-gui.git
cd scratch-gui
npm install
```

**You may want to add `--depth=1` to the `git clone` command because there are some [large files in the git repository history](https://github.com/LLK/scratch-gui/issues/5140).**

## Getting started
Running the project requires Node.js to be installed.

## Running
Open a Command Prompt or Terminal in the repository and run:
```bash
npm start
```
Then go to [http://localhost:8601/](http://localhost:8601/) - the playground outputs the default GUI component

## Developing alongside other Scratch repositories

### Getting another repo to point to this code


If you wish to develop `scratch-gui` alongside other scratch repositories that depend on it, you may wish
to have the other repositories use your local `scratch-gui` build instead of fetching the current production
version of the scratch-gui that is found by default using `npm install`.

Here's how to link your local `scratch-gui` code to another project's `node_modules/scratch-gui`.

#### Configuration

1. In your local `scratch-gui` repository's top level:
    1. Make sure you have run `npm install`
    2. Build the `dist` directory by running `BUILD_MODE=dist npm run build`
    3. Establish a link to this repository by running `npm link`

2. From the top level of each repository (such as `scratch-www`) that depends on `scratch-gui`:
    1. Make sure you have run `npm install`
    2. Run `npm link scratch-gui`
    3. Build or run the repository

#### Using `npm run watch`

Instead of `BUILD_MODE=dist npm run build`, you can use `BUILD_MODE=dist npm run watch` instead. This will watch for changes to your `scratch-gui` code, and automatically rebuild when there are changes. Sometimes this has been unreliable; if you are having problems, try going back to `BUILD_MODE=dist npm run build` until you resolve them.

#### Oh no! It didn't work!

If you can't get linking to work right, try:
* Follow the recipe above step by step and don't change the order. It is especially important to run `npm install` _before_ `npm link`, because installing after the linking will reset the linking.
* Make sure the repositories are siblings on your machine's file tree, like `.../.../MY_SCRATCH_DEV_DIRECTORY/scratch-gui/` and `.../.../MY_SCRATCH_DEV_DIRECTORY/scratch-www/`.
* Consistent node.js version: If you have multiple Terminal tabs or windows open for the different Scratch repositories, make sure to use the same node version in all of them.
* If nothing else works, unlink the repositories by running `npm unlink` in both, and start over.

## Testing
### Documentation

You may want to review the documentation for [Jest](https://facebook.github.io/jest/docs/en/api.html) and [Enzyme](http://airbnb.io/enzyme/docs/api/) as you write your tests.

See [jest cli docs](https://facebook.github.io/jest/docs/en/cli.html#content) for more options.

### Running tests

*NOTE: If you're a windows user, please run these scripts in Windows `cmd.exe`  instead of Git Bash/MINGW64.*

Before running any tests, make sure you have run `npm install` from this (scratch-gui) repository's top level.

#### Main testing command

To run linter, unit tests, build, and integration tests, all at once:
```bash
npm test
```

#### Running unit tests

To run unit tests in isolation:
```bash
npm run test:unit
```

To run unit tests in watch mode (watches for code changes and continuously runs tests):
```bash
npm run test:unit -- --watch
```

You can run a single file of integration tests (in this example, the `button` tests):

```bash
$(npm bin)/jest --runInBand test/unit/components/button.test.jsx
```

#### Running integration tests

Integration tests use a headless browser to manipulate the actual html and javascript that the repo
produces. You will not see this activity (though you can hear it when sounds are played!).

Note that integration tests require you to first create a build that can be loaded in a browser:

```bash
npm run build
```

Then, you can run all integration tests:

```bash
npm run test:integration
```

Or, you can run a single file of integration tests (in this example, the `backpack` tests):

```bash
$(npm bin)/jest --runInBand test/integration/backpack.test.js
```

If you want to watch the browser as it runs the test, rather than running headless, use:

```bash
USE_HEADLESS=no $(npm bin)/jest --runInBand test/integration/backpack.test.js
```

## Troubleshooting

### Ignoring optional dependencies

When running `npm install`, you can get warnings about optionsl dependencies:

```
npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.2.7
```

You can suppress them by adding the `no-optional` switch:

```
npm install --no-optional
```

Further reading: [Stack Overflow](https://stackoverflow.com/questions/36725181/not-compatible-with-your-operating-system-or-architecture-fsevents1-0-11)

### Resolving dependencies

When installing for the first time, you can get warnings which need to be resolved:

```
npm WARN eslint-config-scratch@5.0.0 requires a peer of babel-eslint@^8.0.1 but none was installed.
npm WARN eslint-config-scratch@5.0.0 requires a peer of eslint@^4.0 but none was installed.
npm WARN scratch-paint@0.2.0-prerelease.20190318170811 requires a peer of react-intl-redux@^0.7 but none was installed.
npm WARN scratch-paint@0.2.0-prerelease.20190318170811 requires a peer of react-responsive@^4 but none was installed.
```

You can check which versions are available:

```
npm view react-intl-redux@0.* version
```

You will neet do install the required version:

```
npm install  --no-optional --save-dev react-intl-redux@^0.7
```

The dependency itself might have more missing dependencies, which will show up like this:

```
user@machine:~/sources/scratch/scratch-gui (491-translatable-library-objects)$ npm install  --no-optional --save-dev react-intl-redux@^0.7
scratch-gui@0.1.0 /media/cuideigin/Linux/sources/scratch/scratch-gui
├── react-intl-redux@0.7.0
└── UNMET PEER DEPENDENCY react-responsive@5.0.0
```

You will need to install those as well:

```
npm install  --no-optional --save-dev react-responsive@^5.0.0
```

Further reading: [Stack Overflow](https://stackoverflow.com/questions/46602286/npm-requires-a-peer-of-but-all-peers-are-in-package-json-and-node-modules)

## Troubleshooting

If you run into npm install errors, try these steps:
1. run `npm cache clean --force`
2. Delete the node_modules directory
3. Delete package-lock.json
4. run `npm install` again

## Publishing to GitHub Pages
You can publish the GUI to github.io so that others on the Internet can view it.
[Read the wiki for a step-by-step guide.](https://github.com/LLK/scratch-gui/wiki/Publishing-to-GitHub-Pages)

## Understanding the project state machine

Since so much code throughout scratch-gui depends on the state of the project, which goes through many different phases of loading, displaying and saving, we created a "finite state machine" to make it clear which state it is in at any moment. This is contained in the file src/reducers/project-state.js .

It can be hard to understand the code in src/reducers/project-state.js . There are several types of data and functions used, which relate to each other:

### Loading states

These include state constant strings like:

* `NOT_LOADED` (the default state),
* `ERROR`,
* `FETCHING_WITH_ID`,
* `LOADING_VM_WITH_ID`,
* `REMIXING`,
* `SHOWING_WITH_ID`,
* `SHOWING_WITHOUT_ID`,
* etc.

### Transitions

These are names for the action which causes a state change. Some examples are:

* `START_FETCHING_NEW`,
* `DONE_FETCHING_WITH_ID`,
* `DONE_LOADING_VM_WITH_ID`,
* `SET_PROJECT_ID`,
* `START_AUTO_UPDATING`,

### How transitions relate to loading states

As this diagram of the project state machine shows, various transition actions can move us from one loading state to another:

![Project state diagram](docs/project_state_diagram.svg)

_Note: for clarity, the diagram above excludes states and transitions relating to error handling._

#### Example

Here's an example of how states transition.

Suppose a user clicks on a project, and the page starts to load with url https://scratch.mit.edu/projects/123456 .

Here's what will happen in the project state machine:

![Project state example](docs/project_state_example.png)

1. When the app first mounts, the project state is `NOT_LOADED`.
2. The `SET_PROJECT_ID` redux action is dispatched (from src/lib/project-fetcher-hoc.jsx), with `projectId` set to `123456`. This transitions the state from `NOT_LOADED` to `FETCHING_WITH_ID`.
3. The `FETCHING_WITH_ID` state. In src/lib/project-fetcher-hoc.jsx, the `projectId` value `123456` is used to request the data for that project from the server.
4. When the server responds with the data, src/lib/project-fetcher-hoc.jsx dispatches the `DONE_FETCHING_WITH_ID` action, with `projectData` set. This transitions the state from `FETCHING_WITH_ID` to `LOADING_VM_WITH_ID`.
5. The `LOADING_VM_WITH_ID` state. In src/lib/vm-manager-hoc.jsx, we load the `projectData` into Scratch's virtual machine ("the vm").
6. When loading is done, src/lib/vm-manager-hoc.jsx dispatches the `DONE_LOADING_VM_WITH_ID` action. This transitions the state from `LOADING_VM_WITH_ID` to `SHOWING_WITH_ID`
7. The `SHOWING_WITH_ID` state. Now the project appears normally and is playable and editable.

## Donate
We provide [Scratch](https://scratch.mit.edu) free of charge, and want to keep it that way! Please consider making a [donation](https://secure.donationpay.org/scratchfoundation/) to support our continued engineering, design, community, and resource development efforts. Donations of any size are appreciated. Thank you!
