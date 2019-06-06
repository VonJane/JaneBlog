<template>
  <div id="overall">
  <el-row :gutter="12">
    <el-col :span="24">
      <div id="readListContent" v-html="ReadList"></div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  import qs from 'qs'
  import showdown from 'showdown'
    export default {
      name: "ReadList",
      mounted(){
        // var navigationContainer = $('#cd-nav'),
        //   mainNavigation = navigationContainer.find('#cd-main-nav ul');
        // //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        // mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
        // $('.cd-nav-trigger').removeClass('menu-is-open');
        this.initPage()
        },
      data(){
          return {
            leftform:'left',
            ReadList: {}
          }
      },
      methods:{
        // pushMessage(){
        //   const _data = this.TreeHole
        //   let param = qs.stringify({
        //     treeholeSenderName: _data.TreeHole_sender_name,
        //     treeholeSenderEmail: _data.TreeHole_sender_email,
        //     treeholeContent: _data.TreeHole_content
        //   })
        //   let that = this
        //   this.$http.post(that.$baseUrl+'/springboot-mybatis/TreeHoleController/insertMessage',param).then(res =>{
        //     debugger
        //     if (res.data.code === 0 && res.data.data === 1) {
        //       this.$notify({
        //         title: '成功',
        //         message: '已经成功将信息发送给博主！',
        //         type: 'success'
        //       });
        //     }else{
        //       this.$notify.error({
        //         title: '失败',
        //         message: '发送失败，请检查网络！'
        //       });
        //     }
        //   }).catch((res) => {
        //     console.log(res)
        //   })
        // }
        initPage(){
          debugger
          this.$http.get('https://raw.githubusercontent.com/VonJane/readList/master/README.md').then(res =>{
            var converter = new showdown.Converter({simpleLineBreaks:true,emoji:true,customizedHeaderId:true
            }); //初始化转换器
            converter.setFlavor('github');
            var htmlcontent  = converter.makeHtml(res.data); //将MarkDown转为html格式的内容
            this.ReadList = htmlcontent;
            }).catch((res) => {
            console.log(";")
          })
        }
      }
    }
</script>

<style scoped>
  #overall{
    padding: 2% 15% 15% 15%;
    box-sizing:content-box;
    width: 100%;
    font-weight: 400;
    font-style: normal;
    line-height: 1.6em;
    font-size: 1.6em;
    text-transform: none;
    text-decoration: none;
    text-align: left;
  }
  h1 {
    size:2.7rem
  }
  .box-card{
    width: 12rem;
  }
  #readListContent{
    padding: 10px 0 50px 0;
    overflow: hidden;
  }
  @media screen and (max-width: 1366px) {
    .box-card{
      width: 7rem;
    }
  }
</style>
