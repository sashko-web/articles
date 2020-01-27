const addItem = () =>{        
    if($$("film_form").validate()){                                               
        var item_data = $$("film_form").getValues();
        $$("film_list").add(item_data);    
        webix.message("Validation is successful!");
    }
}

function clearForm(){
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then(
        function(){
            $$("film_form").clear();
            $$("film_form").clearValidation();
        }
)};

