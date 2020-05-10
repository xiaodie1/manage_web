<template>
  <nav ref="navbar" style="background:rgb(56,93,184);display: flex;" :class="'jp-navbar  jp-navbar--' + navbarLayoutType " >
    <div class="jp-navbar__header" style="width: 330px">
      <!-- <h1 class="jp-navbar__brand" @click="$router.push({ name: 'home' })"> -->
          <h1 class="jp-navbar__brand">
        <a class="jp-navbar__brand-lg" href="javascript:;">
          <img src='../../assets/logo.png' height="40px" width="40px" style="margin-left: 10px;margin-right: 10px"/>
         {{productName}}
        </a>
        <a class="jp-navbar__brand-mini" href="javascript:;">
          <img src='../../assets/logo.png' height="40px" width="40px"/>
        </a>
      </h1>
    </div>
    <div  style="height: 60px;flex:1;text-align: left;">
      <h3 style="color: #fff"></h3>
    </div>
    <div style="height: 60px;line-height: 60px">
      <el-menu
        class="jp-navbar__menu jp-navbar__menu--right"
        mode="horizontal">
        <!-- <el-menu-item>
          <template slot="title">
                <notice-icon
                    class="action notice"
                    :tabs="noticeTabs" >
              </notice-icon>
          </template>
        </el-menu-item> -->
        <el-menu-item class="jp-navbar__avatar">
          <el-dropdown :show-timeout="0" placement="bottom" style="height: 52px;">
            <span class="el-dropdown-link" style="font-size: 14px">
              您好，{{ userName }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
        <el-menu-item class="jp-navbar__avatar">
          <template slot="title">
            <el-button class="button_exit" @click.native="logoutHandle()"  icon="el-icon-switch-button">退出登录</el-button>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>
  </nav>
</template>

<script>
  import UpdatePassword from './UpdatePassword'
//   import {clearLoginInfo} from '@/utils'
//   import NoticeIcon from '@/components/NoticeIcon'
//   import ColorPicker from '@/components/colors/ColorPicker'

  export default {
    data () {
      return {
        updatePassowrdVisible: false,
        activeIndex: '',
        topMenuList: [],
        topHideMenuList: [],
        allMenuList: [],
        screenWidth: document.body.clientWidth,
        noticeTabs: [
          {
            title: '通知',
            count: 0,
            list: [
            ],
            emptyText: '你已查看所有通知',
            emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
          },
          {
            title: '站内信',
            count: 0,
            list: [
            ],
            emptyText: '你已读完所有消息',
            emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
          }
        ]
      }
    },
    components: {
      UpdatePassword
    },
    computed: {
      navbarLayoutType () {
        return '1'
      },
    //   topMenuActiveIndex: {
    //     get () {
    //       return this.$store.state.common.topMenuActiveIndex
    //     },
    //     set (val) {
    //       this.$store.commit('common/updateTopMenuActiveIndex', val)
    //     }
    //   },
    //   sidebarFold: {
    //     get () {
    //       return this.$store.state.common.sidebarFold
    //     },
    //     set (val) {
    //       this.$store.commit('common/updateSidebarFold', val)
    //     }
    //   },
    //   mainTabs: {
    //     get () {
    //       return this.$store.state.common.mainTabs
    //     },
    //     set (val) {
    //       this.$store.commit('common/updateMainTabs', val)
    //     }
    //   },
      userName: {
        get () {
          return 'xxx'
        }
      },
      photo: {
        get () {
          return 'this.$store.state.user.photo'
        }
      },
      logo () {
        return 'this.$store.state.config.logo'
      },
    //   defaultTheme () {
    //     return this.$store.state.config.defaultTheme
    //   },
      productName () {
        return '管理系统'
      },
      defaultLayout () {
        return ''
      }
    },
    created () {
      this.allMenuList = JSON.parse(sessionStorage.getItem('allMenuList') || '[]')
      console.log(this.defaultLayout)
    //   this.$store.commit('common/updateLeftMenuList', this.allMenuList)
    //   this.$http({
    //     url: '/notify/oaNotify/self/data?pageNo=1&pageSize=10&isSelf=true&readFlag=0',
    //     method: 'get'
    //   }).then(({data}) => {
    //     this.noticeTabs[0].count = data.page.count
    //     this.noticeTabs[0].url = '/notify/MyNotifyList'
    //     this.noticeTabs[0].list = data.page.list.map((item) => {
    //       return {
    //         id: item.id,
    //         avatar: item.createBy.photo,
    //         title: item.title,
    //         description: item.content,
    //         datetime: item.createDate,
    //         type: '通知'
    //       }
    //     })
    //   })
    //   this.$http({
    //     url: '/mailBox/list?pageNo=1&pageSize=10&mail.title=&readstatus=0',
    //     method: 'get'
    //   }).then(({data}) => {
    //     this.noticeTabs[1].count = data.page.count
    //     this.noticeTabs[1].url = '/mailbox/index'
    //     this.noticeTabs[1].list = data.page.list.map((item) => {
    //       return {
    //         id: item.id,
    //         avatar: item.sender.photo,
    //         title: item.mail.title,
    //         description: item.mail.content,
    //         datetime: item.sendtime,
    //         type: '站内信'
    //       }
    //     })
    //   })
    },
    mounted () {
      if (this.defaultLayout === 'top') {
        // this.fixTopMenu()
      }
    },
    watch: {
    //   topMenuActiveIndex (val) {
    //     this.topMenuList.forEach((menu) => {
    //       if (menu.id === val) {
    //         this.showLeftMenu(menu)
    //       }
    //     })
    //     this.topHideMenuList.forEach((menu) => {
    //       if (menu.id === val) {
    //         this.showLeftMenu(menu)
    //       }
    //     })
    //   }
    //   defaultLayout (val) {
    //     this.topMenuList = []
    //     this.topHideMenuList = []
    //     this.$store.commit('common/updateLeftMenuCategory', '')
    //     this.$store.commit('common/updateLeftMenuList', this.allMenuList)
    //   }
    },
    methods: {
    //   fixTopMenu () {
    //     let width = window.getComputedStyle(this.$refs.navbar).width
    //     let size = (parseInt(width) - 700) / 124
    //     this.topMenuList = []
    //     this.topHideMenuList = []
    //     this.allMenuList.forEach((item, index) => {
    //       if (index < size - 1) {
    //         this.topMenuList.push(item)
    //       } else {
    //         this.topHideMenuList.push(item)
    //       }
    //     })
    //   },
    //   showRight () {
    //     this.$emit('showRight', true)
    //   },
    //   showLeftMenu (menu) {
    //     this.$store.commit('common/updateLeftMenuList', menu.childNodes)
    //     this.$store.commit('common/updateLeftMenuCategory', menu.name)
    //   },
      // 修改密码
      updatePasswordHandle () {
        this.updatePassowrdVisible = true
        this.$nextTick(() => {
          this.$refs.updatePassowrd.init()
        })
      },
      // 退出
      logoutHandle () {
        this.$confirm(`确定进行[退出]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: '/sys/logout',
            method: 'get'
          }).then(({data}) => {
            if (data && data.success) {
            //   clearLoginInfo()
            //   this.$router.replace({name: 'login'})
            }
          })
        })
      }
    }
  }
</script>
<style>
  .jp-navbar__avatar .button_exit{
    background-color:transparent !important;
    border: none;
    color: white;
    padding: 0 15px 0 0;
  }
</style>
