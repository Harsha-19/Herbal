import { BOTANICALS, RESEARCH_ARTICLES, CARRIER_BASES } from '../data/botanicals.js';

export function setupSearchModal({ onOpenHerb, onOpenArticle }) {
  const backdrop = document.getElementById('searchModalBackdrop');
  const input = document.getElementById('searchModalInput');
  const resultsContainer = document.getElementById('searchModalResults');
  const closeBtn = document.getElementById('searchModalCloseBtn');
  const triggerBtn = document.getElementById('navSearchBtn');

  if (!backdrop) return;

  function open() {
    backdrop.classList.add('open');
    if (input) {
      input.value = '';
      input.focus();
    }
    renderResults('');
  }

  function close() {
    backdrop.classList.remove('open');
  }

  triggerBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  // Global keyboard shortcut '/'
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      open();
    }
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      close();
    }
  });

  input?.addEventListener('input', (e) => {
    renderResults(e.target.value.trim().toLowerCase());
  });

  function renderResults(query) {
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          Type any plant name (e.g. <em>Ashwagandha, Tulsi</em>), chemical constituent (<em>Withanolides, Rosmarinic</em>), or therapeutic action...
        </div>
      `;
      return;
    }

    const matchedHerbs = BOTANICALS.filter(h => 
      h.name.toLowerCase().includes(query) ||
      h.binomial.toLowerCase().includes(query) ||
      h.sanskrit.toLowerCase().includes(query) ||
      h.category.toLowerCase().includes(query) ||
      h.phytochemicals.some(p => p.name.toLowerCase().includes(query))
    );

    const matchedArticles = RESEARCH_ARTICLES.filter(a =>
      a.title.toLowerCase().includes(query) ||
      a.excerpt.toLowerCase().includes(query)
    );

    if (matchedHerbs.length === 0 && matchedArticles.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          No botanical archives matching "<strong>${query}</strong>".
        </div>
      `;
      return;
    }

    let html = '';

    if (matchedHerbs.length > 0) {
      html += `
        <div style="font-size:0.72rem; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); margin:0.6rem 0.6rem 0.3rem;">
          Botanical Specimens (${matchedHerbs.length})
        </div>
        ${matchedHerbs.map(h => `
          <div class="search-result-item" data-herb-id="${h.id}">
            <div>
              <strong style="font-family:var(--font-serif); font-size:1.1rem; color:var(--botanical-deep);">${h.name}</strong>
              <span style="font-style:italic; font-size:0.8rem; color:var(--accent-olive); margin-left:0.4rem;">${h.binomial}</span>
              <div style="font-size:0.75rem; color:var(--text-muted);">${h.category} &bull; ${h.dosha.primary}</div>
            </div>
            <span class="botanical-tag" style="font-size:0.7rem;">Monograph &rarr;</span>
          </div>
        `).join('')}
      `;
    }

    if (matchedArticles.length > 0) {
      html += `
        <div style="font-size:0.72rem; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); margin:1rem 0.6rem 0.3rem;">
          Monograph Essays (${matchedArticles.length})
        </div>
        ${matchedArticles.map(a => `
          <div class="search-result-item" data-article-id="${a.id}">
            <div>
              <strong style="font-family:var(--font-serif); font-size:1.05rem; color:var(--botanical-deep);">${a.title}</strong>
              <div style="font-size:0.75rem; color:var(--text-muted);">${a.category} &bull; ${a.readTime}</div>
            </div>
            <span class="botanical-tag" style="font-size:0.7rem;">Read Essay &rarr;</span>
          </div>
        `).join('')}
      `;
    }

    resultsContainer.innerHTML = html;

    resultsContainer.querySelectorAll('[data-herb-id]').forEach(item => {
      item.addEventListener('click', () => {
        close();
        if (onOpenHerb) onOpenHerb(item.dataset.herbId);
      });
    });

    resultsContainer.querySelectorAll('[data-article-id]').forEach(item => {
      item.addEventListener('click', () => {
        close();
        if (onOpenArticle) onOpenArticle(item.dataset.articleId);
      });
    });
  }
}
