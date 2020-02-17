
const products = {
    editable:true,
    id:"trtable",
    view:"treetable",
    scrollX:false,
    columns:[
        { id:"rank", header:"", width:50 },
        { id:"title", header:"Title", fillspace:true, template:"{common.treetable()} #title#", editor:"text"},
        { id:"price", header:"Price", width:200, editor:"text" }
    ],
    select:"row",
    url:"/backend/data/products.json",
    scheme:{
        $group:{
            by:"category",
            map:{
                title:["category"]
            }
        },
        $sort:{ by:"value", dir:"asc" }
    },
    ready(){
        webix.message("Loaded");
    }
}
