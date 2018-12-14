<template>
  <div class="_layout">
    <span class="_layout_left">JANEBLOG</span>
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
    padding: 0rem 0rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
  }
  ._layout_left {
    font-size: 36px;
    font-family: Raleway-Bold;
    color: #217ca6;
  }
  ._layout_left:hover {
    color: black;
  }
  ._layout_right li {
    float: left;
    width: 4.5rem;
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
</style>
