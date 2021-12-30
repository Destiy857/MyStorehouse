<template>
  <div class="box">
    <div class='box-header'>
      <navBar />
    </div>
    <div class='box-main'>
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import navBar from '../layout/components/navBar.vue'

// @ is an alias to /src
export default {
  name: 'layout',
  components: {
    navBar
  },
  computed: {
    key () {
      console.log(this.$router)
      return this.$router.path
    }
  }
}
</script>

<style scoped>
.box-main {
  width: 100%;
  overflow: hidden;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
