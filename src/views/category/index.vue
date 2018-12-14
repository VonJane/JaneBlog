<template >
<div>
  <div class="overall"  >
    <el-row v-for="item in articleList" :key="item.id">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"><h1 class="headline" >{{item.articleTitle}}</h1></div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content bg-purple-light"><h3 class="article_date" style="font-style: oblique;" >{{item.createDate}}</h3></div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content bg-purple-light"><div class="article_content" v-html="item.articleContent"></div></div>
      </el-col>
      <el-col :span="24">
        <div class="article_category" v-if="item.articleCategory !== null && item.articleCategory !== ''">In {{item.articleCategory}}</div>
        <span v-else></span>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
export default {
    name:"category",
    data(){
      return {
        listQuery: {
          pageNum: 1,
          pageSize: 10
        },
        articleList:null
      }
    },
    mounted:{
        init()
    },
    methods:{
        init(){
            fetchBlogCategoryList()
        },
        fetchBlogCategoryList(){
                
        }
    }
}
</script>
<style scoped>
.overall {
    width: 100%;
    padding: 0 15%;
    font-weight: 400;
    font-style: normal;
    line-height: 1.6em;
    font-size: 16px;
    text-transform: none;
    text-decoration: none;
    margin: 0 0 1.6em;
  }
  .article_category{
    font-family: Raleway;
    color: grey;
  }
  .article_date{
    font-family: Raleway-Bold;
    color: grey;
  }
  .overall img {
    left: 0%;
    top: 0%;
    padding: 0.5rem;
    white-space: normal;
    width: 100%;
  }
  .article_content{
    font-family: NotoSansSC-Light;
    padding: 10px 0 50px 0;
  }
  .headline {
    font-weight: 400;
    font-style: normal;
    /* line-height: 1.5em;  */
    font-family: NotoSansSC-Bold;
    font-size: 36px;
    text-transform: none;
    text-decoration: none;
    letter-spacing: .02em;
    margin-bottom: 1rem;
  }
</style>
