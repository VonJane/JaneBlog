<template>
  <div class="_layout">
    <router-link :to="'/Blog'"><span class="_layout_left">JANEBLOG</span></router-link>
    <div class="_layout_right">
      <ul>
        <li><router-link :to="'/About'">About</router-link></li>
        <li><router-link :to="'/TimeLine'">TimeLine</router-link></li>
        <li><router-link :to="'/Blog'">Blog</router-link></li>
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
    margin-bottom: 3rem;
  }
  ._layout_left {
    font-size: 1rem;
    font-family: Raleway-Bold;
    color: #217ca6;
  }
  ._layout_left:hover {
    color: black;
  }
  ._layout_right li {
    float: left;
    width: 2.5rem;
    font-family: Raleway;
    font-weight: 400;
    font-style: normal;
    line-height: 1.6em;
    font-size: 16px;
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
  @media screen and (max-width: 500px) {
    ._layout_right{
      display: none;
    }
  }
  @media screen and (max-width: 320px) {
    ._layout {
      padding: 90px 90px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }
</style>
