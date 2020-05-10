<template>
  <div
    class="jp-wrapper"
    :class="{ 'jp-sidebar--fold': sidebarFold }">
    <template>
      <main-navbar ref="navbar" @showRight="showRight" />
      <main-sidebar @change="setSidebarFold"/>
      <!-- <div class="jp-content__wrapper" :style="{ 'min-height': documentClientHeight + 'px' }">
        <main-content/>
      </div> --> -->
      <!-- <main-right ref="mainRight"/> -->
    </template>
  </div>
</template>

<script>
  import MainNavbar from './layout/common_top'
  import MainSidebar from './layout/common_left'
  export default {
    data () {
      return {
        isRightVisible: false,
        sidebarFold: false
      }
    },
    components: {
      MainNavbar,
      MainSidebar
    },
    computed: {
      documentClientHeight: {
        get () {
            return '110px'
        //   return this.$store.state.common.documentClientHeight
        },
        set (val) {
          this.$store.commit('common/updateDocumentClientHeight', val)
        }
      }
    //   sidebarFold: {
    //     get () {
    //         console.log(localStorage.getItem('sidebarFold'))
    //       return localStorage.getItem('sidebarFold')
    //     }
    //   }
    },
    created () {
    },
    mounted () {
    //   this.getUserInfo()
    //   this.getConfig()
    //   this.resetDocumentClientHeight()
    },
    methods: {
      // 重置窗口可视高度
      resetDocumentClientHeight () {
        this.documentClientHeight = document.documentElement['clientHeight']
        window.onresize = () => {
          this.documentClientHeight = document.documentElement['clientHeight']
          this.$refs.navbar.fixTopMenu()
        }
      },
      setSidebarFold (val) {
          console.log(val)
          this.sidebarFold = val
      },
      showRight (flag) {
        console.log(flag)
        this.$refs.mainRight.showRight()
        this.isRightVisible = flag
      },
      // 获取当前登录用户信息
      getUserInfo () {
        // this.$http({
        //   url: '/sys/user/info',
        //   method: 'get'
        // }).then(({data}) => {
        //   if (data.success) {
        //     this.$store.commit('user/updateUser', data.user)
        //   }
        // })
      }
      // 获取产品name 和 logo
    //   getConfig () {
    //     this.$http.get('/sys/sysConfig/queryById').then(({data}) => {
    //       if (data.success) {
    //         this.$store.commit('config/updateProductName', data.config.productName)
    //         this.$store.commit('config/updateLogo', data.config.logo)
    //         if (!localStorage.getItem('defaultLayout')) {
    //           this.$store.commit('config/updateDefaultLayout', data.config.defaultLayout)
    //         }
    //         if (!localStorage.getItem('defaultTheme')) {
    //           this.$store.commit('config/updateDefaultTheme', data.config.defaultTheme)
    //         }
    //       }
    //     })
    //   }
    }
  }
// body .el-table th.gutter 解决table head和body错位(head后面多了一个class=gutter 的th)
</script>
<style>
  body .el-table th.gutter{
    display: table-cell!important;
  }
</style>
