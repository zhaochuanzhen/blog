<template>
  <el-container id="app" class="home-container">
    <el-header>
      <el-row :gutter="20" type="flex">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../assets/images/logo.jpeg" alt />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-menu class="el-menu" mode="horizontal" router>
              <el-menu-item index="/index">首页</el-menu-item>
              <el-menu-item index="/yuanzhuo">圆桌</el-menu-item>
              <el-menu-item index="/me">个人中心</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="4" class="header_user_info">
          <div class="grid-content bg-purple">
            <el-button type="danger" size="small">退出登录</el-button>
            <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <router-view/>
    <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      centerDialogVisible: false
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
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
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
</style>
