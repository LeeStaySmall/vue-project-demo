/**
 * 存放一些全局方法，可直接调用
 */

const common = {
  install: function (Vue, options) {
    // 深copy
    Vue.prototype.$cloneDeep = function (Obj) {
      var buf
      if (Obj instanceof Array) {
        buf = []
        var i = Obj.length
        while (i--) {
          buf[i] = this.$cloneDeep(Obj[i])
        }
        return buf
      } else if (Obj instanceof Object) {
        buf = {}
        for (var k in Obj) {
          if (Obj.hasOwnProperty(k)) {
            buf[k] = this.$cloneDeep(Obj[k])
          }
        }
        return buf
      } else {
        return Obj
      }
    }
    // 所有的枚举， 这种方式同样可以替代过滤器
    Vue.prototype.$enum = {
      styleStatus: ['停用', '启用'],
      barType: ['样式类别', 'url类别']
    }
  }
}

export default common
