<template>
  <div>
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
                <h3 class="blog-detail" @click="goDetail(item.id)">{{ item.title }}</h3>
                <div class="blogContent">
                  <div class="blogImg">
                    <el-image
                      :src="item.img"
                      :preview-src-list="[item.img]"
                      alt="cover"
                    />
                  </div>
                  <div class="blogInner blog-detail" @click="goDetail(item.id)">{{ item.introduction }}</div>
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
          <el-card shadow="hover" class="globalBarBody">
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple" @click="writeBlog">
                  <svg width="40" height="40" viewBox="0 0 40 40" class="GlobalWrite-navIcon" fill="currentColor"><g fill="#06F" fill-rule="evenodd"><circle cx="20" cy="20" r="20" opacity=".12"></circle><path d="M23.487 10.463c1.896 0 2.583.193 3.277.555a3.824 3.824 0 011.607 1.573c.371.678.569 1.35.569 3.206v8.472c0 1.855-.198 2.527-.569 3.205a3.824 3.824 0 01-1.607 1.573c-.694.363-1.381.556-3.277.556h-6.96c-1.895 0-2.583-.193-3.276-.556a3.824 3.824 0 01-1.608-1.573c-.37-.678-.568-1.35-.568-3.205v-8.472c0-1.855.197-2.528.568-3.206.37-.678.915-1.21 1.608-1.573.693-.362 1.38-.556 3.277-.556h6.959zm0 2.08h-6.96c-1.407 0-1.836.081-2.273.31a1.72 1.72 0 00-.735.72c-.234.427-.317.847-.317 2.224v8.472c0 1.377.083 1.796.317 2.224.172.316.412.551.735.72.437.229.866.31 2.274.31h6.959c1.407 0 1.836-.081 2.274-.31a1.72 1.72 0 00.735-.72c.234-.428.317-.847.317-2.224v-8.472c0-1.377-.083-1.797-.317-2.225a1.72 1.72 0 00-.735-.72c-.438-.228-.867-.309-2.274-.309zm-1.991 9.778v1.873h-5.955V22.32h5.955zm2.977-3.328v1.872h-8.932v-1.872h8.932zm0-3.33v1.873h-8.932v-1.872h8.932z" fill-rule="nonzero"></path></g></svg>
                  <div class="GlobalWrite-topTitle">写博客</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <svg width="40" height="40" viewBox="0 0 40 40" class="GlobalWrite-navIcon" fill="currentColor"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F4C807" opacity=".12"></circle><path d="M6 6h28v28H6z"></path><path fill="#F4C807" d="M20.406 11.772l-2.172 2.176h-2.29c-1.438 0-1.875.085-2.322.324-.33.176-.575.422-.751.752-.24.448-.324.886-.324 2.326v7.12c0 1.44.085 1.878.324 2.326.176.33.421.576.75.752.421.225.834.314 2.08.323l7.35.001c1.438 0 1.876-.084 2.323-.324.33-.176.575-.422.751-.752.24-.448.324-.886.324-2.326v-4.905l2.172-2.175v7.08c0 1.94-.202 2.643-.58 3.352a3.95 3.95 0 01-1.643 1.645c-.708.379-1.41.58-3.346.58h-7.108c-1.936 0-2.639-.201-3.347-.58a3.95 3.95 0 01-1.642-1.645c-.378-.71-.58-1.413-.58-3.352v-7.12c0-1.94.202-2.643.58-3.352a3.95 3.95 0 011.642-1.645c.708-.379 1.41-.58 3.347-.58h4.462zm6.908-2.053c.384.116.747.338 1.168.759l.188.189c.42.421.642.785.758 1.17a1.98 1.98 0 010 1.163c-.116.385-.337.749-.758 1.17l-6.9 6.911c-.62.622-.827.81-1.078 1.004-.251.193-.496.34-.784.47-.288.131-.553.226-1.392.48l-1.088.332a1.303 1.303 0 01-1.625-1.629l.33-1.09c.255-.84.35-1.104.48-1.393.13-.29.277-.534.47-.785.193-.252.381-.46 1.001-1.081l6.9-6.911c.42-.421.784-.643 1.168-.76a1.97 1.97 0 011.162 0zm-3.204 4.096l-4.797 4.805c-.547.548-.709.723-.852.91-.112.146-.19.276-.265.443-.097.214-.175.44-.4 1.182l-.094.31.31-.095c.74-.225.965-.303 1.179-.4.167-.076.297-.154.442-.266.187-.143.361-.305.909-.853l4.797-4.805-1.23-1.23zm2.546-2.43c-.109.033-.23.11-.443.324l-.874.875 1.228 1.231.875-.876c.213-.213.29-.334.323-.444a.24.24 0 000-.153c-.033-.11-.11-.23-.323-.445l-.189-.188c-.213-.214-.334-.291-.443-.325a.238.238 0 00-.154 0z" fill-rule="nonzero"></path></g></svg>
                  <div class="GlobalWrite-topTitle">提问题</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <svg width="40" height="40" viewBox="0 0 40 40" class="GlobalWrite-navIcon" fill="currentColor"><g fill="#26BFBF" fill-rule="evenodd"><circle cx="20" cy="20" r="20" opacity=".12"></circle><path d="M21.987 11.686v2.169h-6.125c-1.43 0-1.863.064-2.297.306-.332.128-.574.383-.74.702-.255.447-.332.893-.332 2.297v7.018c0 1.442.09 1.876.332 2.297.166.345.408.587.74.766.434.23.868.319 2.297.319h7.018c1.43 0 1.863-.077 2.297-.32.345-.165.587-.408.766-.74.216-.408.296-.816.305-2.054l.001-6.316.025.025h2.17v6.074c0 1.914-.217 2.616-.587 3.318a3.92 3.92 0 01-1.634 1.62c-.689.383-1.403.575-3.317.575h-7.018c-1.915 0-2.616-.204-3.318-.575a3.891 3.891 0 01-1.62-1.62c-.384-.702-.575-1.404-.575-3.318v-7.018c0-1.914.204-2.629.574-3.318a3.996 3.996 0 011.62-1.633c.703-.383 1.404-.574 3.318-.574h6.1zm1.889 6.954c1.059 1.06 1.059 2.807 0 3.88l-.039.038a2.719 2.719 0 01-3.879 0l-2.45-2.553a.801.801 0 00-1.123 0l-.05.052c-.32.357-.32.893 0 1.212a.75.75 0 00.726.217c.51-.128 1.047.23 1.149.74a.946.946 0 01-.727 1.148 2.649 2.649 0 01-2.527-.74 2.796 2.796 0 010-3.905l.038-.025c1.098-1.085 2.808-1.085 3.892 0l2.463 2.488a.764.764 0 001.11 0l.038-.025a.855.855 0 000-1.187.876.876 0 00-.74-.217c-.51.128-1.02-.204-1.148-.727-.128-.51.204-1.021.727-1.149l.013-.013a2.703 2.703 0 012.527.766zm4.338-9.315v2.578h2.578v1.722h-2.578v2.59h-1.723v-2.602h-2.59v-1.71h2.59V9.325h1.723z" fill-rule="nonzero"></path></g></svg>
                  <div class="GlobalWrite-topTitle">讨论</div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
        <div class="sigeBar2">
          <el-card shadow="hover">
            <div class="block">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
      ],
      centerDialogVisible: false
    }
  },
  created () {
    const that = this
    this.$http.get('blog/list').then(function (data) {
      var result = data.data
      if (result.code === 1) {
        that.tableData = result.data
      }
    })
  },
  methods: {
    goDetail (id) {
      this.$router.push({ path: '/blogDetail', query: { id: id } })
    },
    writeBlog () {
      this.$router.push('/writeBlog')
    }
  }
}
</script>
<style lang="less" scoped>
.el-main {
  background-color: #eee;
  .mainBody {
    float: left;
    width: 45%;
    min-width: 600px;
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
          .blog-detail {
            cursor: pointer;
          }
          .blogContent {
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
      .blogList:hover {
        background-color: #eee;
      }
    }
  }
  .globalSideBar {
    overflow: hidden;
    margin-right: 15%;
    min-width: 250px;
    font-size: 14px;
    list-style: none;
    .globalBarBody {
      position: relative;
      padding: 20px 15px;
      border-bottom: 1px solid #f6f6f6;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      .globalBarQuestion {
        position: absolute;
        left: 100px;
      }
      .globalBarAnswer {
        position: absolute;
        left: 160px;
      }
      .grid-content {
        cursor: pointer;
        text-align: center;
      }
      .grid-content:hover {
          background-color: #eee;
      }
    }
    .sideBar1 {
      margin-bottom: 10px;
    }
    .sideBar2 {
    }
  }
  .el-timeline {
    padding-inline-start: 0px;
  }
}
.el-footer {
  background-color: #aaa;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
</style>
