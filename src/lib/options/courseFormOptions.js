


const courseFormOptions = {
    model:{
        id:'',
        name:'',
        teacher:'',
        type:''
    },
    labelWidth : '120px',
    itemList: [
        {
            name:'id',
            type:'my-input',
            option:{
                name:'id',
                type:'text',
                value:'',
                placeholder:'请输入课程号',
                style:{
                    width:'200px',
                }
            }
        },
        {
            name:'name',
            type:'my-input',
            option:{
                name:'name',
                type:'text',
                value:'',
                placeholder:'请输入课程名',
                style:{
                    width:'200px',
                }
            }
        },
        {
            name:'teacher',
            type:'my-input',
            option:{
                name:'teacher',
                type:'text',
                value:'',
                placeholder:'请输入任课教师',
                style:{
                    width:'200px',
                }
            }
        },
        {
            name:'type',
            type:'my-radio',
            option:{
                name:'type',
                value:'',
                border:true,
                itemList:[
                    {
                        label:'必修',
                        text:'必修'
                    },
                    {
                        label:'选修',
                        text:'选修'
                    },
                ]
            }
        },
    ]

}
export default courseFormOptions
