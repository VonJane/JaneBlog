<template>
<div class="canvas">
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <bottom></bottom>
    <div id="cd-nav">
      <a class="cd-nav-trigger">Menu<span></span></a>
      <nav id="cd-main-nav">
        <ul>
          <li><router-link :to="'/About'">About</router-link></li>
          <li><router-link :to="'/ReadList'">ReadList</router-link></li>
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
  // logo 字体为 harlow solid italic
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
  ::selection{background:#B3E5FB; color:black;}
  ::-moz-selection{background:#B3E5FB; color:black;}
  ::-webkit-selection{background:#B3E5FB; color:black;}
  .canvas{
    max-width: 66.17%;
    margin: 0 auto;
    padding: 90px 90px 0;
  }


  code {
    background-color: #ff4a6e;
    color: white;
    align-items: center;
    font-weight: 400;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 120%;
    border-radius: 5px;
    margin: auto 3px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
  }
  .wscnph img{
    max-width: 34.2rem;
  }
  #cd-nav{
    display: none;
  }
  @media screen and (max-width: 1370px) {
    .canvas{
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    #cd-main-nav{
      display: block;
    }
    #cd-nav{
      display: block;
    }
    #cd-main-nav ul{
      list-style: none;
    }
  }
</style>
