<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="never" class="box-card">
        这是一个树洞，可以把你想说的话都写进来。不会有第三个人知道，无论什么事。
      </el-card>
      <div style="margin: 50px 0;"></div>
    </el-col>
    <el-col :span="20">
    <el-form ref="form"  label-width="80px">
      <el-form-item label="你的名字" label-width="100px">
        <el-input size="mini" ></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" label-width="100px">
        <el-input size="mini" ></el-input>
      </el-form-item>
      <el-form-item label="想说的话" label-width="100px">
        <el-input
          type="textarea"
          autosize
          v-model="textarea2">
        </el-input>
      </el-form-item>
    </el-form>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      name: "TreeHole",
      data(){
          return {
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          }
      },
      mounted() {
        this.hello()
      },
      methods:{
        hello(){
          console.log("helloworld!")
        }
      }
    }
</script>

<style scoped>
.box-card{
  width: 12rem;
}
</style>
