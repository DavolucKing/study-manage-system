/**
 * @description 搜索栏控制器
 *
 * @date 2022/7/14 4:38 下午
 * @author 崔孝楠
 * @version 1.0
 */

class SearchBarController {

    constructor() {
    }

    /**
     * 根据条件查询表格内容
     * @param { Array } tableData 表格的所有数据
     * @param { Object } searchValue 查询条件
     * @returns
     */
    tableSearch(tableData, searchValue) {
        let searchData = [];
        if (searchValue.value == '') {
            searchData = tableData;
        } else if(searchValue.column == '') {
            tableData.forEach((item, index) => {
                for(let prop in item) {
                    if(item[prop] == searchValue.value) {
                      searchData.push(tableData[index]);
                    }
                }
            })
        } else {
            tableData.forEach(item => {
                if(item[searchValue.column] == searchValue.value) {
                  searchData.push(item);
                }
            })
        }
        return searchData;
    }

}

export default SearchBarController
