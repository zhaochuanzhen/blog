<template>
  <el-container id="app" class="home-container">
    <el-header>
      <el-row :gutter="20" type="flex">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../assets/images/logo.jpeg" alt />
          </div>
        </el-col>
        <el-col :span="8" class="flag">
          <i class="ColumnPageHeader-Line"></i>
          <div class="title">
            写文章
          </div>
        </el-col>
        <el-col :span="12" class="flag">
          <div class="btn-div">
            <el-button type="success btn-publish" round @click="addBlog">发布博客</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="editor">
        <el-input v-model="blog.title" placeholder="请输入博客标题"></el-input>
        <QuillEditor v-model="blog.content"></QuillEditor>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// 注意这边的路径，按照自己项目引入的实际路径引入即可
import QuillEditor from './quill-editor'
export default {
  components: {
    QuillEditor // 组件还是要写的，和import名保持一致。
  },
  data () {
    return {
      blog: {
        content: '', // 富文本绑定的参数
        title: ''
      }
    }
  },
  methods: {
    addBlog () {
      const that = this
      this.$http.post('/blog/add', this.blog).then(function (data) {
        var result = data.data
        console.log(data)
        if (result.code === 1) {
          that.$router.push('/index')
        }
      })
    }
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
  .publish {
    right: 20px;
  }
}
.el-header {
  // border-bottom: solid 1px #e6e6e6;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  position: relative;
  background-clip: content-box;
  img {
    height: 60px;
    float: right;
  }
  .header_user_info {
    margin: auto;
  }
  .grid-content {
    margin-top: -3px;
  }
  .flag {
    color: #121212;
    .ColumnPageHeader-Line {
      position: absolute;
      height: 29px;
      width: 1px;
      background-color: #ebebeb;
      top: 50%;
      transform: translateY(-50%);
    }
    .btn-div {
      height: 100%;
      width: 120px;
      padding: 10px;
      float: right;
    }
  }
  .title {
    top: 17px;
    text-align: left;
    margin-left: 20px;
    font-weight: 600;
    position: fixed;
    z-index: 2;
    -webkit-font-smoothing: subpixel-antialiased;
  }
}
.el-main {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-main {
  .editor {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
