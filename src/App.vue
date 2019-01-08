<template>
<div class="canvas">
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <bottom></bottom>
    <div id="cd-nav" style="display: none">
      <a class="cd-nav-trigger">Menu<span></span></a>
      <nav id="cd-main-nav">
        <ul>
          <li><router-link :to="'/About'">About</router-link></li>
          <li><router-link :to="'/TimeLine'">TimeLine</router-link></li>
          <li><router-link :to="'/Blog'">Blog</router-link></li>
          <li><a @click="gotoTop">返回顶部</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
  import navigation from './components/navigation';
  import bottom from './components/bottom';
  import '../static/js/menu.js';

  export default {
    name: 'App',
    components: {
      navigation,
      bottom
    },data:function()
    {
      return {}
    },
    methods:{
      gotoTop(){
        //平湖滚动到顶部栏
        $('html,body').animate({scrollTop:$('.canvas').offset().top}, 800);
      }
    }
  }
</script>

<style>
  @import url('../static/css/clear.css');
  @import url('common/font/font.css');
  @import url('../static/css/menu.css');
  .canvas{
    max-width: 66.17%;
    margin: 0 auto;
    padding: 90px 90px 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
  }
  @media screen and (max-width: 1367px) {
    .canvas{
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    #cd-nav{
      display: block;
    }
  }
</style>
