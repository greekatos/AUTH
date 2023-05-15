const body = document.body;
const sidebar = document.getElementById("sidebar");
const sidebarItems = document.querySelectorAll(".sidebar_item");
const toggleSidebar = (event) => {
  if (sidebar.classList.contains("show-nav")) {
    sidebar.classList.remove("show-nav");
    sidebar.classList.add("hide-nav");
    body.classList.remove("scroll-locked");
  } else {
    sidebar.classList.add("show-nav");
    sidebar.classList.remove("hide-nav");
    body.classList.add("scroll-locked");
  }
  sidebarItems.forEach((item) => {
    item.classList.toggle("hidden");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  sidebarItems.forEach((item) => {
    const regex = /\/([^/]*\.html)/;
    const match = currentUrl.match(regex);
    const currentPage = match ? match[1] : null;
    const sidebarItemUrl = item.children[0].children[0].href.match(regex)[1];
    console.log(filename);
    if (
      item.children[0].children[0].href === currentUrl ||
      currentPage === sidebarItemUrl
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

const button = document.getElementById("toggle-btn");
button.addEventListener("click", toggleSidebar);
