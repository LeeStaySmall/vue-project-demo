export default {
  methods: {
    // 触发关闭时
    handleClose() {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.closeDialog()
        })
        .catch(_ => {})
    },
    // 关闭dialog
    closeDialog() {
      this.$emit('update:dialogVisible', false)
      this.resetForm()
    },
    // 重置表单
    resetForm(formName = 'form') {
      this.$refs[formName].resetFields()
    },
    // 提交表单
    submitForm(formName = 'form') {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
