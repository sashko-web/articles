
const table = {
    view:"datatable", 
    id:"film_list",
    scroll:"y",
    select:true,
    url:"data/data.js",
    hover:"myhover",
    columns:[
        { id:"rank", header:"", width:50, css:"rank"},
        { id:"title", header:["Film title", { content:"textFilter"}], fillspace:true, sort:"text"},
        { id:"year",  header:["Released", {content:"selectFilter" }], width:100, sort:"text"},
        { id:"votes", header:"Votes", width:100, sort:"text"},
        { id:"rating", header:"Rating", width:100, sort:"text"},
        { header:"", template:"<span class='webix_icon wxi-close'></span>", width:35}
    ],
    onClick:{
    webix_icon(e, id){
        this.remove(id);
        return false;
        }
    },
    on:{
        onAfterSelect(id){
            let values = $$("film_list").getItem(id);
            $$("film_form").setValues(values)
        }
    }
}





