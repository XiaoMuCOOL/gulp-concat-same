<div align="center">
  <br>
	<a href="https://www.npmjs.com/package/gulp-concat-same">
		<img src="https://img.shields.io/npm/v/gulp-concat-same.svg">
	</a>
	<a href="https://standardjs.com">
		<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
	</a>
  <a href="https://github.com/stylelint/stylelint">
		<img src="https://img.shields.io/badge/css%20style-stylelint-brightgreen.svg">
	</a>
	<a href="https://jq.qq.com/?_wv=1027&k=5tyQDAd">
		<img src="https://img.shields.io/badge/QQ%20Group-215259343-blue.svg">
	</a>
  <h1>gulp-concat-same</h1>
  <br>
  <p>
    gulp-concat-same is gulp plugin that merges different extname of the same name file.
    <br>
    合并不同扩展名的相同名字文件的gulp插件。
  <p>
  <br>
  <br>
</div>

## 基本信息

**作者** ： 小牧COOL

**QQ号** ： 895355044

**QQ群** ： [215259343][12]

## Install

```shell
$ npm install gulp-concat-same --save-dev

//or 使用国内镜像

$ cnpm i gulp-concat-same -D
```

## Usage

```javascript
'use strict'
const gulp = require('gulp')
const same = require('../index')

gulp.task('default', () =>
  gulp.src('css/**')
    .pipe(same({
      prefix: 'mu-',
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
)
```
## Arguments

`gulp-concat-same`只有两个参数:

key | default | description
----|---------|------------
`prefix` | `` | 添加前缀,默认为空
`suffix` | `.min` | 添加后缀,默认 `.min`

## gulp-concat-same 涉及技术

- [through2][1]: 对node.js原生stream.Transform进行了封装
- [gulp-util][2]: 开发gulp插件的实用方法
- [path][3]: node.js原生模块，操作路径

## License

**gulp-concat-same** is licensed under the MIT. [View the license file](https://github.com/xiaomucool/gulp-concat-same/blob/master/LICENSE)

All Rights Reserved · Powered by : **小牧COOL**

[1]:https://github.com/rvagg/through2
[2]:https://github.com/gulpjs/gulp-util
[3]:https://github.com/chalk/chalk
[12]:https://jq.qq.com/?_wv=1027&k=5tyQDAd
