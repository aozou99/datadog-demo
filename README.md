# Datadog Demo
## 概要
Datadgoへ送信するアクセスログを出力するアプリケーションです。  
各エンドポイントの中身無く、setTimeoutでランダムでsleepを行っています。

負荷テストツールのartilleryを使って負荷を掛けて、継続的にアクセスログを流し続ける想定です。

## Install
```
$ npm install
$ npm install -g artillery
```

## Start up
```
$ node app.js
```

## artillery 
```
$ artillery run artillery.yaml
```

## 参照
https://zenn.dev/aozou/articles/16c5be690ac592
