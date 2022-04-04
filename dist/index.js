let aside_bar = document.querySelector(".aside_bar");
let bar_click = document.querySelector(".bar_click");
let icon_change = document.querySelector(".icon_change");
let mark_all_checkbox = document.querySelector(".mark_all_checkbox");
let show_icon = document.querySelector(".show_icon");
let preloader_custom = document.querySelector(".preloader_custom");

bar_click.addEventListener("click", () => {
  icon_change.classList.toggle("fa-times");
  aside_bar.classList.toggle("-ml-[60%]");
});

mark_all_checkbox.addEventListener("click", () => {
  show_icon.classList.toggle("hidden");
});

// preloader
window.addEventListener("load", () => {
  preloader_custom.classList.add("hidden");
});
