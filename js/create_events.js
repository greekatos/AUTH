document.addEventListener("DOMContentLoaded", function () {

  const regex = /([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i;
  const uuid = window.location.search.match(regex)[1];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["id"] == uuid) {
      // data
      let event_type = data[i]["calendar"];
      let event_title = data[i]["eventName"];
      let event_date = data[i]["key"];
      let event_img = data[i]["image"];
      let event_desc = data[i]["description"];
      // HTML elements
      let event_type_div = document.querySelector(".event_type");
      let event_title_div = document.querySelector(".event_title");
      let event_date_div = document.querySelector(".event_date");
      let event_img_div = document.querySelector(".event_img");
      let event_desc_div = document.querySelector(".event_desc");
      event_type_div.innerHTML = "<h3>" + event_type + "</h3>";
      event_title_div.innerHTML = "<h1>" + event_title + "</h1>";
      event_date_div.innerHTML =
        "<span class='span1'>Date:&nbsp;</span><span class='span2'>" +
        event_date +
        "</span>";
      event_img_div.innerHTML =
        "<img src='" + event_img + "' alt='Image description'></h3>";
      event_desc_div.innerHTML = "<p>" + event_desc + "</p>";
    }
  }
});
