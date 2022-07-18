<template>
  <div id="search">
    <el-select v-if="selectRequired" class="search-select" v-model="selectValue" clearable placeholder="搜索项">
      <el-option
        v-for="(item, index) in options"
        :key="index.column"
        :label="item.label"
        :value="item.label">
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
    selectRequired: {
      type: Boolean,
      required: false,
      default: true
    },
    options: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  data() {
    return {
      searchValue: '',
      selectValue: ''
    };
  },
  created() {
    if(this.options.length == 0) {
      Object.keys(this.tableData[0]).forEach(key => {
        this.options.push({column: key, label: key});
      });
    }
  },
  methods: {
    onSearch() {
      let column = '';
      this.options.forEach((option) => {
        if(option.label == this.selectValue) {
          column = option.column;
        }
      });
      const searchData = new SearchBarController().tableSearch(this.tableData, { column,
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
