<template>
  <div id="overall">
  <el-row :gutter="12">
    <el-col :span="16">
      <el-card shadow="never" class="box-card">
        这是一个树洞，可以把你想说的话都写进来。不会有第三个人知道，无论什么事。
      </el-card>
      <div style="margin: 50px 0;"></div>
    </el-col>
    <el-col :span="20">
    <el-form :label-position="leftform" ref="TreeHole" :model="TreeHole">
      <el-form-item label="你的名字" prop="TreeHole_sender_name" label-width="100px">
        <el-input v-model="TreeHole.TreeHole_sender_name" size="mini" ></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" prop="TreeHole_sender_email" label-width="100px">
        <el-input v-model="TreeHole.TreeHole_sender_email" size="mini" ></el-input>
      </el-form-item>
      <el-form-item label="想说的话" prop="TreeHole_content" label-width="100px">
        <el-input v-model="TreeHole.TreeHole_content"
          type="textarea"
          autosize
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" native-type="submit" @click="pushMessage">我写完了</el-button>
      </el-form-item>
    </el-form>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  import qs from 'qs'
    export default {
      name: "TreeHole",
      data(){
          return {
            leftform:'left',
            TreeHole: {}
          }
      },
      methods:{
        pushMessage(){
          const _data = this.TreeHole
          let param = qs.stringify({
            treeholeSenderName: _data.TreeHole_sender_name,
            treeholeSenderEmail: _data.TreeHole_sender_email,
            treeholeContent: _data.TreeHole_content
          })
          let that = this
          this.$http.post(that.$baseUrl+'/springboot-mybatis/TreeHoleController/insertMessage',param).then(res =>{
            debugger
            if (res.data.code === 0 && res.data.data === 1) {
              this.$notify({
                title: '成功',
                message: '已经成功将信息发送给博主！',
                type: 'success'
              });
            }else{
              this.$notify.error({
                title: '失败',
                message: '发送失败，请检查网络！'
              });
            }
          }).catch((res) => {
            console.log(res)
          })
        }
      }
    }
</script>

<style scoped>
  #overall{
    padding: 2% 15% 15% 15%;
  }
.box-card{
  width: 12rem;
}

  @media screen and (max-width: 1366px) {
    .box-card{
      width: 7rem;
    }
  }
</style>
