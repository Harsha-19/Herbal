import { BOTANICALS } from '../data/botanicals.js';

export function setupHerbarium({ onOpenMonograph, onSelectHerbForLab }) {
  const container = document.getElementById('herbariumContent');
  const searchInput = document.getElementById('herbSearchInput');
  const categoryFilters = document.getElementById('categoryFilters');
  const doshaFilters = document.getElementById('doshaFilters');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewTableBtn = document.getElementById('viewTableBtn');
  const resultsCountEl = document.getElementById('herbResultsCount');

  let currentCategory = 'all';
  let currentDosha = 'all';
  let currentSearch = '';
  let currentView = 'grid'; // 'grid' | 'table'

  function getFilteredBotanicals() {
    return BOTANICALS.filter(herb => {
      // Search matching
      const query = currentSearch.toLowerCase().trim();
      const matchSearch = !query || 
        herb.name.toLowerCase().includes(query) ||
        herb.binomial.toLowerCase().includes(query) ||
        herb.sanskrit.toLowerCase().includes(query) ||
        herb.category.toLowerCase().includes(query) ||
        herb.phytochemicals.some(p => p.name.toLowerCase().includes(query));

      // Category filter
      const matchCategory = currentCategory === 'all' || herb.category.toLowerCase() === currentCategory.toLowerCase();

      // Dosha filter
      const matchDosha = currentDosha === 'all' || 
        herb.dosha.primary.toLowerCase().includes(currentDosha.toLowerCase());

      return matchSearch && matchCategory && matchDosha;
    });
  }

  function render() {
    const filtered = getFilteredBotanicals();

    if (resultsCountEl) {
      resultsCountEl.textContent = `${filtered.length} botanical ${filtered.length === 1 ? 'specimen' : 'specimens'} cataloged`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 2rem; background: var(--ivory-surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          <div style="width: 48px; height: 48px; margin: 0 auto 1.2rem; border-radius: var(--radius-full); background: var(--accent-leaf-tint); display: flex; align-items: center; justify-content: center; color: var(--accent-moss);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--botanical-deep);">No Botanical Records Found</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); max-width: 420px; margin: 0 auto 1.5rem;">There are no botanical specimens matching your specific query or filter combination.</p>
          <button id="resetFiltersBtn" class="btn-botanical-secondary" style="font-size: 0.82rem;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('resetFiltersBtn')?.addEventListener('click', resetAll);
      return;
    }

    if (currentView === 'grid') {
      container.className = 'herbarium-grid';
      container.innerHTML = filtered.map(herb => `
        <article class="herb-card" data-herb-id="${herb.id}">
          <div class="herb-card-media">
            <img src="${herb.heroImage}" alt="${herb.name}" loading="lazy" />
            <div class="herb-card-badges">
              <span class="botanical-tag">${herb.category}</span>
              <span class="dosha-tag">${herb.part}</span>
            </div>
          </div>
          <div class="herb-card-body">
            <div class="herb-names-block">
              <h3 class="herb-card-title">${herb.name}</h3>
              <div class="herb-card-latin">${herb.binomial}</div>
              <div class="herb-card-sanskrit">${herb.sanskrit}</div>
            </div>
            <p class="herb-card-desc">${herb.description}</p>
            
            <div class="herb-card-phytometrics">
              <div class="phytomarker-bar-row">
                <span>Primary Marker: <strong>${herb.phytochemicals[0]?.name.split(' ')[0]}</strong></span>
                <div class="bar-track">
                  <div class="bar-fill" style="width: ${herb.phytochemicals[0]?.value}%;"></div>
                </div>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">
                <span>Constitution: ${herb.dosha.primary}</span>
                <span>Potency: ${herb.potencyIndex}/100</span>
              </div>
            </div>

            <div class="herb-card-footer">
              <span class="link-monograph">
                Consult Monograph
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              </span>
              <button class="btn-botanical-pill btn-quick-lab" data-herb-id="${herb.id}" title="Select for Formulation Lab" style="padding:0.35rem 0.75rem; font-size:0.75rem;">
                + Formulate
              </button>
            </div>
          </div>
        </article>
      `).join('');
    } else {
      // Table view
      container.className = 'archival-table-container';
      container.innerHTML = `
        <table class="archival-table">
          <thead>
            <tr>
              <th>Specimen</th>
              <th>Binomial & Family</th>
              <th>Category</th>
              <th>Energetics (Virya)</th>
              <th>Dosha Alignment</th>
              <th>Primary Phytocompound</th>
              <th style="text-align:right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(herb => `
              <tr data-herb-id="${herb.id}" style="cursor:pointer;">
                <td>
                  <div class="herb-cell-title">${herb.name}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted);">${herb.sanskrit}</div>
                </td>
                <td>
                  <div style="font-style:italic; font-size:0.86rem; color:var(--accent-olive);">${herb.binomial}</div>
                  <div style="font-size:0.74rem; color:var(--text-muted);">${herb.family}</div>
                </td>
                <td><span class="botanical-tag">${herb.category}</span></td>
                <td>
                  <span style="font-weight:500; color:${herb.energetics.virya.includes('Cooling') ? 'var(--accent-olive)' : 'var(--accent-terracotta)'};">
                    ${herb.energetics.virya}
                  </span>
                </td>
                <td><span class="dosha-tag">${herb.dosha.primary}</span></td>
                <td>
                  <span style="font-size:0.84rem; font-weight:500; color:var(--botanical-deep);">${herb.phytochemicals[0]?.name}</span>
                </td>
                <td style="text-align:right;" onclick="event.stopPropagation();">
                  <button class="btn-botanical-pill btn-quick-lab" data-herb-id="${herb.id}" style="font-size:0.75rem;">
                    + Formulate
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    // Attach click events
    container.querySelectorAll('[data-herb-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.btn-quick-lab')) return;
        const herbId = el.getAttribute('data-herb-id');
        if (herbId && onOpenMonograph) {
          onOpenMonograph(herbId);
        }
      });
    });

    container.querySelectorAll('.btn-quick-lab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const herbId = btn.getAttribute('data-herb-id');
        if (herbId && onSelectHerbForLab) {
          onSelectHerbForLab(herbId);
        }
      });
    });
  }

  function resetAll() {
    currentCategory = 'all';
    currentDosha = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    categoryFilters?.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
    doshaFilters?.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.dosha === 'all'));
    render();
  }

  // Setup Event Listeners
  searchInput?.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    render();
  });

  categoryFilters?.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    categoryFilters.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat || 'all';
    render();
  });

  doshaFilters?.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    doshaFilters.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDosha = btn.dataset.dosha || 'all';
    render();
  });

  viewGridBtn?.addEventListener('click', () => {
    currentView = 'grid';
    viewGridBtn.classList.add('active');
    viewTableBtn?.classList.remove('active');
    render();
  });

  viewTableBtn?.addEventListener('click', () => {
    currentView = 'table';
    viewTableBtn.classList.add('active');
    viewGridBtn?.classList.remove('active');
    render();
  });

  // Initial render
  render();
}
