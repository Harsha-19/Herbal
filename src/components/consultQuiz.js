import { BOTANICALS } from '../data/botanicals.js';

export function setupConsultQuiz({ onLoadFormulaIntoLab }) {
  const container = document.getElementById('consultQuizContainer');
  if (!container) return;

  const questions = [
    {
      id: 'constitution',
      title: 'Constitutional Tendency (Prakriti)',
      subtitle: 'Identify your lifelong baseline physical and nervous predisposition.',
      options: [
        {
          label: 'A',
          dosha: 'vata',
          title: 'Vata Baseline (Air & Ether)',
          desc: 'Light slender frame, swift imaginative thoughts, quick to tire, prone to dry skin and sensitivity to cold wind.'
        },
        {
          label: 'B',
          dosha: 'pitta',
          title: 'Pitta Baseline (Fire & Water)',
          desc: 'Moderate athletic build, decisive intellect, intense metabolic fire, prone to internal heat and sharp deadlines.'
        },
        {
          label: 'C',
          dosha: 'kapha',
          title: 'Kapha Baseline (Earth & Water)',
          desc: 'Solid sturdy build, calm serene endurance, deep grounding, prone to slow metabolism and morning heaviness.'
        }
      ]
    },
    {
      id: 'imbalance',
      title: 'Current Acute Disturbance (Vikriti)',
      subtitle: 'Where do you presently feel out of equilibrium?',
      options: [
        {
          label: 'A',
          dosha: 'vata',
          title: 'Nervous Agitation & Fragmented Sleep',
          desc: 'Racing evening thoughts, superficial sleep, somatic restlessness, erratic hunger, or physical exhaustion.'
        },
        {
          label: 'B',
          dosha: 'pitta',
          title: 'Inflammatory Heat & Mental Friction',
          desc: 'Gastric acid sensitivity, cutaneous redness, eye strain, irritability, and perfectionistic burnout.'
        },
        {
          label: 'C',
          dosha: 'kapha',
          title: 'Lethargy, Brain Fog & Metabolic Stagnation',
          desc: 'Difficulty waking, persistent mental inertia, lymphatic water retention, and post-meal sluggishness.'
        }
      ]
    },
    {
      id: 'agni',
      title: 'Digestive Fire & Metabolic Rhythm (Agni)',
      subtitle: 'How does your digestive axis process daily nourishment?',
      options: [
        {
          label: 'A',
          dosha: 'vata',
          title: 'Vishama Agni (Variable & Irregular)',
          desc: 'Appetite fluctuates wildly day-to-day; frequent gas, dryness, or variable gut transit.'
        },
        {
          label: 'B',
          dosha: 'pitta',
          title: 'Tikshna Agni (Sharp & Hyper-Metabolic)',
          desc: 'Cannot skip a meal without dizziness or agitation; burns through food quickly with acidic heat.'
        },
        {
          label: 'C',
          dosha: 'kapha',
          title: 'Manda Agni (Heavy & Slow)',
          desc: 'Low appetite in mornings; food sits in stomach for extensive hours; easily gains water weight.'
        }
      ]
    },
    {
      id: 'intention',
      title: 'Therapeutic Intention',
      subtitle: 'What primary restoration do you seek from the botanical pharmacopeia?',
      options: [
        {
          label: 'A',
          dosha: 'vata',
          title: 'Deep Restorative Grounding & Cortisol Relief',
          desc: 'Down-regulate sympathetic adrenal overdrive; restore deep, uninterrupted delta sleep.'
        },
        {
          label: 'B',
          dosha: 'pitta',
          title: 'Cellular Cooling, Dermal Radiance & Liver Clarity',
          desc: 'Clear vascular heat, calm reactive dermal tissue, and preserve hormonal equilibrium.'
        },
        {
          label: 'C',
          dosha: 'kapha',
          title: 'Cognitive Acuity, Vitality & Metabolic Kindle',
          desc: 'Sharpen synaptic memory, stimulate lymphatic clearing, and awaken physical stamina.'
        }
      ]
    }
  ];

  let currentStep = 0;
  let userResponses = [];

  function renderQuestion() {
    const q = questions[currentStep];

    container.innerHTML = `
      <div class="quiz-step-indicator">
        ${questions.map((_, i) => `
          <div class="step-pip ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'done' : ''}">
            ${i < currentStep ? '&check;' : i + 1}
          </div>
        `).join('')}
      </div>

      <div class="eyebrow" style="display:flex; justify-content:center; margin-bottom:0.4rem;">
        Diagnostic Stage 0${currentStep + 1} of 04
      </div>
      <h3 class="quiz-question-title">${q.title}</h3>
      <p class="quiz-question-sub">${q.subtitle}</p>

      <div class="quiz-options-stack">
        ${q.options.map((opt, idx) => `
          <button class="quiz-option-button" data-dosha="${opt.dosha}" data-idx="${idx}">
            <div class="option-letter">${opt.label}</div>
            <div>
              <div class="option-content-title">${opt.title}</div>
              <div class="option-content-desc">${opt.desc}</div>
            </div>
          </button>
        `).join('')}
      </div>

      ${currentStep > 0 ? `
        <div style="margin-top: 1.8rem; text-align: center;">
          <button id="quizBackBtn" class="btn-botanical-secondary" style="font-size:0.8rem; padding:0.45rem 1rem;">
            &larr; Previous Step
          </button>
        </div>
      ` : ''}
    `;

    container.querySelectorAll('.quiz-option-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const dosha = btn.dataset.dosha;
        userResponses[currentStep] = dosha;
        if (currentStep < questions.length - 1) {
          currentStep++;
          renderQuestion();
        } else {
          renderResult();
        }
      });
    });

    document.getElementById('quizBackBtn')?.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        renderQuestion();
      }
    });
  }

  function renderResult() {
    // Tally dominant dosha
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    userResponses.forEach(d => {
      if (counts[d] !== undefined) counts[d]++;
    });

    let dominantDosha = 'vata';
    if (counts.pitta > counts.vata && counts.pitta >= counts.kapha) dominantDosha = 'pitta';
    if (counts.kapha > counts.vata && counts.kapha > counts.pitta) dominantDosha = 'kapha';

    let primaryHerbId = 'ashwagandha';
    let partnerHerbId = 'cardamom';
    let protocolName = 'Soma Restorative Grounding Protocol';
    let protocolDesc = 'Your constitution reflects an excess of Vata (Air & Ether), manifesting as nervous hyper-vigilance, variable metabolic heat, and fragmented sleep. Your optimal botanical allies are unctuous, grounding adaptogens paired with carminative aromatics.';

    if (dominantDosha === 'pitta') {
      primaryHerbId = 'shatavari';
      partnerHerbId = 'vetiver';
      protocolName = 'Pitta Cooling & Cellular Radiance Protocol';
      protocolDesc = 'Your profile indicates an accumulation of Pitta (Fire & Water), leading to internal systemic heat, sharp deadlines, and ocular/dermal sensitivity. Your prescription focuses on bitter and sweet cooling tonics that soothe without diminishing digestive Agni.';
    } else if (dominantDosha === 'kapha') {
      primaryHerbId = 'tulsi';
      partnerHerbId = 'rosemary';
      protocolName = 'Prana Awakening & Metabolic Kindle Protocol';
      protocolDesc = 'Your assessment reveals elevated Kapha (Earth & Water), bringing sluggish lymphatic drainage and morning heaviness. Pungent, stimulating aromatic adaptogens will kindle metabolic Agni and clarify cerebral oxygenation.';
    }

    const primaryHerb = BOTANICALS.find(h => h.id === primaryHerbId);
    const partnerHerb = BOTANICALS.find(h => h.id === partnerHerbId);

    container.innerHTML = `
      <div class="consult-result-view">
        <div style="text-align:center;">
          <span class="eyebrow">Personalized Ethnobotanical Synthesis</span>
          <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--botanical-deep); margin-bottom: 0.5rem;">
            ${protocolName}
          </h3>
          <p style="font-size: 0.95rem; line-height: 1.65; max-width: 620px; margin: 0 auto; color: var(--text-secondary);">
            ${protocolDesc}
          </p>
        </div>

        <div class="consult-hero-remedy">
          <div style="display:flex; justify-content:center; gap:2.5rem; flex-wrap:wrap; margin-bottom:1.5rem;">
            <div style="text-align:center;">
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); display:block; margin-bottom:0.25rem;">Primary Sovereign Botanical</span>
              <strong style="font-family:var(--font-serif); font-size:1.45rem; color:var(--botanical-deep);">${primaryHerb?.name}</strong>
              <div style="font-style:italic; font-size:0.8rem; color:var(--text-muted);">${primaryHerb?.binomial}</div>
            </div>
            <div style="align-self:center; font-size:1.4rem; color:var(--accent-olive);">&plus;</div>
            <div style="text-align:center;">
              <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--accent-olive); display:block; margin-bottom:0.25rem;">Synergistic Companion</span>
              <strong style="font-family:var(--font-serif); font-size:1.45rem; color:var(--botanical-deep);">${partnerHerb?.name}</strong>
              <div style="font-style:italic; font-size:0.8rem; color:var(--text-muted);">${partnerHerb?.binomial}</div>
            </div>
          </div>
          <button id="consultLoadLabBtn" class="btn-botanical-primary">
            Load Protocol into Formulation Lab &rarr;
          </button>
        </div>

        <!-- Tri-phasic Daily Ritual -->
        <div>
          <h4 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--botanical-deep); text-align:center;">
            Tri-Phasic Daily Botanical Ritual (Dinacharya)
          </h4>
          <p style="font-size:0.86rem; color:var(--text-muted); text-align:center; margin-bottom:1.2rem;">
            Aligned with natural circadian and seasonal energetic shifts.
          </p>

          <div class="ritual-timeline">
            <div class="ritual-phase-card">
              <div class="ritual-phase-time">Dawn &bull; 06:00 – 08:00</div>
              <h5 class="ritual-phase-title">Awakening Elixir</h5>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                Warm mountain spring water with ${dominantDosha === 'vata' ? 'fresh lemon, raw honey, and pinch of cardamom' : dominantDosha === 'pitta' ? 'aloe vera nectar and soaked fennel seeds' : 'warm ginger, black pepper, and Tulsi decoction'}.
              </p>
            </div>

            <div class="ritual-phase-card">
              <div class="ritual-phase-time">Solar Peak &bull; 12:00 – 14:00</div>
              <h5 class="ritual-phase-title">Metabolic Sustenance</h5>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                Take primary nourishing botanical companion with wholesome lunch to maximize liver and intestinal bioavailability during peak solar Agni.
              </p>
            </div>

            <div class="ritual-phase-card">
              <div class="ritual-phase-time">Twilight &bull; 20:00 – 22:00</div>
              <h5 class="ritual-phase-title">Soma Restorative Tonic</h5>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                Simmer 2g ${primaryHerb?.name} in warm golden plant milk with ${partnerHerb?.name}. Consume 45 minutes prior to sleep away from digital screens.
              </p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:1.5rem;">
          <button id="consultRestartBtn" class="btn-botanical-secondary" style="font-size:0.82rem;">
            &circlearrowleft; Retake Diagnostic Consult
          </button>
        </div>
      </div>
    `;

    document.getElementById('consultLoadLabBtn')?.addEventListener('click', () => {
      if (onLoadFormulaIntoLab) {
        onLoadFormulaIntoLab([primaryHerbId, partnerHerbId]);
      }
    });

    document.getElementById('consultRestartBtn')?.addEventListener('click', () => {
      currentStep = 0;
      userResponses = [];
      renderQuestion();
    });
  }

  // Initial step
  renderQuestion();
}
