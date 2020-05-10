<template>
  <el-submenu
    v-if="menu.childNodes && menu.childNodes.length >= 1"
    :index="menu.id + ''"
    :popper-class="'jp-sidebar--' + sidebarLayoutSkin + '-popper'"
   >
    <template slot="title">
      <i :class="`${menu.icon} jp-sidebar__menu-icon`" style=" display: inline-block!important;"></i>
      <span>{{ menu.name }}</span>
    </template>
    <sub-menu
      v-for="item in menu.childNodes"
      :key="item.id"
      :menu="item"
      :dynamicMenuRoutes="dynamicMenuRoutes"
    >
    </sub-menu>
  </el-submenu>
  <el-menu-item v-else :index="menu.id + ''" @click="gotoRouteHandle(menu)">
    <i :class="`${menu.icon} jp-sidebar__menu-icon`" style="display: inline-block!important;"></i>
    <span slot="title">{{ menu.name }}</span>
  </el-menu-item>
</template>

<script>
  import SubMenu from './_common_left_submenu'

  export default {
    name: 'sub-menu',
    props: {
      menu: {
        type: Object,
        required: true
      },
      dynamicMenuRoutes: {
        type: Array,
        required: true
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
      }
    },
    methods: {
      translateRouterPath (menu) {
        return '/' + menu.href.replace(/^\//g, '')
      },
      // 通过menuId与动态(菜单)路由进行匹配跳转至指定路由
      gotoRouteHandle (menu) {
        const route = this.dynamicMenuRoutes.filter(item => item.meta.menuId === menu.id)
        if (route.length >= 1) {
          let routePath = this.translateRouterPath(menu)
          this.$router.push({path: routePath})
        }
      }
    }
  }
</script>
<style lang="scss">
  $sidebar--background-color-dark:rgb(41,50,57);
  .el-menu {
    > .el-menu-item,
    > .el-submenu > .el-submenu__title {
      color: #fff;
      &:focus,
      &:hover {
        color: #fff !important;
        background-color: rgba(46,117,235,0.9) !important;
      }
    }
    > .el-submenu.is-active {
      border-bottom-color: transparent;
      color: #ffffff !important;
      background-color: rgba(46,117,235,0.99) !important;
    }
    .el-menu-item i,
    .el-submenu__title i,
    .el-dropdown .el-dropdown-link{
      color: rgb(195, 195, 195) !important;
    }
  }
  .el-menu,
  .el-submenu.is-opened {
    background-color:red;
    > .el-submenu__title {
      color: #fff;
    }
  }
  body .jp-sidebar {
  &--1,
  &--1-popper,
  &--3,
  &--3-popper,
  &--4,
  &--4-popper ,
  &--7,
  &--7-popper {
    background-color: $sidebar--background-color-dark;

    .jp-sidebar__menu.el-menu,
    > .el-menu--popup {
      background-color: $sidebar--background-color-dark;

      .el-menu,
      .el-submenu.is-opened {
        background-color: mix(#000, $sidebar--background-color-dark, 15%);

        > .el-submenu__title {
          color: #fff;
        }
      }
    }
  }
  }
</style>
