/**
 * @description 基础表格控制器
 *
 * @date 2022/7/14 4:36 下午
 * @author Zya
 * @version 1.0
 */



class BaseTableController{

    constructor(props) {
        this._tableData=props.pageData
        this._props = props
    }
    _props=[]
    _tableData = []
    _searchData =[]

    get tableData(){
        return this._tableData
    }

    set tableData(value){
        this._tableData= value
    }

    get props(){
        return this._props
    }

    set props(value){
        this._props= value
    }


    get searchData(){
        return this._searchData
    }

    set searchData(value){
        this._searchData =value
    }

    getObjectPropValue(obj,key){
        return obj[key]
    }

    handleAdd(){

    }
    /**
     * 根据条件查询表格内容
     * @param { Array } tableData 表格的所有数据
     * @param { String } value 查询条件
     * @returns
     */
    searchTableItem(value){
        // this.searchData={class:value}
        if (value === ''){
            this._tableData= this.props.pageData
        }else{
            this._tableData= this.props.pageData
            this.tableData.forEach((item,index)=>{
                for(let i in item){
                    if(item[i]==value){
                        this.searchData.push(this.tableData[index])
                    }
                    // let value = this.getObjectPropValue(item,'class')
                    // let compareVlaue = this.getObjectPropValue(this.searchData,'class')
                    // if (value === compareVlaue){
                    //     this.tableData=[]
                    //     this.tableData.push(item)
                    // }
                }
            })
            this.tableData=[]
            this.tableData = this.searchData
            this.searchData=[]
        }
    }
    /**
     * 删除表格项
     * @param { Array } tableData 表格的所有数据
     * @param { Number } index 索引值
     * @returns
     */
    deleteTableItem(index){
        this.tableData.splice(index,1)
    }
    /**
     * 新增表格项
     * @param { Array } tableData 表格的所有数据
     * @param { Object } obj 新增表格项
     * @returns
     */
    addTableItem(obj){
        this.tableData.push(obj)
    }
    /**
     * 修改表格项
     * @param { Array } tableData 表格的所有数据
     * @param { Object } obj 修改后的表格项
     * @param { Number } index 索引值
     * @returns
     */
    editTableItem(index,obj){
        this.tableData.splice(index,1)
        this.tableData.splice(index,0,obj)
    }

}

export default BaseTableController;
