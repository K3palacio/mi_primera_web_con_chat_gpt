document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
  
    links.forEach(function (link) {
      link.addEventListener("click", smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const yOffset = -60;
  
      window.scrollTo({
        top: targetElement.offsetTop + yOffset,
        behavior: "smooth",
      });
    }
  });
  