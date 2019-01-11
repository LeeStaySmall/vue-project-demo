/**
 * 全局的el-table resize
 * 使用方式：
 * 引入此mixin；
 * 在el-table 上添加 ‘#el-table’ id 并 bind 上 height 属性。
 */

export default {
  data() {
    return {
      tableHeight: '0'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.windowResize()
    })
    window.onresize = () => this.windowResize()
  },
  methods: {
    // 监听窗口变化
    windowResize() {
      let table = document.getElementById('el-table-height')
      table && (this.tableHeight = window.innerHeight - table.getBoundingClientRect().top - 40)
    }
  }
}
