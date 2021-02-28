<template>
  <div class="body">
    <el-card class="box-card detail">
      <el-page-header @back="goBack">
      </el-page-header>
      <el-divider></el-divider>
      <div v-html="blog">
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      blog: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  created () {
    const that = this
    this.$http.get('blog/detail?id=' + this.$route.query.id).then(function (data) {
      var result = data.data
      if (result.code === 1) {
        that.blog = result.data.content
      }
    })
  }
}
</script>
<style lang="less" scoped>
.body {
    background-color: #eee;
    padding: 20px;
}
.detail {
  width: 60%;
  margin: 0 auto;
  padding: 50px;
}
</style>
