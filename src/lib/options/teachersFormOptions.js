



const teachersFormOptions = {
    model:{
        name:'',
        sex:'',
        course:'',
        level:''
    },
    labelWidth : '120px',
    itemList: [
        {
            name:'name',
            type:'my-input',
            option:{
                name:'name',
                type:'text',
                value:'',
                placeholder:'请输入姓名',
                style:{
                    width:'200px',
                }
            }
        },
        {
            name:'sex',
            type:'my-radio',
            option:{
                name:'sex',
                value:'',
                border:true,
                itemList:[
                    {
                        label:'男',
                        text:'男'
                    },
                    {
                        label:'女',
                        text:'女'
                    },
                ]
            }
        },
        {
            name:'course',
            type:'my-input',
            option:{
                name:'course',
                type:'text',
                value:'',
                placeholder:'请输入科目',
                style:{
                    width:'200px',
                }
            }
        },
        {
            name:'level',
            type:'my-input',
            option:{
                name:'level',
                type:'text',
                value:'',
                placeholder:'请输入职称',
                style:{
                    width:'200px',
                }
            }
        },
    ]

}
export default teachersFormOptions
