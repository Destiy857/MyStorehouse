<template>
  <div class="navbar">
    <div class="navbar-left"><span> Liang Jia Shun</span></div>
    <div class="navbar-right">
      <div class="navBar-text" v-for="(item,i) in navData" :class="{ nav_li : active === i }" :key="i" @click="$router.push({ path: item.path }), active = i">
        <i :class="item.iconUrl"></i> {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      navData: [
        { name: '首页', path: '/', iconUrl: 'iconfont icon-shouye' },
        {
          name: '书单',
          path: '/bookList',
          iconUrl: 'iconfont icon-zanwushudan'
        },
        {
          name: '留言板',
          path: '/messageBoard',
          iconUrl: 'iconfont icon-liuyanban-05'
        },
        { name: '关于', path: '/about', iconUrl: 'iconfont icon-guanyu' }
      ]
    }
  }
}
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
  font-size: 26px;
  font-family: "Dancing Script", cursive;
}
.navbar-right {
  margin-left: 150px;
  line-height: 90px;
  display: flex;
}
.navbar-right div {
  padding: 0 29px;
  text-align: center;
}
.navbar-right div:hover {
  cursor: pointer;
  border-bottom: 3px solid #fff;
  transition: 0.5s;
}
.navBar-text {
  font-size: 19px;
  text-decoration: none;
  color: #f8e9e9;
}
.nav_li {
  border-bottom: 3px solid #fff;
  transition: 0.5s;
}
</style>
