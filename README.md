# node-echo-sd

An `echo-sd` wrapper for npm.

[![Build Status](https://travis-ci.org/kamataryo/node-echo-sd.svg?branch=master)](https://travis-ci.org/kamataryo/node-echo-sd)

```shell
$ npx echo-sd
＿人人人人人人＿
＞　突然の死　＜
￣Y^Y^Y^Y^Y^Y^￣
```

```shell
$ npm install echo-sd --global # or yarn add echo-sd --global
$ echo-sd
＿人人人人人人＿
＞　突然の死　＜
￣Y^Y^Y^Y^Y^Y^￣
```

```javascript
const echoSd = require('echo-sd')
echoSd(
  '--stress',
  '仕事のストレス',
  'echo-sdを改造',
  'ストレス解消',
  '仕事のストレス',
  'echo-sdを改造'
).then(result => console.log(result))
// 仕事のストレス
// 　　　　↘
// 　　　echo-sdを改造
// 　　　　↙
// ストレス解消
// 　　　　↘
// 　　　仕事のストレス
// 　　　　↙
// ＿人人人人人人人人＿
// ＞　echo-sdを改造　＜
// ￣Y^Y^Y^Y^Y^Y^Y^Y^￣
```

`echo-sd` is a cool formatted message generator created by [SATOH Fumiyasu @ OSS Technology Corp., Japan](https://github.com/fumiyas/home-commands/blob/master/echo-sd).

## requirements and features

see above or [>突然の死<ジェネレーター - 拡張 POSIX シェルスクリプト Advent Calendar 2013 - ダメ出し Blog](https://fumiyas.github.io/2013/12/25/echo-sd.sh-advent-calendar.html)

## development

```shell
$ git clone git@github.com:kamataryo/node-echo-sd.git
$ cd node-echo-sd
$ npm test
```
