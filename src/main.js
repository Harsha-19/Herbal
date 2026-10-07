// Main Application Entrypoint
import './styles/main.css';
import { setupHerbarium } from './components/herbarium.js';
import { setupDashboard } from './components/dashboard.js';
import { setupFormulationLab } from './components/formulationLab.js';
import { setupConsultQuiz } from './components/consultQuiz.js';
import { setupMonographDrawer } from './components/monographDrawer.js';
import { setupTrayDrawer } from './components/trayDrawer.js';
import { setupSearchModal } from './components/searchModal.js';
import { toggleAmbientSound, isAmbientPlaying } from './utils/audio.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Apothecary Tray Drawer
  const tray = setupTrayDrawer({
    onRemixFormula: (formula) => {
      if (formula && formulationLab) {
        if (formula.ingredients && formula.ingredients.length > 0) {
          formula.ingredients.forEach(ing => {
            formulationLab.addHerb(ing.id);
          });
        }
      }
    }
  });

  // 2. Monograph Drawer
  const monograph = setupMonographDrawer((herbId) => {
    if (formulationLab) {
      formulationLab.addHerb(herbId);
    }
  });

  // 3. Formulation Lab
  const formulationLab = setupFormulationLab({
    onFormulationSaved: () => {
      tray.refresh();
    }
  });

  // 4. Herbarium (Plant Encyclopedia)
  setupHerbarium({
    onOpenMonograph: (herbId) => {
      monograph.openHerb(herbId);
    },
    onSelectHerbForLab: (herbId) => {
      formulationLab.addHerb(herbId);
    }
  });

  // 5. Botanical Intelligence Dashboard
  setupDashboard({
    onSelectSynergyPair: ([h1, h2]) => {
      formulationLab.loadPair([h1, h2]);
    },
    onOpenMonograph: (herbId) => {
      monograph.openHerb(herbId);
    }
  });

  // 6. Dosha Diagnostic Consult Quiz
  setupConsultQuiz({
    onLoadFormulaIntoLab: ([primaryId, partnerId]) => {
      formulationLab.loadPair([primaryId, partnerId]);
    }
  });

  // 7. Global Search Modal (Press '/')
  setupSearchModal({
    onOpenHerb: (herbId) => {
      monograph.openHerb(herbId);
    },
    onOpenArticle: (articleId) => {
      monograph.openArticle(articleId);
    }
  });

  // 8. Article Cards click handling
  document.querySelectorAll('.btn-read-article, .article-card').forEach(el => {
    el.addEventListener('click', (e) => {
      const artId = el.dataset.articleId || el.closest('[data-article-id]')?.dataset.articleId;
      if (artId) {
        monograph.openArticle(artId);
      }
    });
  });

  // 9. Hero Spotlight Link
  document.getElementById('heroSpotlightLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    monograph.openHerb('ashwagandha');
  });

  // 10. Ambient Nature Soundscape Toggle
  const ambientBtn = document.getElementById('ambientSoundBtn');
  if (ambientBtn) {
    ambientBtn.addEventListener('click', () => {
      const playing = toggleAmbientSound();
      if (playing) {
        ambientBtn.style.color = 'var(--accent-moss)';
        ambientBtn.style.backgroundColor = 'var(--accent-leaf-tint)';
        ambientBtn.setAttribute('title', 'Soothing Soundscape Active (Click to mute)');
      } else {
        ambientBtn.style.color = '';
        ambientBtn.style.backgroundColor = '';
        ambientBtn.setAttribute('title', 'Toggle Botanical Nature Soundscape');
      }
    });
  }

  // 11. Scrollspy for Refined Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
});
