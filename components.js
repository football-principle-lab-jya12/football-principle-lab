/* ============================================
   Football Principle Lab — Shared Components
   ============================================ */

// ---- NAV ----
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'articles.html', label: 'Articles' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p => {
    const active = activePage === p.href ? 'active' : '';
    return `<a href="${p.href}" class="${active}">${p.label}</a>`;
  }).join('');

  return `
  <header class="site-header">
    <nav class="nav-inner">
      <a href="index.html" class="nav-logo">
        <span class="nav-logo-abbr">FPL</span>
        <span class="nav-logo-name">Football Principle Lab</span>
      </a>
      <div class="nav-links" id="navLinks">
        ${links}
        <button class="nav-search-btn" id="searchToggle" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-nav" id="mobileNav">
      ${links}
    </div>
  </header>`;
}

// ---- FOOTER ----
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="nav-logo">
            <span class="nav-logo-abbr">FPL</span>
            <span class="nav-logo-name">Football Principle Lab</span>
          </div>
          <p class="footer-tagline">Discover the Principles Behind the Game.</p>
        </div>
        <div class="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><a href="articles.html?cat=principles">Principles</a></li>
            <li><a href="articles.html?cat=individual">Individual Tactics</a></li>
            <li><a href="articles.html?cat=training">Training</a></li>
            <li><a href="articles.html?cat=analysis">Analysis</a></li>
            <li><a href="articles.html?cat=playmodels">Play Models</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Site</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="articles.html">Articles</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="sitemap.xml">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Football Principle Lab. All rights reserved.</span>
        <span class="mono">現象ではなく原則を語る</span>
      </div>
    </div>
  </footer>`;
}

// ---- MOBILE NAV TOGGLE ----
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
  }
}

document.addEventListener('DOMContentLoaded', initNav);
