/*=============== SEARCH BAR JS ===============*/
const searchBox = document.querySelector(".search__box");
const searchIcon = document.querySelector(".search__icon");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchIcon.querySelector("i").classList.toggle("ri-search-line");
  searchIcon.querySelector("i").classList.toggle("ri-close-line");
});
