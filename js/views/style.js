document.addEventListener("DOMContentLoaded", function(){
    let navItems = document.getElementsByClassName("menu_item");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function(){
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
})