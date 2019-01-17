<template slot-scope="scope">
  <div>
    <div class="overall"  >
      <el-row v-for="(item,index) in articleList" :key="item.id">
        <el-col :span="24">
          <router-link :to="{path: '/Detail', query: {articleId:item.id}}"><div class="grid-content bg-purple-dark"><h1 class="headline" >{{item.articleTitle}}</h1></div></router-link>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple-light"><h3 class="article_date" style="font-style: oblique;" >{{item.createDate}}</h3></div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple-light"><div class="article_content" v-html="item.articleContent"></div></div>
        </el-col>
        <el-col :span="24">
          <router-link :to="{path: '/Category', query: {categoryId:item.articleCategoryId}}">
            <div class="article_category" v-if="item.articleCategory !== null && item.articleCategory !== ''">In {{item.articleCategory}}</div>
            <span v-else></span>
          </router-link>
        </el-col>
        <el-col :span="24">
          <div v-if="index !== articleList.length-1"><br/><br/><br/></div>
          <br v-else />
        </el-col>
      </el-row>
      <hr />
      <el-pagination
        small
        layout="prev, next"
        page-size="10"
        prev-text="上一页"
        next-text="下一页"
        :current-page="pagination.pageNum"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
      <hr/>
    </div>
  </div>
</template>
<script>
export default {
    name:"Category",
    data(){
      return {
        pagination:{
          pageNum: 1,
          pageSizes: [10, 20, 30, 50],
          pageSize: 10,
          total: 1
        },
        queryData: {
          pageNum: Number,
          pageSize: Number,
          articleCategoryId:this.$route.query.categoryId
        },
        articleList:null,
      }
    },
    methods:{
        init(){
          this.fetchBlogCategoryList()
        },
      // pageSize
      handleSizeChange(num) {
        this.pagination.pageSize = this.queryData.pageSize = num
        this.fetchBlogCategoryList()
      },
      // 当前page
      handleCurrentChange(num) {
        this.pagination.pageNum = this.queryData.pageNum = num
        this.fetchBlogCategoryList()
      },
        fetchBlogCategoryList(){
          this.queryData.pageNum = this.pagination.pageNum
          this.queryData.pageSize = this.pagination.pageSize
          let that = this
          this.$http.get(that.$baseUrl+'/springboot-mybatis/ArticleController/getArticleCategoryPages',{
            params:this.queryData})
            .then(response =>   {
              this.articleList = response.data.data.pag
              this.pagination.total = parseInt(response.data.data.total)
            })
            .catch((response) => {
              console.log(response);
            });
        }
    },
    mounted(){
      this.init()
    }
}
</script>
<style scoped>
  .overall {
    box-sizing:content-box;
    width: 70%;
    padding: 0 15%;
    font-weight: 400;
    font-style: normal;
    line-height: 1.6em;
    font-size: 1.6em;
    text-transform: none;
    text-decoration: none;
    /*margin: 0;*/
  }

  .article_category{
    font-family: Raleway-Light;
    color: grey;
  }
  .article_date{
    font-family: Raleway-Light;
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
    font-family: "Hiragino Sans GB";
    color: rgba(28,32,24,.8);
    padding: 10px 0 50px 0;
  }
  .headline {
    font-weight: 500;
    color: #1c2018;
    font-style: normal;
    line-height: 1.5em;
    font-family: "PingFang SC";
    font-size: 0.65rem;
    text-transform: none;
    text-decoration: none;
    letter-spacing: .02em;
    /*margin-bottom: 1rem;*/
  }
  .headline:hover{
    color:#0085bd;
  }
  @media screen and (max-width: 1366px) {
    .overall {
      /*background-color: #A0A0A0;*/
      /*box-sizing:inherit;*/
      width: 70%;
      padding: 0 15%;
      font-weight: 500;
      font-style: normal;
      line-height: 1.6em;
      font-size: 0.5rem;
      text-transform: none;
      text-decoration: none;
      /*margin: 0 0 1.5em;*/

    }
  }
</style>
