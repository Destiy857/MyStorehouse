<template>
  <div class="navbar">
    <div class="navbar-left"><span> Liang Jia Shun</span></div>
    <div class="navbar-right">
      <router-link to='/'><i class="iconfont icon-shouye"></i> 首页</router-link>
      <router-link to='/bookList'><i class="iconfont icon-zanwushudan"></i> 书单</router-link>
      <router-link to='/messageBoard'><i class="iconfont icon-liuyanban-05"></i> 留言板</router-link>
      <router-link to='/messageBoard'><i class="iconfont icon-guanyu"></i> 关于</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 90px;
  background: #333;
  display: flex;
}
.navbar-left {
  margin-left: 240px;
  line-height: 90px;
}
.navbar-left span {
  color: #f8e9e9;
  font-size: 22px;
  font-family: "Dancing Script", cursive;
}
.navbar-right {
  margin-left: 100px;
  line-height: 90px;
  display: flex;
}
.navbar-right a {
  text-decoration: none;
  color: #f8e9e9;
  margin-left: 6rem;
}
</style>
