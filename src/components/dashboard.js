import { BOTANICALS, SYNERGY_PAIRS, CARRIER_BASES } from '../data/botanicals.js';

export function setupDashboard({ onSelectSynergyPair, onOpenMonograph }) {
  const synergyContainer = document.getElementById('dashboardSynergyList');
  const harvestContainer = document.getElementById('dashboardHarvestTimeline');
  const chartContainer = document.getElementById('dashboardExtractionChart');

  // Render Synergy Pairs
  if (synergyContainer) {
    synergyContainer.innerHTML = SYNERGY_PAIRS.map(item => {
      const herb1 = BOTANICALS.find(h => h.id === item.pair[0]);
      const herb2 = BOTANICALS.find(h => h.id === item.pair[1]);
      if (!herb1 || !herb2) return '';

      return `
        <div class="synergy-pair-item" data-pair-herbs="${item.pair.join(',')}">
          <div class="synergy-pair-head">
            <div class="pair-herbs">
              <span>${herb1.name}</span>
              <span style="color:var(--text-muted); font-size:0.9rem;">&times;</span>
              <span>${herb2.name}</span>
            </div>
            <span class="pair-bonus-badge">${item.bonus}</span>
          </div>
          <p class="pair-rationale">${item.rationale}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem; font-size:0.75rem; color:var(--text-muted);">
            <span>Synergy Index: <strong style="color:var(--accent-moss);">${item.score}/100</strong></span>
            <button class="btn-botanical-pill btn-test-synergy" data-herb1="${herb1.id}" data-herb2="${herb2.id}" style="font-size:0.72rem; padding:0.25rem 0.65rem;">
              Craft Pair in Lab &rarr;
            </button>
          </div>
        </div>
      `;
    }).join('');

    synergyContainer.querySelectorAll('.btn-test-synergy').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const h1 = btn.dataset.herb1;
        const h2 = btn.dataset.herb2;
        if (onSelectSynergyPair) {
          onSelectSynergyPair([h1, h2]);
        }
      });
    });
  }

  // Render Seasonal Harvest Chronology
  if (harvestContainer) {
    const seasons = [
      {
        name: 'Spring (Vasant)',
        window: 'Feb – Apr',
        status: 'Germination & Flowering',
        herbs: ['Brahmi / Gotu Kola', 'Moringa (Leaf)', 'Frankincense (Resin)']
      },
      {
        name: 'Summer (Grishma)',
        window: 'May – Jul',
        status: 'Active Sunlight Maturation',
        herbs: ['Calendula (Ray Florets)', 'Rosemary (Needles)', 'Guduchi (Stems)']
      },
      {
        name: 'Monsoon / Autumn (Sharad)',
        window: 'Aug – Oct',
        status: 'Prime Harvest Window',
        active: true,
        herbs: ['Holy Basil (Tulsi)', 'Ashwagandha (Root)', 'Green Cardamom']
      },
      {
        name: 'Winter (Hemanta)',
        window: 'Nov – Jan',
        status: 'Subterranean Deep Potency',
        herbs: ['Shatavari (Deep Tuber)', 'Vetiver (Khus Root)', 'Wild Amalaki']
      }
    ];

    harvestContainer.innerHTML = seasons.map(s => `
      <div class="season-block" style="${s.active ? 'border-color: var(--accent-olive); background-color: var(--ivory-surface); box-shadow: 0 2px 10px rgba(104,114,88,0.1);' : ''}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <h4 class="season-title">${s.name}</h4>
          ${s.active ? '<span class="botanical-tag" style="font-size:0.65rem; padding:0.15rem 0.45rem;">Current Peak</span>' : ''}
        </div>
        <div class="season-window">${s.window} &bull; ${s.status}</div>
        <ul class="season-herbs-list">
          ${s.herbs.map(h => `
            <li style="display:flex; align-items:center; gap:0.4rem;">
              <span style="display:inline-block; width:4px; height:4px; border-radius:50%; background-color:var(--accent-olive);"></span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Render Bioavailability Comparison Chart via Clean SVG
  if (chartContainer) {
    chartContainer.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem; color:var(--text-muted);">
          <span>Carrier Matrix Delivery Comparison</span>
          <span>Target: Neuroendocrine & Somatic Tissue</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:1.1rem; padding:1.2rem; background:var(--ivory-parchment); border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
          <!-- Metric 1 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Cultured Grass-Fed Ghrita (Clarified Lipid)</strong>
              <span style="font-weight:600; color:var(--accent-moss);">94% Absorption (Passes BBB)</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:94%; background-color:#59664D;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Highest crossing coefficient for neuro-active bacosides & withanolides</span>
          </div>

          <!-- Metric 2 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Hydro-Ethanolic Dual Extraction (45% ABV)</strong>
              <span style="font-weight:600; color:var(--accent-moss);">88% Sublingual Uptake</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:88%; background-color:#687258;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Rapid bypass of first-pass hepatic degradation; instantaneous effect</span>
          </div>

          <!-- Metric 3 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Cold-Pressed Sesame Taila (Lipophilic)</strong>
              <span style="font-weight:600; color:var(--accent-moss);">82% Transdermal / Epithelial</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:82%; background-color:#7A8065;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Subtle deep fascial and microcirculatory penetration</span>
          </div>

          <!-- Metric 4 -->
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; margin-bottom:0.35rem;">
              <strong style="color:var(--botanical-deep);">Kashayam Slow Reduction Decoction</strong>
              <span style="font-weight:600; color:var(--accent-moss);">76% Bio-Availability</span>
            </div>
            <div class="bar-track" style="width:100%; height:7px;">
              <div class="bar-fill" style="width:76%; background-color:#858A70;"></div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-muted);">Concentrates bitter iridoids and tannins for digestive axis stimulation</span>
          </div>
        </div>
      </div>
    `;
  }
}
