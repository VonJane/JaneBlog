<template>
  <div class="basics_info">
    <img src="../../assets/myself.jpg">
    <div class="basics_explain">
      <!-- <span style="margin: 1rem 0;">冯剑</span> -->
      </br>
      <!-- 小姐姐专线：<span class="span_">761673647</span> -->
      </br>
      我是一只胖胖,至于我为什么叫胖胖.你最好去问一只兔子. . . . . .
      </br>
      我其实一点儿，也不胖.
    </div>
  </div>
</template>
<script>
  export default {
    name: 'About'
  }
</script>
<style scoped>
  .basics_info {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    position: relative;
  }
  .basics_info img {
    /* border: 1px solid rgb(226, 223, 223); */
    width: auto;
    height: auto;
    max-width: 54%;
    max-height: 40%;
  }
  .basics_explain {
    font-weight: 400;
    font-family: "Hiragino Sans GB";
    font-style: normal;
    line-height: 1.6em;
    font-size: 16px;
    text-transform: none;
    text-decoration: none;
    margin: 0 0 1.6em;
    text-align: left;
    width: 40%;
  }
  /*.basics_explain span {*/
    /*font-family: NotoSansSC-Bold;*/
    /*color: grey;*/
    /*font-size: 1.5rem;*/
  /*}*/
  .span_ {
    background: linear-gradient(to right, #a24f4f, blue);
    -webkit-background-clip: text;
    color: transparent;
     font-size: 1rem;
  }
</style>


