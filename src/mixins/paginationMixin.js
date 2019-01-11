export default {
  data() {
    return {
      pageParams: {
        page: 1,
        pageSize: 20
      },
      pageTotal: null,
      pageSizes: [10, 20, 30, 40, 50]
    }
  },
  created() {
    this.copyPageParams = Object.assign({}, this.pageParams)
  },
  methods: {
    handleSizeChange() {
      this.search(false)
    },
    handleCurrentChange() {
      this.search(false)
    },
    resetPageParams() {
      this.pageParams = Object.assign({}, this.copyPageParams)
    }
  }
}
