document.addEventListener("DOMContentLoaded", function() {
    const regex = /([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i;
    const uuid = window.location.search.match(regex)[1];
    for (let i = 0; i < exhibition_data.length; i++) {
        if (exhibition_data[i]["id"] == uuid) {
            //data
            let category_type = exhibition_data[i]["category"];
            let exhibition_Name = exhibition_data[i]["exhibitionName"];
            let date = exhibition_data[i]["key"];
            let image = exhibition_data[i]["image"];
            let description = exhibition_data[i]["description"];

            // HTML elements
            let category_type_div = document.querySelector(".exhibition_type"); 
            let exhibition_Name_div = document.querySelector(".exhibition_title"); 
            let date_div = document.querySelector(".exhibition_date");
            let image_div = document.querySelector(".exhibition_img"); 
            let description_div = document.querySelector(".exhibition_desc");
            
            category_type_div.innerHTML = "<h3>" + category_type + "</h3>";
            exhibition_Name_div.innerHTML = "<h1>" + exhibition_Name + "</h1>";
            date_div.innerHTML = "<span class='span1'>Date:&nbsp;</span><span class='span2'>" + date + "</span>";
            image_div.innerHTML = "<img src='" + image + "' alt='Image description'>";
            description_div.innerHTML = "<p>" + description + "</p>";
        }
    }
});