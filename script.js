// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Fade-in animation when scrolling
window.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});


// Simple console message to confirm script loaded
console.log("Portfolio script loaded successfully!");