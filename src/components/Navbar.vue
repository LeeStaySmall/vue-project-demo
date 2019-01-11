<template>
  <div class="navbar-component">
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar-component {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 180px;
  z-index:100;
  background-color: #252a2f;
  box-shadow: 0 1px 20px 0 #e4e8eb;
  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      height: 50px;
      line-height: 50px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        transition: all .3s;
        &.router-link-exact-active {
          color: #fff;
          background-color: #00c1de;
        }
      }
    }
  }
}
</style>
