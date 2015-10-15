var nodejade  = require('jade')
var path      = require('path')
var normalize = path.normalize
var resolve   = path.resolve
var dirname   = path.dirname
var join      = path.join

function cojade(body, options) {
  return function(cb) {
    var html = nodejade.render(body, options)
    cb(null, html)
  }
}

function jade(options) {
  return function *jade(next) {
    yield next

    var body = this.body.toString()

    if (body == 'Not Found') {
      throw new Error('路径：' + this.path + ' 对应的文件没有找到')
    }

    var path = this.path
    var root = this.app.root
    root = normalize(resolve(root))
    path = normalize(join(root, path))

    options = options || {}
    options.filename = path

    this.body = yield cojade(body, options)
    this.type = 'text/html'
  }
}

module.exports = jade