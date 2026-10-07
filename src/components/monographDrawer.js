import { BOTANICALS, RESEARCH_ARTICLES } from '../data/botanicals.js';

export function setupMonographDrawer(onSelectHerbForLab) {
  const overlay = document.getElementById('drawerOverlay');
  const drawer = document.getElementById('botanicalDrawer');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerBody = document.getElementById('drawerBody');

  if (!overlay || !drawer) return;

  function close() {
    overlay.classList.remove('open');
  }

  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      close();
    }
  });

  return {
    openHerb(herbId) {
      const herb = BOTANICALS.find(h => h.id === herbId);
      if (!herb) return;

      drawerTitle.innerHTML = `
        <div>
          <span class="eyebrow" style="margin-bottom:0.25rem;">Botanical Monograph</span>
          <h3 style="font-family: var(--font-serif); font-size:1.6rem; color: var(--botanical-deep);">${herb.name}</h3>
          <p style="font-style: italic; font-size: 0.88rem; color: var(--accent-olive);">${herb.binomial} &bull; ${herb.sanskrit}</p>
        </div>
      `;

      drawerBody.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:1.8rem;">
          <div style="height:240px; border-radius: var(--radius-sm); overflow:hidden; border:1px solid var(--border-subtle);">
            <img src="${herb.heroImage}" alt="${herb.name}" style="width:100%; height:100%; object-fit:cover;" />
          </div>

          <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
            <span class="botanical-tag">${herb.category}</span>
            <span class="dosha-tag">${herb.dosha.primary}</span>
            <span class="botanical-tag">${herb.part}</span>
            <span class="dosha-tag">Family: ${herb.family}</span>
          </div>

          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.2rem; margin-bottom:0.6rem; color:var(--botanical-deep);">Ethnobotanical Overview</h4>
            <p style="font-size:0.92rem; line-height:1.68; color:var(--text-secondary);">${herb.description}</p>
          </div>

          <!-- Energetics Matrix -->
          <div style="background-color:var(--ivory-parchment); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:1.4rem;">
            <h4 style="font-family: var(--font-serif); font-size:1.1rem; margin-bottom:1rem; color:var(--botanical-deep);">Classical Energetics (Dravyaguna)</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.9rem; font-size:0.85rem;">
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Rasa (Taste)</strong>
                <span style="color:var(--botanical-deep);">${herb.energetics.rasa.join(', ')}</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Virya (Thermal Potency)</strong>
                <span style="color:var(--accent-olive); font-weight:600;">${herb.energetics.virya}</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Vipaka (Post-Digestive)</strong>
                <span style="color:var(--botanical-deep);">${herb.energetics.vipaka}</span>
              </div>
              <div>
                <strong style="display:block; font-size:0.72rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.06em;">Guna (Qualities)</strong>
                <span style="color:var(--text-secondary);">${herb.energetics.guna.join(', ')}</span>
              </div>
            </div>
          </div>

          <!-- Active Phytochemical Markers -->
          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.15rem; margin-bottom:0.8rem; color:var(--botanical-deep);">Phytochemical Markers & Potency</h4>
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              ${herb.phytochemicals.map(phy => `
                <div style="background:var(--ivory-subtle); padding:0.85rem 1rem; border-radius:var(--radius-xs); border:1px solid var(--border-subtle);">
                  <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.82rem;">
                    <strong style="color:var(--botanical-deep);">${phy.name}</strong>
                    <span style="color:var(--accent-moss); font-weight:600;">${phy.value}% standardized</span>
                  </div>
                  <div class="bar-track" style="width:100%; margin-bottom:0.4rem;">
                    <div class="bar-fill" style="width:${phy.value}%;"></div>
                  </div>
                  <span style="font-size:0.75rem; color:var(--text-muted);">${phy.role}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Traditional Uses & Clinical Evidence -->
          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.15rem; margin-bottom:0.6rem; color:var(--botanical-deep);">Traditional Uses</h4>
            <ul style="padding-left:1.2rem; font-size:0.86rem; color:var(--text-secondary); line-height:1.7;">
              ${herb.traditionalUses.map(u => `<li>${u}</li>`).join('')}
            </ul>
          </div>

          <div style="background-color:rgba(122, 128, 101, 0.08); border-left:3px solid var(--accent-olive); padding:1rem 1.2rem; border-radius:0 var(--radius-xs) var(--radius-xs) 0;">
            <strong style="display:block; font-size:0.74rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--accent-moss); margin-bottom:0.25rem;">Modern Clinical Reference</strong>
            <p style="font-size:0.84rem; line-height:1.55; color:var(--botanical-deep); margin:0;">${herb.modernEvidence}</p>
          </div>

          <!-- Preparation Ritual -->
          <div>
            <h4 style="font-family: var(--font-serif); font-size:1.15rem; margin-bottom:0.45rem; color:var(--botanical-deep);">Preparation & Administration</h4>
            <p style="font-size:0.86rem; line-height:1.6; color:var(--text-secondary);">${herb.preparationRitual}</p>
          </div>

          <div style="font-size:0.8rem; color:var(--text-muted); padding:0.8rem; border:1px dashed var(--border-medium); border-radius:var(--radius-xs);">
            <strong>Ethnobotanical Caution:</strong> ${herb.contraindications}
          </div>

          <div style="padding-top:1rem; border-top:1px solid var(--border-subtle); display:flex; gap:1rem;">
            <button id="drawerAddLabBtn" class="btn-botanical-primary" style="flex:1;">
              Craft Formulation with ${herb.name}
            </button>
            <button id="drawerCloseActionBtn" class="btn-botanical-secondary">
              Close
            </button>
          </div>
        </div>
      `;

      overlay.classList.add('open');

      document.getElementById('drawerAddLabBtn')?.addEventListener('click', () => {
        close();
        if (onSelectHerbForLab) {
          onSelectHerbForLab(herb.id);
        }
      });

      document.getElementById('drawerCloseActionBtn')?.addEventListener('click', close);
    },

    openArticle(articleId) {
      const art = RESEARCH_ARTICLES.find(a => a.id === articleId);
      if (!art) return;

      drawerTitle.innerHTML = `
        <div>
          <span class="eyebrow" style="margin-bottom:0.25rem;">${art.category}</span>
          <h3 style="font-family: var(--font-serif); font-size:1.5rem; color: var(--botanical-deep);">${art.title}</h3>
          <p style="font-size:0.82rem; color:var(--text-muted);">${art.author} &bull; ${art.date}</p>
        </div>
      `;

      const parsedContent = art.content
        .split('\n\n')
        .map(paragraph => {
          if (paragraph.startsWith('### ')) {
            return `<h4 style="font-family: var(--font-serif); font-size:1.25rem; margin-top:1.5rem; margin-bottom:0.5rem; color:var(--botanical-deep);">${paragraph.replace('### ', '')}</h4>`;
          }
          if (paragraph.includes('- **')) {
            const items = paragraph.split('\n').filter(Boolean);
            return `<ul style="padding-left:1.2rem; font-size:0.9rem; line-height:1.7; color:var(--text-secondary); margin:0.8rem 0;">${items.map(i => `<li>${i.replace('- ', '')}</li>`).join('')}</ul>`;
          }
          return `<p style="font-size:0.92rem; line-height:1.75; color:var(--text-secondary); margin-bottom:1rem;">${paragraph}</p>`;
        })
        .join('');

      drawerBody.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:1.2rem;">
          <p style="font-style:italic; font-size:1rem; line-height:1.65; color:var(--botanical-slate); border-left:2px solid var(--accent-olive); padding-left:1rem; margin-bottom:1rem;">
            "${art.subtitle}"
          </p>
          <div style="line-height:1.75;">
            ${parsedContent}
          </div>
          <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:flex-end;">
            <button class="btn-botanical-secondary" onclick="document.getElementById('drawerOverlay').classList.remove('open')">
              Return to Journal
            </button>
          </div>
        </div>
      `;

      overlay.classList.add('open');
    }
  };
}
