<template>
  <div>
    <el-row :gutter="14">
      <el-col :span="4">
        <div class="label-wrap category">
          <label class="pull-left">类型：</label>
          <div class="wrap-content">
            <el-select v-model="category" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in category_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="label-wrap date">
          <label class="pull-left paddingRight">日期：</label>
          <div class="wrap-content">
            <el-date-picker
              style="width: 100%;"
              v-model="date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="label-wrap key-word">
          <label class="pull-left paddingRight">关键字：</label>
          <div class="wrap-content">
            <el-select v-model="key_word" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in keyword_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <el-input placeholder="请输入" style="width: 100%"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" style="width: 100%">搜索</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="danger pull-right" style="width: 50%">新增</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%; margin-top: 40px;"
      @selection-change="tableSelectionChange"
    >
      <el-table-column type="selection" width="70" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="800" align="center"></el-table-column>
      <el-table-column prop="category" label="类别" width="120" align="center"></el-table-column>
      <el-table-column prop="date" label="日期" width="200" align="center"></el-table-column>
      <el-table-column prop="user" label="管理人" successwidth="120" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="tableDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="tableEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "infoIndex",
  data() {
    return {
      // 类型选项
      category_options: [
        {
          value: 1,
          label: "黄金糕"
        },
        {
          value: 2,
          label: "双皮奶"
        },
        {
          value: 3,
          label: "蚵仔煎"
        }
      ],
      // 关键字选项
      keyword_options: [
        {
          value: "id",
          label: "ID"
        },
        {
          value: "title",
          label: "标题"
        }
      ],
      // 类型
      category: "",
      // 日期
      date: "",
      // 关键字   默认选中id
      key_word: "id",
      // 表格数据
      tableData: [
        {
          title:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          date: "2016-05-02 09:50:50",
          category: "王小虎虎",
          user: "管理员"
        },
        {
          title:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          date: "2016-05-02 09:50:50",
          category: "王小虎虎",
          user: "管理员"
        },
        {
          title:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          date: "2016-05-02 09:50:50",
          category: "王小虎虎",
          user: "管理员"
        }
      ]
    };
  },
  methods: {
    // 表格选择事件
    tableSelectionChange() {},
    // 表格删除
    tableDelete() {},
    // 表格编辑
    tableEdit() {}
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/config.scss";
.label-wrap {
  .paddingRight {
    padding-right: 15px;
    @include webkit(box-sizing, border-box);
  }
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 95, 40);
  }
  &.key-word {
    @include labelDom(right, 100, 40);
  }
}
.el-table /deep/ .cell {
  color: $main-color !important;
}
</style>