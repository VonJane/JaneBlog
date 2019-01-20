<template>
  <div class="_layout">
    <div class="_layout_left">
      <router-link :to="'/Blog'"><span id="logo">JANEBLOG</span></router-link>
    </div>
    <div class="_layout_right">
      <ul>
        <li><router-link :to="'/Blog'">Blog</router-link></li>
        <li><router-link :to="'/TreeHole'">TreeHole</router-link></li>
        <li><router-link :to="'/About'">About</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'navigation',
    data(){
      return{
        
      }
    }
  }
</script>

<style scoped>
  ._layout {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    margin-bottom: 2rem;
  }
  ._layout_left{
    text-align: center;
  }
  #logo {
    font-size: 0.8rem;
    font-family: Raleway-Bold;
    color: #217ca6;
  }
  #logo:hover {
    color: black;
  }
  ._layout_right li {
    float: right;
    font-family: Raleway-Light;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    font-weight: 500;
    font-style: normal;
    line-height: 1.6em;
    text-transform: capitalize;
    letter-spacing: .05em;
  }
  ._layout_right li a
  {
      color: #1c2018;
  }
  ._layout_right li a:hover
  {
    color: #969696;
  }
  ._layout_left,._layout_right
  {
    cursor: pointer;
  }
  @media screen and (max-width: 1370px) {
    ._layout_right{
      display: none;
    }
    ._layout_left{
      text-align: center;
    }
    ._layout {
      padding: 90px 90px 0;
      text-align: center;
      display: flex;
      /*justify-content: space-between;*/
      margin-bottom: 1rem;
      justify-content:center;
      align-items:center;
    }
  }
</style>
