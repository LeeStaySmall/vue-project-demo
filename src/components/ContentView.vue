<template>
  <div class="content-view-component">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.content-view-component {
  position: relative;
  padding-left: 180px;
  height: 100%;
  //   left: 180px;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  overflow: auto;
}
</style>
