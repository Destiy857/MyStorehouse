<template>
  <div class="navbar">
    <div class="navbar-left"><span> Liang Jia Shun</span></div>
    <div class="navbar-right">
      <router-link to='/'>首页</router-link>
      <router-link to='/bookList'>书单</router-link>
      <router-link to='/messageBoard'>留言板</router-link>
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
  color: rgb(248, 233, 233);
  font-size: 19px;
}
.navbar-right {
  margin-left: 180px;
  line-height: 90px;
}
.navbar-right a {
  text-decoration: none;
  color: rgb(248, 233, 233);
  margin-left: 110px;
}
</style>
