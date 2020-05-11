<template>
  <!-- <div class="login-container"> -->
  <div>
      <el-form :inline="true" ref="searchForm" :model="searchForm" label-width="80px" class="demo-form-inline">
        <!-- <el-col > -->
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="searchForm.phone"></el-input>
        </el-form-item>
      </el-form>
      <el-table
      :data="tableData"
      border
      row-key="id"
      style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">打卡</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">补卡</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchForm: {
          phone: '',
          name: ''
        },
        tableData: [{id: 1, name: '王小虎'}]
      }
    },
    created () {
      this.getTime()
      setInterval(() => {
        this.getTime()
      }, 1000)
    },
    mounted () {
    },
    methods: {
      query () {
      },
      getTime () {
        this.time = this.moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>
<style >

</style>
