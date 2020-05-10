<template>
  <aside id="g-sidebar" class="jp-sidebar" style="background-color: rgb(41,50,57)" :style="sidebarLayoutSkin === '5' || sidebarLayoutSkin === '9' ?`background:${defaultTheme}`: ''" :class="'jp-sidebar--' + sidebarLayoutSkin">
    <div class="jp-sidebar__inner" style="overflow-x: hidden;bottom: 50px;">
      <el-menu unique-opened
               :default-active="menuActiveName || 'home'"
               :collapse="sidebarFold"
               :collapseTransition="false"
               class="jp-sidebar__menu"
               background-color="rgb(41,50,57)"
               text-color="rgb(195, 195, 195)">
        <li class="jp-menu-category" v-if="!sidebarFold">{{leftMenuCategory}}</li>
        <sub-menu
          v-for="menu in leftMenuList"
          :key="menu.id"
          :menu="menu"
          :dynamicMenuRoutes="dynamicMenuRoutes"
        >
        </sub-menu>
      </el-menu>
    </div>
    <div>
      <el-menu id="low" class="jp-navbar__menu" style="position: absolute;border: none;" :class="sidebarFold ? 'whicoll':'whi'">
        <el-menu-item style="height: 40px;line-height: 40px;" class="jp-navbar__switch" :collapse="sidebarFold"  @click="sidebarFold = !sidebarFold">
          <i :class="sidebarFold ? 'fa fa-indent':'fa fa-outdent'"></i>
        </el-menu-item>
      </el-menu>
    </div>
  </aside>
</template>
<style lang="scss">
.jp-menu-category {
    padding: 0 20px;
    font-size: 12px;
    line-height: 38px;
    color: #76838f;
    text-transform: uppercase;
    -webkit-transition: all .25s,font .1s .15s,color .1s .15s;
    transition: all .25s,font .1s .15s,color .1s .15s;
}
.jp-wrapper #g-sidebar .jp-sidebar__menu.el-menu{
  background-color: rgb(41,50,57);
}
.jp-wrapper #g-sidebar.jp-sidebar__menu.el-menu .el-menu-item:hover{
  background-color: rgb(1,50,57);
}
.jp-wrapper #g-sidebar .el-menu {
  > .el-menu-item,
  > .el-submenu > .el-submenu__title {
    color: rgb(195, 195, 195);
    &:focus,
    &:hover {
      border-bottom-color: transparent;
      color: #fff !important;
      background-color: rgba(46,117,235,0.9) !important;
    }
  }
}
.jp-sidebar,
.jp-sidebar__inner {
  padding-top: 25px;
  overflow: initial;
}
#low .el-menu-item {
  background-color: rgb(57,66,76);
}

.whi {
  height: 40px;
  width: 230px;
  text-align:center;
  line-height: 40px;
  bottom:0px;
  -webkit-transition: all .25s,font .1s .15s,color .1s .15s;
  transition: all .25s,font .1s .15s,color .1s .15s;

}
.whicoll {
  height: 40px;
  line-height: 40px;
  width: 64px;
  text-align:center;
  bottom:0px;
  -webkit-transition: all .25s,font .1s .15s,color .1s .15s;
  transition: all .25s,font .1s .15s,color .1s .15s;
}
</style>

<script>
  import SubMenu from './_common_left_submenu'

  export default {
    data () {
      return {
        sidebarFold: false,
        dynamicMenuRoutes: [{name: '客户管理', id: 'khgl', childNodes: [{name: '客户列表', id: 'khgllist'}]}]
      }
    },
    components: {
      SubMenu
    },
    computed: {
      sidebarLayoutSkin: {
        get () {
            return 'light'
        //   return this.$store.state.common.sidebarLayoutSkin
        }
      },
      // eslint-disable-next-line vue/no-dupe-keys
    //   sidebarFold: {
    //     get () {
    //         return localStorage.getItem('sidebarFold')
    //     //   return this.$store.state.common.sidebarFold
    //     },
    //     set (val) {
    //         // this.sidebarFold = val
    //         localStorage.setItem('sidebarFold', val)
    //     //   this.$store.commit('common/updateSidebarFold', val)
    //     }
    //   },
    //   isTab: {
    //     get () {
    //       return this.$store.state.common.isTab
    //     }
    //   },
      leftMenuList: {
        get () {
          return [{name: '客户管理', id: 'khgl', icon: 'el-icon-user-solid', childNodes: [{name: '客户列表', id: 'khgllist'}]}]
        },
        set (val) {
        //   this.$store.commit('common/updateLeftMenuList', val)
        }
      },
      leftMenuCategory: {
        get () {
            return ''
        //   return this.$store.state.common.leftMenuCategory
        },
        set (val) {
        //   this.$store.commit('common/updateLeftMenuCategory', val)
        }
      },
      menuActiveName: {
        get () {
            return ''
        //   return this.$store.state.common.menuActiveName
        },
        set (val) {
        //   this.$store.commit('common/updateMenuActiveName', val)
        }
      },
    //   mainTabs: {
    //     get () {
    //       return this.$store.state.common.mainTabs
    //     },
    //     set (val) {
    //       this.$store.commit('common/updateMainTabs', val)
    //     }
    //   },
      defaultTheme () {
          return '#1890FF'
        // return this.$store.state.config.defaultTheme
      }
    //   mainTabsActiveName: {
    //     get () {
    //       return this.$store.state.common.mainTabsActiveName
    //     },
    //     set (val) {
    //       this.$store.commit('common/updateMainTabsActiveName', val)
    //     }
    //   }
    },
    watch: {
      $route: 'routeHandle',
      sidebarFold (val) {
        console.log(val)
        this.$emit('change', val)
      }
    },
    created () {
        this.menuList = [{name: '客户管理', id: 'khgl', childNodes: [{name: '客户列表', id: 'khgllist'}]}]
    //   this.menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]')
      this.dynamicMenuRoutes = JSON.parse(sessionStorage.getItem('dynamicMenuRoutes') || '[]')
    //   this.routeHandle(this.$route)
    },
    methods: {
      // 路由操作
    //   routeHandle (route) {
    //     if (this.isTab) {
    //       // tab选中, 不存在先添加
    //       let tab = this.mainTabs.filter(item => item.fullPath === route.fullPath)[0]
    //       if (!tab) {
    //         if (route.meta.isDynamic) {
    //           route = this.dynamicMenuRoutes.filter(item => item.name === route.name)[0]
    //           if (!route) {
    //             return console.error('未能找到可用标签页!')
    //           }
    //         }
    //         tab = {
    //           menuId: route.meta.menuId || route.name,
    //           name: route.name,
    //           title: this.$router.currentRoute.query.title || route.meta.title,
    //           type: route.meta.type,
    //           iframeUrl: route.meta.iframeUrl || '',
    //           query: this.$router.currentRoute.query,
    //           parmas: this.$router.currentRoute.parmas,
    //           fullPath: this.$router.currentRoute.fullPath
    //         }
    //         this.mainTabs = this.mainTabs.concat(tab)
    //       }
    //       tab.title = this.$router.currentRoute.query.title || route.meta.title
    //       this.menuActiveName = tab.menuId + ''
    //       this.mainTabsActiveName = tab.fullPath
    //       let topMenuActiveIndex = route.meta.parentIds && route.meta.parentIds.split(',').length > 2 ? route.meta.parentIds.split(',')[2] : '0'
    //       this.$store.commit('common/updateTopMenuActiveIndex', topMenuActiveIndex)
    //     }
    //   }
    }
  }
</script>
