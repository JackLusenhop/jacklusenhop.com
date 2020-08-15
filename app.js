// When the user scrolls the page, execute myFunction
window.onscroll = () => myFunction();

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var headerPosition = header.offsetTop + 50;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > headerPosition) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
}
