


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

    deleteTableItem(index){
        this.tableData.splice(index,1)
    }

    addTableItem(obj){
        this.tableData.push(obj)
    }

    editTableItem(index,obj){
        this.tableData.splice(index,1)
        this.tableData.splice(index,0,obj)
    }

}

export default BaseTableController;
