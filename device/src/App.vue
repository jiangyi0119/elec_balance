<template>
    <div id="app">
         <keep-alive>
           <transition :name="transitionName">
             <router-view></router-view>
           </transition>
         </keep-alive>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {    
      transitionName: 'slide-right',
    }
  },
  // watch $route 决定使用哪种过渡
  watch: {
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    // }
    $route (to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index){
          // 设置动画名称
          this.transitionName = 'slide-right';
        } else{
          this.transitionName = 'slide-left';
        }
    }
  },
}
</script>

<style>
  html,body{
    padding:0px;
    margin:0px;
    height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}
.login-bg{
  background-image: url(assets/images/login-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  height:100%;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 100ms;
  position: absolute;
}.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
