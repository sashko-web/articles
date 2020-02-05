
const products = {
    editable:true,
    view:"treetable",
    scrollX:false,
    columns:[
        { id:"rank", header:"", width:50 },
        { id:"title", header:"Title", fillspace:true, 
        template(obj, common){
            if (obj.$level == 1) return common.treetable(obj, common) + obj.value;
            return obj.title;
          }, editor:"text"},
        { id:"price", header:"Price", width:200, editor:"text" }
    ],
    select:"row",
    url:"data/products.js",
    scheme:{
        $group:"category",
        $sort:{ by:"value", dir:"asc" }
    },
    ready(){
        this.open(this.getFirstId());
    },
}

