import { BOTANICALS, CARRIER_BASES, SYNERGY_PAIRS } from '../data/botanicals.js';

export function setupFormulationLab({ onFormulationSaved }) {
  const carrierContainer = document.getElementById('carrierOptionsGrid');
  const herbSelector = document.getElementById('labHerbSelect');
  const addHerbBtn = document.getElementById('labAddHerbBtn');
  const selectedHerbsContainer = document.getElementById('selectedHerbsList');
  const formulaTitleInput = document.getElementById('formulaTitleInput');
  const formulaNotesInput = document.getElementById('formulaNotesInput');

  // Preview elements
  const previewTitle = document.getElementById('previewFormulaTitle');
  const previewCarrier = document.getElementById('previewCarrierName');
  const previewBatch = document.getElementById('previewBatchNumber');
  const previewDate = document.getElementById('previewDateStr');
  const previewIngredientsList = document.getElementById('previewIngredientsList');
  const previewDoshaBar = document.getElementById('previewDoshaBar');
  const previewSynergyScore = document.getElementById('previewSynergyScore');
  const previewViryaTag = document.getElementById('previewViryaTag');
  const saveFormulaBtn = document.getElementById('saveFormulaBtn');
  const printFormulaBtn = document.getElementById('printFormulaBtn');

  // State
  let selectedCarrier = CARRIER_BASES[0].id;
  let formulaHerbs = [
    { herbId: 'ashwagandha', ratio: 50 },
    { herbId: 'cardamom', ratio: 50 }
  ];
  let formulaName = 'Restorative Soma Rasayana';

  function generateBatchCode() {
    return 'FB-' + Math.floor(1000 + Math.random() * 9000) + '-ORG';
  }
  let batchCode = generateBatchCode();

  // Populate Herb select dropdown
  if (herbSelector) {
    herbSelector.innerHTML = `
      <option value="">-- Choose Botanical Synergist --</option>
      ${BOTANICALS.map(h => `<option value="${h.id}">${h.name} (${h.binomial})</option>`).join('')}
    `;
  }

  // Render Carriers
  function renderCarriers() {
    if (!carrierContainer) return;
    carrierContainer.innerHTML = CARRIER_BASES.map(c => `
      <div class="carrier-radio-item ${c.id === selectedCarrier ? 'selected' : ''}" data-carrier-id="${c.id}">
        <div class="carrier-name">${c.name}</div>
        <div class="carrier-meta">${c.type} &bull; ${c.absorption}</div>
        <div class="carrier-desc">${c.description}</div>
      </div>
    `).join('');

    carrierContainer.querySelectorAll('.carrier-radio-item').forEach(item => {
      item.addEventListener('click', () => {
        selectedCarrier = item.dataset.carrierId;
        renderCarriers();
        updateCalculations();
      });
    });
  }

  // Render Selected Herbs Sliders
  function renderHerbsList() {
    if (!selectedHerbsContainer) return;
    if (formulaHerbs.length === 0) {
      selectedHerbsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem; background: var(--ivory-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-sm);">
          No botanicals selected yet. Add up to four herbs below to begin compound formulation.
        </div>
      `;
      return;
    }

    selectedHerbsContainer.innerHTML = formulaHerbs.map((item, idx) => {
      const herb = BOTANICALS.find(h => h.id === item.herbId);
      if (!herb) return '';

      return `
        <div class="herb-lab-row" data-idx="${idx}">
          <div class="herb-lab-row-head">
            <div>
              <span class="herb-lab-title">${herb.name}</span>
              <span style="font-style:italic; font-size:0.78rem; color:var(--accent-olive); margin-left:0.5rem;">${herb.binomial}</span>
            </div>
            <button class="herb-lab-remove" data-remove-idx="${idx}" title="Remove herb">
              &times; Remove
            </button>
          </div>
          <div class="herb-ratio-slider-wrap">
            <span style="font-size:0.75rem; color:var(--text-muted); width:40px;">Ratio:</span>
            <input type="range" min="10" max="90" step="5" value="${item.ratio}" class="herb-ratio-slider" data-idx="${idx}">
            <span class="ratio-value-display">${item.ratio}%</span>
          </div>
        </div>
      `;
    }).join('');

    // Attach remove & slider events
    selectedHerbsContainer.querySelectorAll('.herb-lab-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.removeIdx, 10);
        formulaHerbs.splice(idx, 1);
        normalizeRatios();
        renderHerbsList();
        updateCalculations();
      });
    });

    selectedHerbsContainer.querySelectorAll('.herb-ratio-slider').forEach(slider => {
      slider.addEventListener('input', (e) => {
        const idx = parseInt(slider.dataset.idx, 10);
        formulaHerbs[idx].ratio = parseInt(e.target.value, 10);
        const display = slider.parentElement.querySelector('.ratio-value-display');
        if (display) display.textContent = `${formulaHerbs[idx].ratio}%`;
        updateCalculations();
      });
    });
  }

  function normalizeRatios() {
    if (formulaHerbs.length === 0) return;
    const equalShare = Math.round(100 / formulaHerbs.length);
    formulaHerbs.forEach(h => h.ratio = equalShare);
  }

  // Update Calculations & Live Label Preview
  function updateCalculations() {
    const carrier = CARRIER_BASES.find(c => c.id === selectedCarrier) || CARRIER_BASES[0];
    
    // Title
    if (previewTitle) {
      previewTitle.textContent = formulaName || 'Custom Apothecary Formulation';
    }
    if (previewCarrier) {
      previewCarrier.textContent = `Carrier Matrix: ${carrier.name}`;
    }
    if (previewBatch) {
      previewBatch.textContent = batchCode;
    }
    if (previewDate) {
      const now = new Date();
      previewDate.textContent = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    // Ingredients List
    if (previewIngredientsList) {
      if (formulaHerbs.length === 0) {
        previewIngredientsList.innerHTML = `<span style="color:var(--text-muted); font-style:italic;">No botanical ingredients selected</span>`;
      } else {
        previewIngredientsList.innerHTML = formulaHerbs.map(item => {
          const herb = BOTANICALS.find(h => h.id === item.herbId);
          return `<div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
            <span><strong>${herb?.name}</strong> (${herb?.binomial})</span>
            <span style="color:var(--accent-moss); font-weight:600;">${item.ratio}%</span>
          </div>`;
        }).join('');
      }
    }

    // Synergy Scoring
    let baseSynergy = 82;
    let synergyBonuses = [];
    const herbIds = formulaHerbs.map(h => h.herbId);

    SYNERGY_PAIRS.forEach(pairItem => {
      if (herbIds.includes(pairItem.pair[0]) && herbIds.includes(pairItem.pair[1])) {
        baseSynergy += 6;
        synergyBonuses.push(pairItem.bonus);
      }
    });

    const finalSynergy = Math.min(99, baseSynergy);
    if (previewSynergyScore) {
      previewSynergyScore.innerHTML = `
        <span style="font-size:1.15rem; font-weight:700; color:var(--accent-moss);">${finalSynergy}/100</span>
        ${synergyBonuses.length > 0 ? `<span style="font-size:0.75rem; color:var(--accent-olive); margin-left:0.5rem;">(${synergyBonuses.join(', ')})</span>` : ''}
      `;
    }

    // Dosha Balance & Energetics
    let netVata = 0;
    let netPitta = 0;
    let netKapha = 0;
    let warmingCount = 0;
    let coolingCount = 0;

    formulaHerbs.forEach(item => {
      const herb = BOTANICALS.find(h => h.id === item.herbId);
      if (herb) {
        netVata += herb.dosha.vata * (item.ratio / 100);
        netPitta += herb.dosha.pitta * (item.ratio / 100);
        netKapha += herb.dosha.kapha * (item.ratio / 100);
        if (herb.energetics.virya.includes('Warming')) warmingCount++;
        if (herb.energetics.virya.includes('Cooling')) coolingCount++;
      }
    });

    if (previewViryaTag) {
      if (warmingCount > coolingCount) {
        previewViryaTag.textContent = 'Thermal Virya: Ushna (Warming)';
        previewViryaTag.style.color = 'var(--accent-terracotta)';
      } else if (coolingCount > warmingCount) {
        previewViryaTag.textContent = 'Thermal Virya: Sheeta (Cooling)';
        previewViryaTag.style.color = 'var(--accent-olive)';
      } else {
        previewViryaTag.textContent = 'Thermal Virya: Neutral / Equilibrating';
        previewViryaTag.style.color = 'var(--botanical-deep)';
      }
    }
  }

  // Add Herb Button
  addHerbBtn?.addEventListener('click', () => {
    const selectedId = herbSelector.value;
    if (!selectedId) return;

    if (formulaHerbs.some(h => h.herbId === selectedId)) {
      alert('This botanical is already part of the formulation.');
      return;
    }

    if (formulaHerbs.length >= 4) {
      alert('Apothecary formulation is capped at four synergistic botanicals to maintain precise pharmacodynamics.');
      return;
    }

    formulaHerbs.push({ herbId: selectedId, ratio: 25 });
    normalizeRatios();
    herbSelector.value = '';
    renderHerbsList();
    updateCalculations();
  });

  formulaTitleInput?.addEventListener('input', (e) => {
    formulaName = e.target.value.trim() || 'Custom Formulation';
    updateCalculations();
  });

  // Save formulation
  saveFormulaBtn?.addEventListener('click', () => {
    if (formulaHerbs.length === 0) {
      alert('Please add at least one botanical herb to your formulation.');
      return;
    }

    const carrier = CARRIER_BASES.find(c => c.id === selectedCarrier) || CARRIER_BASES[0];
    const newFormula = {
      id: 'form-' + Date.now(),
      title: formulaName || 'Bespoke Apothecary Elixir',
      batch: batchCode,
      date: new Date().toISOString(),
      carrier: carrier.name,
      notes: formulaNotesInput?.value || '',
      ingredients: formulaHerbs.map(h => {
        const bot = BOTANICALS.find(b => b.id === h.herbId);
        return {
          id: h.herbId,
          name: bot?.name || h.herbId,
          binomial: bot?.binomial || '',
          ratio: h.ratio
        };
      })
    };

    const saved = JSON.parse(localStorage.getItem('folia_saved_formulations') || '[]');
    saved.unshift(newFormula);
    localStorage.setItem('folia_saved_formulations', JSON.stringify(saved));

    if (onFormulationSaved) {
      onFormulationSaved(newFormula);
    }

    // Refresh batch code for next formula
    batchCode = generateBatchCode();
    alert(`Formulation "${newFormula.title}" successfully committed to your Apothecary Tray.`);
  });

  // Print prescription
  printFormulaBtn?.addEventListener('click', () => {
    window.print();
  });

  // Public method to load herbs programmatically
  return {
    addHerb(herbId) {
      if (!formulaHerbs.some(h => h.herbId === herbId)) {
        if (formulaHerbs.length >= 4) {
          formulaHerbs.shift(); // remove oldest if at max
        }
        formulaHerbs.push({ herbId, ratio: 25 });
        normalizeRatios();
        renderHerbsList();
        updateCalculations();
      }
      // Smooth scroll to formulation lab section
      document.getElementById('formulationLab')?.scrollIntoView({ behavior: 'smooth' });
    },
    loadPair([h1, h2]) {
      formulaHerbs = [
        { herbId: h1, ratio: 50 },
        { herbId: h2, ratio: 50 }
      ];
      renderHerbsList();
      updateCalculations();
      document.getElementById('formulationLab')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
}
