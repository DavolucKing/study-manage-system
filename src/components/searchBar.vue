<template>
  <div id="search">
    <el-select class="search-select" v-model="column" clearable placeholder="搜索项">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    <el-input class="search-input" v-model="searchValue" @keyup.enter.native="onSearch" />
    <el-button type="primary" class="searchBtn" @click="onSearch">搜索</el-button>
  </div>
</template>

<script>
import SearchBarController from '../lib/controller/searchBarController';

export default {
  props: {
    tableData: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      searchValue: '',
      column: ''
    };
  },
  computed: {
    options() {
      return Object.keys(this.tableData[0]);
    }
  },
  methods: {
    onSearch() {
      const searchData = new SearchBarController().tableSearch(this.tableData, { column: this.column,
        value: this.searchValue});
      this.$emit('search', searchData);
    }
  },
}
</script>

<style scoped>

#search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-select, .search-input {
  margin-right: 5px;
}

.searchBtn {
  margin-right: 20px;
}

</style>
