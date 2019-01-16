<template>
    <div class="not-found">
        404 - Not found

        这里你可以通过store 或者 通过父子路由加载不同组件的方式把左边的菜单栏也干掉
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found{
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold
}
</style>
