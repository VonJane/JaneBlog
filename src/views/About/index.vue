<template>
  <span>
  <div class="basics_info">
    <img src="../../assets/myself.jpg">
    <div class="basics_explain">
      <!-- <span style="margin: 1rem 0;">冯剑</span> -->
      <br />
      <!-- 小姐姐专线：<span class="span_">761673647</span> -->
      <br />
      We are all in the gutter,
      <br />
      but some of us are looking at the stars.
    </div>
  </div>
  <div id="myself" style="font-family: Raleway-Light">
    <p>
      We are all in the gutter, but some of us are looking at the stars.
    </p>
  </div>
</span>
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
    font-family: Raleway-Light;
    font-style: normal;
    line-height: 1.6em;
    font-size: 14px;
    text-transform: none;
    text-decoration: none;
    margin: 0 0 1.6em;
    text-align: left;
    color:rgba(28,32,24,.8);
    width: 40%;
  }
  #myself{
    display: none;
  }
  /*.basics_explain span {*/
    /*font-family: NotoSansSC-Bold;*/
    /*color: grey;*/
    /*font-size: 1.5rem;*/
  /*}*/
  /*.span_ {*/
    /*background: linear-gradient(to right, #a24f4f, blue);*/
    /*-webkit-background-clip: text;*/
    /*color: transparent;*/
     /*font-size: 1rem;*/
  /*}*/
  @media screen and (max-width: 1366px) {
    .basics_info {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      position: relative;
      justify-content:center;
      align-items:center;
    }
    .basics_info img {
      /* border: 1px solid rgb(226, 223, 223); */
      vertical-align:text-top;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
    .basics_explain {
      display: none;
    }
    #myself{
      display: block;
      font-weight: 400;
      font-family: Raleway-Light;
      font-style: normal;
      line-height: 1.6em;
      font-size: 14px;
      text-transform: none;
      text-decoration: none;
      margin-top: 1rem;
      text-align: center;
      color:rgba(28,32,24,.8);
      width: 100%;
      padding: 0 15%;
    }
  }
</style>


