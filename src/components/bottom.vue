<template>
  <el-footer>
    <div id="info-footer">
      <div id="infoFooterBlock" class="info-footer-inline"></div>
      <div id="socialLink" class="info-footer-inline">
        <!--<a href="https://twitter.com/JaneVon_"><svg-icon id="#twitter" icon-class="Twitter"  class-name='custom-class' /></a>-->
        <!--<a href="https://www.facebook.com/jian.wind.1"><svg-icon id="facebook" icon-class="Facebook"  class-name='custom-class' /></a>-->
        <a href="https://github.com/VonJane"><svg-icon id="github" icon-class="Github"  class-name='custom-class' /></a>
      </div>
    </div>
    <div id="copy">
      <p style="">COPYRIGHT 2019 JANE CARRIER</p>
      <a href="http://www.miitbeian.gov.cn/" >辽ICP备19000420号</a>
    </div><br/><br/>
  </el-footer>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    svg{
       margin:0.1rem;
    }
    #info-footer{
      width: 100%;
      /*background-color: #3a8ee6;*/
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    #socialLink{
      text-align: right;
    }
    #socialLink a{
      padding: 0.05rem;
    }
    #copy{
      text-align: center;
      /*margin:3rem;*/
      font-size: 0.2rem;
      font-family: Raleway-Light;
      color: rgba(28,32,24,.8);
    }

    @media screen and (max-width: 1366px) {
      #socialLink{
        text-align: center;
      }
    }
</style>
