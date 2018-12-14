<template>
  <el-footer>
    <div id="out">
      <a href="https://twitter.com/JaneVon_"><svg-icon id="#twitter" icon-class="Twitter"  class-name='custom-class' /></a>
      <a href="https://www.facebook.com/jian.wind.1"><svg-icon id="facebook" icon-class="Facebook"  class-name='custom-class' /></a>
      <a href="https://github.com/VonJane"><svg-icon id="facebook" icon-class="Github"  class-name='custom-class' /></a>
    </div>
    <div id="copy">
      <p style="">COPYRIGHT 2007-2018 JANE CARRIER</p>
    </div>
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
    svg #twitter:hover{
      color:red;
    } 
    #out{
      padding-left:700px;
      margin-right: 50px;
       margin:3rem;
    }
    svg{
       margin:0.2rem;
    }
    #copy{
      text-align: center;
      margin:3rem;
      font-family: Raleway;
    }
</style>
