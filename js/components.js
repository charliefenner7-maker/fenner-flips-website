/* Fenner Flips — Shared Behavior
   Nav + footer are now static HTML in each page (crawlable without JS).
   This file only handles progressive enhancement: the mobile menu toggle
   and the FAQ accordion. */

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// FAQ toggle
document.addEventListener('click', function(e) {
  const question = e.target.closest('.faq-question');
  if (question) {
    question.parentElement.classList.toggle('open');
  }
});
