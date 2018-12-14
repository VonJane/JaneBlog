<template>
<div class="canvas">
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <bottom></bottom>
  </div>
</div>
</template>

<script>
  import navigation from './components/navigation';
  import bottom from './components/bottom';

  export default {
    name: 'App',
    components: {
      navigation,
      bottom
    },data:function()
    {
      return {}
    }
  }
</script>

<style>
  @import url('../static/css/clear.css');
  @import url('common/font/font.css');
  .canvas{
    max-width: 1180px;
    margin: 0 auto;
    padding: 90px 90px 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
