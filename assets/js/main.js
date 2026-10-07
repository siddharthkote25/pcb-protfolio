/**
 * PCB Design Portfolio - Interactive Scripts
 * Handles interactive PCB layer visualizer, project tabs, clipboard copies, and image modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLayerViewer();
  initProjectTabs();
  initCopyButtons();
  initImageModal();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Interactive PCB Layer Viewer
function initLayerViewer() {
  const layerButtons = document.querySelectorAll('.layer-btn');
  
  layerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentBoard = btn.closest('.pcb-interactive-board');
      if (!parentBoard) return;

      const layer = btn.getAttribute('data-layer');
      
      // Update active button state within this board
      parentBoard.querySelectorAll('.layer-btn').forEach(b => {
        b.classList.remove('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-300');
        b.classList.add('bg-slate-800/80', 'text-slate-400');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-400');
      btn.classList.add('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-300');

      // Update layer visibility in SVG or graphic
      const fCu = parentBoard.querySelector('.layer-f-cu');
      const bCu = parentBoard.querySelector('.layer-b-cu');
      const silk = parentBoard.querySelector('.layer-silk');
      const gnd = parentBoard.querySelector('.layer-gnd');

      if (layer === 'all') {
        if (fCu) fCu.style.opacity = '1';
        if (bCu) bCu.style.opacity = '0.5';
        if (silk) silk.style.opacity = '1';
        if (gnd) gnd.style.opacity = '0.35';
      } else if (layer === 'f-cu') {
        if (fCu) fCu.style.opacity = '1';
        if (bCu) bCu.style.opacity = '0.05';
        if (silk) silk.style.opacity = '0.2';
        if (gnd) gnd.style.opacity = '0.05';
      } else if (layer === 'b-cu') {
        if (fCu) fCu.style.opacity = '0.05';
        if (bCu) bCu.style.opacity = '1';
        if (silk) silk.style.opacity = '0.15';
        if (gnd) gnd.style.opacity = '0.05';
      } else if (layer === 'silk') {
        if (fCu) fCu.style.opacity = '0.15';
        if (bCu) bCu.style.opacity = '0.05';
        if (silk) silk.style.opacity = '1';
        if (gnd) gnd.style.opacity = '0';
      } else if (layer === 'gnd') {
        if (fCu) fCu.style.opacity = '0.1';
        if (bCu) bCu.style.opacity = '0.1';
        if (silk) silk.style.opacity = '0.15';
        if (gnd) gnd.style.opacity = '0.9';
      }
    });
  });
}

// Project Section Tabs (Overview, Schematic, Layout, Specifications)
function initProjectTabs() {
  const tabButtons = document.querySelectorAll('.project-tab-btn');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectCard = btn.closest('.project-card');
      if (!projectCard) return;

      const targetTab = btn.getAttribute('data-tab');

      // Deactivate other tabs
      projectCard.querySelectorAll('.project-tab-btn').forEach(b => {
        b.classList.remove('border-emerald-500', 'text-emerald-400', 'bg-emerald-500/10');
        b.classList.add('border-transparent', 'text-slate-400', 'hover:text-slate-200');
      });

      // Activate clicked tab
      btn.classList.remove('border-transparent', 'text-slate-400');
      btn.classList.add('border-emerald-500', 'text-emerald-400', 'bg-emerald-500/10');

      // Switch panels
      projectCard.querySelectorAll('.project-tab-panel').forEach(panel => {
        if (panel.getAttribute('data-panel') === targetTab) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });
}

// Clipboard copying with Toast Feedback
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-trigger');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Copied';

      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`${label} copied to clipboard!`);
        }).catch(err => {
          console.error('Clipboard copy failed:', err);
          fallbackCopyText(textToCopy, label);
        });
      } else if (textToCopy) {
        fallbackCopyText(textToCopy, label);
      }
    });
  });
}

function fallbackCopyText(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(textArea);
}

// Visual Toast System
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg bg-slate-900 border border-emerald-500/40 text-emerald-300 shadow-xl shadow-black/60 font-mono text-sm transform translate-y-12 opacity-0 transition-all duration-300';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>${message}</span>
  `;

  // Trigger appearance
  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 2600);
}

// Lightbox modal for high-res PCB schematics & layout renders
function initImageModal() {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');

  if (!modal || !modalImg) return;

  document.querySelectorAll('.zoomable-img').forEach(imgContainer => {
    imgContainer.addEventListener('click', () => {
      const img = imgContainer.querySelector('img');
      const title = imgContainer.getAttribute('data-caption') || (img ? img.alt : 'Board Inspection');
      const src = imgContainer.getAttribute('data-full-src') || (img ? img.src : '');

      if (src) {
        modalImg.src = src;
        modalTitle.textContent = title;
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
