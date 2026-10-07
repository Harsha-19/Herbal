export function setupTrayDrawer({ onRemixFormula }) {
  const overlay = document.getElementById('trayOverlay');
  const trayBody = document.getElementById('trayBody');
  const closeBtn = document.getElementById('trayCloseBtn');
  const triggerBtn = document.getElementById('navTrayBtn');
  const countBadge = document.getElementById('navTrayCount');

  function updateBadge() {
    const saved = JSON.parse(localStorage.getItem('folia_saved_formulations') || '[]');
    if (countBadge) {
      countBadge.textContent = saved.length;
    }
  }

  function renderTray() {
    const saved = JSON.parse(localStorage.getItem('folia_saved_formulations') || '[]');
    updateBadge();

    if (!trayBody) return;

    if (saved.length === 0) {
      trayBody.innerHTML = `
        <div style="text-align:center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <div style="width:44px; height:44px; margin:0 auto 1rem; border-radius:var(--radius-full); background:var(--accent-leaf-tint); display:flex; align-items:center; justify-content:center; color:var(--accent-moss);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <h4 style="font-family: var(--font-serif); font-size:1.3rem; margin-bottom:0.4rem; color:var(--botanical-deep);">Your Apothecary Tray is Empty</h4>
          <p style="font-size:0.86rem; line-height:1.6; max-width:280px; margin:0 auto 1.4rem;">Design a custom botanical elixir in the Formulation Lab and commit it here.</p>
          <a href="#formulationLab" class="btn-botanical-primary" style="font-size:0.8rem; padding:0.6rem 1.2rem;" onclick="document.getElementById('trayOverlay').classList.remove('open')">
            Open Formulation Lab
          </a>
        </div>
      `;
      return;
    }

    trayBody.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1.4rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:0.8rem; border-bottom:1px solid var(--border-subtle); font-size:0.82rem; color:var(--text-muted);">
          <span>${saved.length} Custom ${saved.length === 1 ? 'Preparation' : 'Preparations'} Recorded</span>
          <button id="clearAllTrayBtn" style="background:transparent; border:none; color:var(--accent-terracotta); font-size:0.75rem; cursor:pointer;">Clear All</button>
        </div>

        ${saved.map((item, idx) => `
          <div class="botanical-card" style="padding:1.4rem; background:var(--ivory-parchment);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
              <div>
                <h4 style="font-family: var(--font-serif); font-size:1.25rem; color:var(--botanical-deep);">${item.title}</h4>
                <span style="font-size:0.72rem; color:var(--accent-olive); text-transform:uppercase; letter-spacing:0.06em;">${item.batch} &bull; ${new Date(item.date).toLocaleDateString()}</span>
              </div>
              <button class="btn-remove-tray-item" data-idx="${idx}" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:1rem;" title="Delete">&times;</button>
            </div>
            
            <div style="font-size:0.8rem; color:var(--botanical-slate); margin-bottom:0.8rem;">
              <strong>Carrier:</strong> ${item.carrier}
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1rem;">
              ${item.ingredients.map(ing => `
                <span class="botanical-tag" style="font-size:0.7rem;">${ing.name} (${ing.ratio}%)</span>
              `).join('')}
            </div>

            <div style="display:flex; gap:0.6rem; border-top:1px solid var(--border-subtle); padding-top:0.8rem;">
              <button class="btn-botanical-secondary btn-remix-formula" data-idx="${idx}" style="flex:1; font-size:0.75rem; padding:0.45rem 0.6rem;">
                Load & Edit
              </button>
              <button class="btn-botanical-primary" onclick="window.print()" style="font-size:0.75rem; padding:0.45rem 0.8rem;">
                Print Label
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    trayBody.querySelectorAll('.btn-remove-tray-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        saved.splice(idx, 1);
        localStorage.setItem('folia_saved_formulations', JSON.stringify(saved));
        renderTray();
      });
    });

    trayBody.querySelectorAll('.btn-remix-formula').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const formula = saved[idx];
        closeTray();
        if (onRemixFormula && formula) {
          onRemixFormula(formula);
        }
      });
    });

    document.getElementById('clearAllTrayBtn')?.addEventListener('click', () => {
      if (confirm('Clear all saved bespoke formulations from this device?')) {
        localStorage.removeItem('folia_saved_formulations');
        renderTray();
      }
    });
  }

  function openTray() {
    renderTray();
    overlay?.classList.add('open');
  }

  function closeTray() {
    overlay?.classList.remove('open');
  }

  triggerBtn?.addEventListener('click', openTray);
  closeBtn?.addEventListener('click', closeTray);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeTray();
  });

  // Initial badge count
  updateBadge();

  return {
    refresh: updateBadge,
    open: openTray,
    close: closeTray
  };
}
