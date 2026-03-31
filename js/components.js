/* Fenner Flips — Shared Components */

function getNav(activePage) {
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/logo.png" alt="Fenner Flips - Real Estate Investments">
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About</a></li>
        <li><a href="sell.html" class="${activePage === 'sell' ? 'active' : ''}">Sell Your House</a></li>
        <li><a href="investors.html" class="${activePage === 'investors' ? 'active' : ''}">Investors</a></li>
        <li><a href="portfolio.html" class="${activePage === 'portfolio' ? 'active' : ''}">Portfolio</a></li>
        <li><a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
      </ul>
      <button class="nav-toggle" onclick="toggleNav()" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function getFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="images/city-rei.png" alt="Fenner Flips" class="footer-logo">
          <p>We buy houses in any condition and transform them into beautiful homes. Whether you're looking to sell fast or invest in real estate, we're here to help.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="sell.html">Sell Your House</a></li>
            <li><a href="investors.html">Invest With Us</a></li>
            <li><a href="portfolio.html">Our Projects</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="footer-links">
            <li><a href="mailto:info@fennerflips.com">info@fennerflips.com</a></li>
            <li><a href="tel:+16153077977">(615) 307-7977</a></li>
            <li>Nashville, TN</li>
            <li><a href="https://instagram.com/fennerflips" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://linkedin.com/in/charlie-fenner-847973b" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; ${year} Fenner Flips. All rights reserved.
      </div>
    </div>
  </footer>`;
}

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
