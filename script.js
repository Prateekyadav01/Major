document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  

  document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
  });