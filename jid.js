document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 480) {
        document.body.style.display = "none";
    }
});

const buttons = document.querySelectorAll('.skill-card');
const tags = document.querySelectorAll('.skill-tag');

buttons.forEach(card => {
  card.addEventListener('click', () => {

    const target = card.getAttribute("data-target");
    const tag = document.getElementById(target);

    if (card.classList.contains("active")) {

      card.classList.remove("active");
      tag.classList.remove("active");
      setTimeout(() => {
        tag.style.display = "none";
      }, 50);

    } else {

      buttons.forEach(b => b.classList.remove("active"));
      tags.forEach(t => {
        t.classList.remove("active");
        t.style.display = "none";
      });

      card.classList.add("active");
      tag.style.display = "inline-flex";
      setTimeout(() => {
        tag.classList.add("active");
      }, 10);

    }

  });
});


