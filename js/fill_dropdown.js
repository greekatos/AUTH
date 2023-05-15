const event_dropdown = document.querySelector('.event_options');
const exhibition_dropdown = document.querySelector('.exhibition_options');

for (let i = 0; i < data.length; i++) {
    const option = document.createElement("option");
    option.value = data[i].eventName;
    option.text = data[i].eventName;

    event_dropdown.add(option);
}

for (let i = 0; i < exhibition_data.length; i++) {
    const x_option = document.createElement("option");
    x_option.value = exhibition_data[i].exhibitionName;
    x_option.text = exhibition_data[i].exhibitionName;

    exhibition_dropdown.add(x_option);
}