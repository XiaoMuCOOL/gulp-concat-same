'use strict'
const through = require('through2')
const gutil = require('gulp-util')
const path = require('path')
// const PluginError = gutil.PluginError

// 常量
// const PLUGIN_NAME = 'gulp-concat-same'

function gulpConcatsame ({prefix = '', suffix = '.min'} = {}) {
  // 创建一个让每个文件通过的 stream 通道
  let fileList = {}
  let stream = through.obj(
    function (file, enc, cb) {
      if (!file.isBuffer()) {
        // this.emit('error', new PluginError(PLUGIN_NAME, PLUGIN_NAME + '：只支持Buffer!'))
        return cb()
      }
      let info = path.parse(file.path)
      let name = info.name
      if (!fileList[name]) {
        fileList[name] = []
      }
      fileList[name].push(file)
      cb()
    },
    function (cb) {
      for (let key in fileList) {
        let newFile = fileList[key][0]
        if (fileList[key].length !== 1) {
          let contentArr = fileList[key].map(file => {
            return file.contents
          })
          let concatContent = Buffer.concat(contentArr)
          let info = path.parse(newFile.path)
          let newPath = info.dir + '/' + prefix + info.name + suffix + info.ext
          newFile = new gutil.File({
            base: newFile.dir,
            cwd: newFile.root,
            path: newPath,
            contents: concatContent
          })
        }
        this.push(newFile)
      }
      cb()
    }
  )

  // 返回文件 stream
  return stream
}

module.exports = gulpConcatsame
