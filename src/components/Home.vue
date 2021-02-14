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
            <el-menu class="el-menu" mode="horizontal">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">圆桌</el-menu-item>
              <el-menu-item index="3">个人中心</el-menu-item>
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
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="mainBody">
        <div class="slideshow">
          <a class="Card css-8z7gkt" href="https://www.zhihu.com/special/19556355" target="_blank">
            <img
              src="https://pic2.zhimg.com/v2-ec6995c978a7447ec051eb6fe9239715.png"
              class="css-1mcaze2"
            />
          </a>
        </div>
        <div class="itemList">
          <el-card class="box-card">
            <div :key="item.id" v-for="item in tableData" class="blogList">
              <div class="blogItem">
                <h3>{{ item.title }}</h3>
                <div class="blogContent">
                  <div class="blogImg">
                    <img
                      src="https://pic2.zhimg.com/50/v2-2132494e8d3a3f31ba16aad875d9c8f3_400x224.jpg"
                      alt="cover"
                    />
                  </div>
                  <div class="blogInner">{{ item.content }}</div>
                  <div class="blogActions">
                    <el-badge :value="12" class="item">
                      <el-button size="small">评论</el-button>
                    </el-badge>
                    <el-badge :value="9" class="item">
                      <el-button size="small">收藏</el-button>
                    </el-badge>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="globalSideBar">
        <div class="sideBar1">
          <el-card shadow="hover">
            <div v-for="o in 10" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
        <div class="sigeBar2">
          <el-card shadow="hover">
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          content:
            '常青： 这是我本人亲身实践快速成为某领域的高手的经验，精华提纯版，全文共5000多字，它是一套完整的知识体系，答应我看完它，看完这一篇，保证你就知道怎么去建立自己的知识体系了。 建议先收藏，后阅读，以供随…'
        },
        {
          id: 2,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 3,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 4,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 5,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 6,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 7,
          title: '从零开始学数据分析，什么程度可以找工作，如何计划学习方案？',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
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
.el-main {
  background-color: #eee;
  .mainBody {
    float: left;
    width: 45%;
    margin-left: 15%;
    margin-right: 10px;
    .slideshow {
      overflow: hidden;
      box-sizing: border-box;
      margin: 0px 0px 10px;
      min-width: 0px;
      color: rgb(23, 81, 153);
      display: block;
      font-size: 0px;
      img {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        max-width: 100%;
        height: auto;
        width: 100%;
        border-radius: 2px;
        object-fit: cover;
      }
    }
    .itemList {
      .blogList {
        list-style-type: none;
        .blogItem {
          border-bottom: 1px solid #f0f2f7;
          .blogContent {
            cursor: pointer;
            -webkit-transition: color 0.14s ease-out;
            transition: color 0.14s ease-out;
            line-height: 1.67;
            .blogImg {
              position: relative;
              width: 190px;
              height: 105px;
              margin-top: -2px;
              margin-right: 18px;
              margin-bottom: 4px;
              float: left;
              overflow: hidden;
              background-position: 50%;
              background-size: cover;
              border-radius: 4px;
              -webkit-transform: translateZ(0);
              transform: translateZ(0);
              img {
                width: 100%;
                height: 100%;
              }
            }
            .blogInner {
              max-height: 100px;
              margin-top: 9px;
              margin-bottom: -4px;
              overflow: hidden;
            }
            .blogActions {
              clear: both;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              padding: 10px 20px;
              margin: 0 -20px -10px;
              color: #646464;
              button {
                line-height: 30px;
                padding: 0 12px;
                border-color: transparent;
                background: rgba(0, 102, 255, 0.1);
                padding: 0 10px;
                color: #06f;
                margin: 0 5px 10px;
              }
              .item {
                margin-right: 20px;
              }
            }
          }
        }
      }
    }
  }
  .globalSideBar {
    overflow: hidden;
    margin-right: 15%;
    .sideBar1 {
      margin-bottom: 10px;
    }
    .sideBar2 {
    }
  }
}
.el-footer {
  background-color: #aaa;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
</style>
