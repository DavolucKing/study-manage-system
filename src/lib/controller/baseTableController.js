import StudentsOptions from "../options/studentsOptions";


class BaseTableController{

    constructor() {
        this._tableData=StudentsOptions
    }

    _tableData = []
    _searchData =[]
    _searchValue=''

    get tableData(){
        return this._tableData
    }

    set tableData(value){
        this._tableData= value
    }

    get searchValue(){
        return this._searchValue
    }

    set searchValue(value){
        this._searchValue= value
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

    searchTableItem(value){
        // this.searchData={class:value}
        if (value === ''){
            this._tableData=StudentsOptions
        }else{
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
        }
    }



}

export default BaseTableController;
