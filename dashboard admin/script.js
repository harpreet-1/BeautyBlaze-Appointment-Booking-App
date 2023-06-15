let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

// Drop Down
const dropdownContent = document.getElementById("dropdownContent");
const dropdownToggle = document.querySelector(".profile-details");
const dropdownIcon = document.getElementById("dropdownIcon");

dropdownToggle.addEventListener("click", function () {
  dropdownContent.classList.toggle("dropdown-open");
  dropdownIcon.classList.toggle("rotate-icon");
});
