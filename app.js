// Complete 99 Names of Allah (Asmaul Husna) Data
const ASMAUL_HUSNA = [
  { id: 1, arab: "الرَّحْمَٰنُ", latin: "Ar-Rahmânu", indo: "Yang Maha Pengasih" },
  { id: 2, arab: "الرَّحِيمُ", latin: "Ar-Raḫîmu", indo: "Yang Maha Penyayang" },
  { id: 3, arab: "الْمَلِكُ", latin: "Al-Maliku", indo: "Yang Maha Merajai / Memerintah" },
  { id: 4, arab: "الْقُدُّوسُ", latin: "Al-Quddûsu", indo: "Yang Mahasuci" },
  { id: 5, arab: "السَّلَامُ", latin: "As-Salâmu", indo: "Yang Maha Memberi Kesejahteraan" },
  { id: 6, arab: "الْمُؤْمِنُ", latin: "Al-Mu’minu", indo: "Yang Maha Memberi Keamanan" },
  { id: 7, arab: "الْمُهَيْمِنُ", latin: "Al-Muhaiminu", indo: "Yang Maha Pemelihara" },
  { id: 8, arab: "الْعَزِيزُ", latin: "Al-`Azîzu", indo: "Yang Memiliki Mutlak Kegagahan / Maha Perkasa" },
  { id: 9, arab: "الْجَبَّارُ", latin: "Al-Jabbâru", indo: "Yang Maha Gagah / Memiliki Kebesaran" },
  { id: 10, arab: "الْمُتَكَبِّرُ", latin: "Al-Mutakabbiru", indo: "Yang Maha Megah / Memiliki Kebesaran" },
  { id: 11, arab: "الْخَالِقُ", latin: "Al-Khâliqu", indo: "Yang Maha Pencipta" },
  { id: 12, arab: "الْبَارِئُ", latin: "Al-Bâri’u", indo: "Yang Maha Melepaskan / Membuat" },
  { id: 13, arab: "الْمُصَوِّرُ", latin: "Al-Mushawwiru", indo: "Yang Maha Membentuk Rupa makhluk-Nya" },
  { id: 14, arab: "الْغَفَّارُ", latin: "Al-Ghaffâru", indo: "Yang Maha Pengampun" },
  { id: 15, arab: "الْقَهَّارُ", latin: "Al-Qahhâru", indo: "Yang Maha Memaksa / Menundukkan" },
  { id: 16, arab: "الْوَهَّابُ", latin: "Al-Wahhâbu", indo: "Yang Maha Pemberi Karunia" },
  { id: 17, arab: "الرَّزَّاقُ", latin: "Ar-Razzâqu", indo: "Yang Maha Pemberi Rezeki" },
  { id: 18, arab: "الْفَتَّاحُ", latin: "Al-Fattâhu", indo: "Yang Maha Pembuka Rahmat" },
  { id: 19, arab: "الْعَلِيمُ", latin: "Al-`Alîmu", indo: "Yang Maha Mengetahui" },
  { id: 20, arab: "الْقَابِضُ", latin: "Al-Qâbidlu", indo: "Yang Maha Menyempitkan rezeki" },
  { id: 21, arab: "الْبَاسِطُ", latin: "Al-Bâsithu", indo: "Yang Maha Melapangkan rezeki" },
  { id: 22, arab: "الْخَافِضُ", latin: "Al-Khâfidlu", indo: "Yang Maha Merendahkan derajat" },
  { id: 23, arab: "الرَّافِعُ", latin: "Ar-Râfi`u", indo: "Yang Maha Meninggikan derajat" },
  { id: 24, arab: "الْمُعِزُّ", latin: "Al-Mu`izzu", indo: "Yang Maha Memuliakan" },
  { id: 25, arab: "الْمُذِلُّ", latin: "Al-Mudzillu", indo: "Yang Maha Menghinakan" },
  { id: 26, arab: "السَّمِيعُ", latin: "As-Samî`u", indo: "Yang Maha Mendengar" },
  { id: 27, arab: "الْبَصِيرُ", latin: "Al-Bashîru", indo: "Yang Maha Melihat" },
  { id: 28, arab: "الْحَكَمُ", latin: "Al-Ḫakamu", indo: "Yang Maha Menetapkan Hukum" },
  { id: 29, arab: "الْعَدْلُ", latin: "Al-`Adlu", indo: "Yang Mahaadil" },
  { id: 30, arab: "اللَّطِيفُ", latin: "Al-Lathîfu", indo: "Yang Mahalembut" },
  { id: 31, arab: "الْخَبِيرُ", latin: "Al-Khabîru", indo: "Yang Maha Mengetahui Rahasia" },
  { id: 32, arab: "الْحَلِيمُ", latin: "Al-Ḫalîmu", indo: "Yang Maha Penyantun" },
  { id: 33, arab: "الْعَظِيمُ", latin: "Al-`Adhîmu", indo: "Yang Mahaagung" },
  { id: 34, arab: "الْغَفُورُ", latin: "Al-Ghafûru", indo: "Yang Maha Pengampun" },
  { id: 35, arab: "الشَّكُورُ", latin: "Asy-Syakûru", indo: "Yang Maha Penerima Syukur" },
  { id: 36, arab: "الْعَلِيُّ", latin: "Al-`Aliyyu", indo: "Yang Maha Tinggi" },
  { id: 37, arab: "الْكَبِيرُ", latin: "Al-Kabîru", indo: "Yang Maha Besar" },
  { id: 38, arab: "الْحَفِظُ", latin: "Al-Ḫafîdhu", indo: "Yang Maha Menjaga" },
  { id: 39, arab: "الْمُقِيتُ", latin: "Al-Muqîtu", indo: "Yang Maha Pemberi Kecukupan" },
  { id: 40, arab: "الْحَسِيبُ", latin: "Al-Ḫasîbu", indo: "Yang Maha Membuat Perhitungan" },
  { id: 41, arab: "الْجَلِيلُ", latin: "Al-Jalîlu", indo: "Yang Mahamulia" },
  { id: 42, arab: "الْكَرِيمُ", latin: "Al-Karîmu", indo: "Yang Maha Pemurah / Mulia" },
  { id: 43, arab: "الرَّقِيبُ", latin: "Ar-Raqîbu", indo: "Yang Maha Mengawasi" },
  { id: 44, arab: "الْمُجِيبُ", latin: "Al-Mujîbu", indo: "Yang Maha Mengabulkan doa" },
  { id: 45, arab: "الْوَاسِعُ", latin: "Al-Wâsi`u", indo: "Yang Maha Luas" },
  { id: 46, arab: "الْحَكِيمُ", latin: "Al-Ḫakîmu", indo: "Yang Maha Bijaksana" },
  { id: 47, arab: "الْوَدُودُ", latin: "Al-Wadûdu", indo: "Yang Maha Pencinta" },
  { id: 48, arab: "الْمَجِيدُ", latin: "Al-Majîdu", indo: "Yang Maha Mulia / Agung" },
  { id: 49, arab: "الْبَاعِثُ", latin: "Al-Bâ`itsu", indo: "Yang Maha Membangkitkan" },
  { id: 50, arab: "الشَّهِidُ", latin: "Asy-Syahîdu", indo: "Yang Maha Menyaksikan" },
  { id: 51, arab: "الْحَقُّ", latin: "Al-Ḫaqqu", indo: "Yang Mahabenar" },
  { id: 52, arab: "الْوَكِيلُ", latin: "Al-Wakîlu", indo: "Yang Maha Memelihara / Diserahi" },
  { id: 53, arab: "الْقَوِيُّ", latin: "Al-Qawiyyu", indo: "Yang Mahakuat" },
  { id: 54, arab: "الْمَتِينُ", latin: "Al-Matînu", indo: "Yang Mahakokoh" },
  { id: 55, arab: "الْوَلِيُّ", latin: "Al-Waliyyu", indo: "Yang Maha Melindungi" },
  { id: 56, arab: "الْحَمِيدُ", latin: "Al-Ḫamîdu", indo: "Yang Maha Terpuji" },
  { id: 57, arab: "الْمُحْصِي", latin: "Al-Muḫshî", indo: "Yang Maha Mengalkulasi / Menghitung" },
  { id: 58, arab: "الْمُبْدِئُ", latin: "Al-Mubdi’u", indo: "Yang Maha Memulai Penciptaan" },
  { id: 59, arab: "الْمُعِيدُ", latin: "Al-Mu`idu", indo: "Yang Maha Mengembalikan Kehidupan" },
  { id: 60, arab: "الْمُحْيِي", latin: "Al-Muḫyi", indo: "Yang Maha Menghidupkan" },
  { id: 61, arab: "الْمُمِيتُ", latin: "Al-Mumîtu", indo: "Yang Maha Mematikan" },
  { id: 62, arab: "الْحَيُّ", latin: "Al-Ḫayyu", indo: "Yang Mahahidup" },
  { id: 63, arab: "الْقَيُّومُ", latin: "Al-Qayyûmu", indo: "Yang Mahamandiri" },
  { id: 64, arab: "الْوَاجِدُ", latin: "Al-Wâjidu", indo: "Yang Maha Penemu" },
  { id: 65, arab: "الْمَاجِدُ", latin: "Al-Mâjidu", indo: "Yang Mahamulia" },
  { id: 66, arab: "الْوَاحِدُ", latin: "Al-Wâḫidu", indo: "Yang Maha Tunggal" },
  { id: 67, arab: "الْأَحَدُ", latin: "Al-Aḫadu", indo: "Yang Maha Esa" },
  { id: 68, arab: "الصَّمَدُ", latin: "Ash-Shamadu", indo: "Yang Maha Dibutuhkan / Tempat Meminta" },
  { id: 69, arab: "الْقَادِرُ", latin: "Al-Qâdiru", indo: "Yang Maha Menentukan / Berkuasa" },
  { id: 70, arab: "الْمُقْتَدِرُ", latin: "Al-Muqtadiru", indo: "Yang Maha Berkuasa" },
  { id: 71, arab: "الْمُقَدِّمُ", latin: "Al-Muqaddimu", indo: "Yang Maha Mendahulukan" },
  { id: 72, arab: "الْمُؤَخِّرُ", latin: "Al-Muakhiru", indo: "Yang Maha Mengakhirkan" },
  { id: 73, arab: "الْأَوَّلُ", latin: "Al-Awwalu", indo: "Yang Mahaawal" },
  { id: 74, arab: "الْآخِرُ", latin: "Al-Âkhiru", indo: "Yang Mahaakhir" },
  { id: 75, arab: "الظَّاهِرُ", latin: "Adh-Dhâhiru", indo: "Yang Mahanyata" },
  { id: 76, arab: "الْبَاطِنُ", latin: "Al-Bâthinu", indo: "Yang Maha Ghaib" },
  { id: 77, arab: "الْوَالِي", latin: "Al-Wâlî", indo: "Yang Maha Memerintah / Menguasai" },
  { id: 78, arab: "الْمُتَعَالِي", latin: "Al-Muta`âli", indo: "Yang Maha Tinggi" },
  { id: 79, arab: "الْبَرُّ", latin: "Al-Barru", indo: "Yang Maha Penderma / Baik" },
  { id: 80, arab: "التَّوَّابُ", latin: "At-Tawwabu", indo: "Yang Maha Penerima Tobat" },
  { id: 81, arab: "الْمُنْتَقِمُ", latin: "Al-Muntaqimu", indo: "Yang Maha Penuntut Balas" },
  { id: 82, arab: "الْعَفُوُّ", latin: "Al-`Afuwwu", indo: "Yang Maha Pemaaf" },
  { id: 83, arab: "الرَّؤُوفُ", latin: "Ar-Ra’ûfu", indo: "Yang Maha Pengasih" },
  { id: 84, arab: "مَالِكُ الْمُلْكِ", latin: "Mâlikul-mulki", indo: "Yang Maha Penguasa Kerajaan Semesta" },
  { id: 85, arab: "ذُو الْجَلَالِ وَالْإِكْرَامِ", latin: "Dzul-Jalâli wal-Ikram", indo: "Yang Maha Pemilik Kebesaran dan Kemuliaan" },
  { id: 86, arab: "الْمُقْسِطُ", latin: "Al-Muqsithu", indo: "Yang Mahaadil" },
  { id: 87, arab: "الْجَامِعُ", latin: "Al-Jâmi`u", indo: "Yang Maha Mengumpulkan" },
  { id: 88, arab: "الْغَنِيُّ", latin: "Al-Ghaniyyu", indo: "Yang Maha Berkecukupan / Kaya" },
  { id: 89, arab: "الْمُغْنِي", latin: "Al-Mughnî", indo: "Yang Maha Memberi Kekayaan" },
  { id: 90, arab: "الْمَانِعُ", latin: "Al-Mâni`u", indo: "Yang Maha Mencegah" },
  { id: 91, arab: "الضَّارُّ", latin: "Adl-Dlâru", indo: "Yang Maha Memberi Derita" },
  { id: 92, arab: "النَّافِعُ", latin: "An-Nâfi`u", indo: "Yang Maha Memberi Manfaat" },
  { id: 93, arab: "النُّورُ", latin: "An-Nûru", indo: "Yang Maha Bercahaya" },
  { id: 94, arab: "الْهَادِي", latin: "Al-Hâdî", indo: "Yang Maha Pemberi Petunjuk" },
  { id: 95, arab: "الْبَدِيعُ", latin: "Al-Badî`u", indo: "Yang Maha Pencipta keindahan" },
  { id: 96, arab: "الْبَاقِي", latin: "Al-Bâqî", indo: "Yang Mahakekal" },
  { id: 97, arab: "الْوَارِثُ", latin: "Al-Wâritsu", indo: "Yang Maha Pewaris" },
  { id: 98, arab: "الرَّشِيدُ", latin: "Ar-Rasyîdu", indo: "Yang Mahapandai / Cerdas" },
  { id: 99, arab: "الصَّبُورُ", latin: "Ash-Shabûru", indo: "Yang Mahasabar" }
];

// App State
let state = {
  currentIndex: 0,
  fontSizeMultiplier: 1.3, // Default font scale
  theme: 'dark', // 'dark', 'light', 'contrast'
  viewMode: 'slide', // 'slide', 'list'
  isAutoplay: false,
  autoplayInterval: null,
  autoplaySpeed: 8000 // ms
};

// Touch Gestures State for Swiping
let touchStartX = 0;
let touchEndX = 0;

// DOM Elements Cache
const elements = {
  body: document.getElementById('body-app'),
  btnSettings: document.getElementById('btn-settings'),
  tabSlide: document.getElementById('tab-slide'),
  tabList: document.getElementById('tab-list'),
  searchWrapper: document.getElementById('search-wrapper'),
  searchInput: document.getElementById('search-input'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  viewSlide: document.getElementById('view-slide'),
  viewList: document.getElementById('view-list'),
  cardContainer: document.getElementById('slide-card-container'),
  activeCard: document.getElementById('active-card'),
  cardNum: document.getElementById('card-num'),
  cardArabic: document.getElementById('card-arabic'),
  cardLatin: document.getElementById('card-latin'),
  cardTranslation: document.getElementById('card-translation'),
  listWrapper: document.getElementById('list-names-wrapper'),
  settingsBackdrop: document.getElementById('settings-backdrop'),
  settingsDrawer: document.getElementById('settings-drawer'),
  btnCloseSettings: document.getElementById('btn-close-settings'),
  btnFontDec: document.getElementById('btn-font-dec'),
  btnFontInc: document.getElementById('btn-font-inc'),
  fontScalePercent: document.getElementById('font-scale-percent'),
  themeButtons: document.querySelectorAll('.theme-btn'),
  speedSelect: document.getElementById('speed-select'),
  appFooter: document.getElementById('app-footer'),
  btnPrev: document.getElementById('btn-prev'),
  btnNext: document.getElementById('btn-next'),
  btnPlay: document.getElementById('btn-play'),
  btnAudio: document.getElementById('btn-audio'),
  iconPlay: document.getElementById('icon-play'),
  iconPause: document.getElementById('icon-pause')
};

// Initialize Application
function init() {
  // Load settings from localStorage if available
  loadSettings();
  
  // Apply saved configurations
  applyTheme();
  applyFontSize();
  
  // Render components
  renderActiveCard();
  renderList();

  // Event Listeners
  setupEventListeners();

  // Handle Swipe Gestures
  setupSwipeGestures();
}

// Save & Load settings to localStorage
function saveSettings() {
  localStorage.setItem('asmaul_husna_settings', JSON.stringify({
    fontSizeMultiplier: state.fontSizeMultiplier,
    theme: state.theme,
    viewMode: state.viewMode,
    autoplaySpeed: state.autoplaySpeed
  }));
}

function loadSettings() {
  const saved = localStorage.getItem('asmaul_husna_settings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.fontSizeMultiplier = parsed.fontSizeMultiplier || state.fontSizeMultiplier;
      state.theme = parsed.theme || state.theme;
      state.viewMode = parsed.viewMode || state.viewMode;
      state.autoplaySpeed = parsed.autoplaySpeed || state.autoplaySpeed;
      const allowedSpeeds = [5000, 8000, 12000, 16000, 20000];
      if (!allowedSpeeds.includes(state.autoplaySpeed)) {
        state.autoplaySpeed = 8000;
      }
      
      // Update inputs UI based on loaded states
      if (elements.speedSelect) {
        elements.speedSelect.value = state.autoplaySpeed.toString();
      }
      
      // Set active class on theme options in drawer
      elements.themeButtons.forEach(btn => {
        if (btn.getAttribute('data-theme') === state.theme) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Select appropriate tab
      if (state.viewMode === 'list') {
        switchView('list');
      } else {
        switchView('slide');
      }
    } catch (e) {
      console.error('Error parsing settings', e);
    }
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Settings Drawer Toggle
  elements.btnSettings.addEventListener('click', openSettings);
  elements.btnCloseSettings.addEventListener('click', closeSettings);
  elements.settingsBackdrop.addEventListener('click', closeSettings);

  // Tabs
  elements.tabSlide.addEventListener('click', () => switchView('slide'));
  elements.tabList.addEventListener('click', () => switchView('list'));

  // Font sizer buttons
  elements.btnFontDec.addEventListener('click', () => adjustFontSize(-0.1));
  elements.btnFontInc.addEventListener('click', () => adjustFontSize(0.1));

  // Theme switch buttons
  elements.themeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedTheme = btn.getAttribute('data-theme');
      setTheme(selectedTheme);
      elements.themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Autoplay speed selector
  elements.speedSelect.addEventListener('change', (e) => {
    state.autoplaySpeed = parseInt(e.target.value, 10);
    saveSettings();
    if (state.isAutoplay) {
      // restart autoplay interval with new speed
      stopAutoplay();
      startAutoplay();
    }
  });

  // Navigation Buttons
  elements.btnPrev.addEventListener('click', prevCard);
  elements.btnNext.addEventListener('click', nextCard);
  elements.btnPlay.addEventListener('click', toggleAutoplay);
  elements.btnAudio.addEventListener('click', speakName);

  // Search input events
  elements.searchInput.addEventListener('input', handleSearch);
  elements.btnClearSearch.addEventListener('click', clearSearch);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (state.viewMode === 'slide') {
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoplay();
      }
      if (e.key === 'v' || e.key === 'V') speakName();
    }
  });
}

// Open/Close Settings
function openSettings() {
  elements.settingsBackdrop.classList.add('active');
  elements.settingsDrawer.classList.add('active');
  elements.settingsDrawer.focus();
}

function closeSettings() {
  elements.settingsBackdrop.classList.remove('active');
  elements.settingsDrawer.classList.remove('active');
}

// Adjust Font Size
function adjustFontSize(delta) {
  state.fontSizeMultiplier = Math.max(0.8, Math.min(2.5, state.fontSizeMultiplier + delta));
  state.fontSizeMultiplier = Math.round(state.fontSizeMultiplier * 10) / 10; // Avoid floating point issues
  applyFontSize();
  saveSettings();
}

function applyFontSize() {
  document.documentElement.style.setProperty('--text-scale', state.fontSizeMultiplier);
  elements.fontScalePercent.textContent = Math.round(state.fontSizeMultiplier * 100) + '%';
}

// Apply and Set Theme
function setTheme(themeName) {
  state.theme = themeName;
  applyTheme();
  saveSettings();
}

function applyTheme() {
  elements.body.className = `theme-${state.theme}`;
  
  // Update status bar/meta tags dynamically based on theme
  let themeColor = "#0b0f19"; // dark default
  if (state.theme === 'light') themeColor = "#f7f6f0";
  if (state.theme === 'contrast') themeColor = "#000000";
  
  document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
}

// Switch View Modes
function switchView(mode) {
  state.viewMode = mode;
  saveSettings();

  if (mode === 'slide') {
    elements.tabSlide.classList.add('active');
    elements.tabSlide.setAttribute('aria-selected', 'true');
    elements.tabList.classList.remove('active');
    elements.tabList.setAttribute('aria-selected', 'false');
    
    elements.viewSlide.classList.add('active');
    elements.viewList.classList.remove('active');
    elements.searchWrapper.classList.add('hidden');
    elements.appFooter.classList.remove('hidden');
    
    renderActiveCard();
  } else {
    // List view
    elements.tabList.classList.add('active');
    elements.tabList.setAttribute('aria-selected', 'true');
    elements.tabSlide.classList.remove('active');
    elements.tabSlide.setAttribute('aria-selected', 'false');
    
    elements.viewList.classList.add('active');
    elements.viewSlide.classList.remove('active');
    elements.searchWrapper.classList.remove('hidden');
    elements.appFooter.classList.add('hidden');
    
    // Stop autoplay when switching to list mode
    if (state.isAutoplay) {
      stopAutoplay();
    }
  }
}

// Render the Active Card (Slide Mode)
function renderActiveCard() {
  const item = ASMAUL_HUSNA[state.currentIndex];
  
  elements.cardNum.textContent = `${item.id.toString().padStart(2, '0')} / 99`;
  elements.cardArabic.textContent = item.arab;
  elements.cardLatin.textContent = item.latin;
  elements.cardTranslation.textContent = item.indo;

  // Accessibility announcment for screen readers if speech synthesis isn't active
  elements.activeCard.setAttribute('aria-label', `Nama ke-${item.id}: ${item.latin}, ${item.indo}`);
}

// Render all items in List Mode
function renderList(filterQuery = "") {
  elements.listWrapper.innerHTML = '';
  
  const query = filterQuery.toLowerCase().trim();
  
  const filtered = ASMAUL_HUSNA.filter(item => {
    return (
      item.id.toString().includes(query) ||
      item.latin.toLowerCase().includes(query) ||
      item.indo.toLowerCase().includes(query)
    );
  });

  if (filtered.length === 0) {
    elements.listWrapper.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-secondary); font-size: calc(1.2rem * var(--text-scale)); font-weight: bold;">
        Nama tidak ditemukan
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.setAttribute('role', 'listitem');
    div.setAttribute('tabindex', '0');
    
    div.innerHTML = `
      <div class="list-num">${item.id.toString().padStart(2, '0')}</div>
      <div class="list-details">
        <div class="list-latin">${item.latin}</div>
        <div class="list-translation">${item.indo}</div>
      </div>
      <div class="list-arabic">${item.arab}</div>
    `;
    
    // Clicking an item jump to card detail
    const clickHandler = () => {
      state.currentIndex = item.id - 1;
      switchView('slide');
    };
    
    div.addEventListener('click', clickHandler);
    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
    
    elements.listWrapper.appendChild(div);
  });
}

// Navigation Controls
function nextCard() {
  animateCard('animate-out-left', 'animate-in-right', () => {
    state.currentIndex = (state.currentIndex + 1) % ASMAUL_HUSNA.length;
    renderActiveCard();
  });
}

function prevCard() {
  animateCard('animate-out-right', 'animate-in-left', () => {
    state.currentIndex = (state.currentIndex - 1 + ASMAUL_HUSNA.length) % ASMAUL_HUSNA.length;
    renderActiveCard();
  });
}

// CSS Transition Animation Helper
function animateCard(outClass, inClass, updateDataCallback) {
  if (state.isAutoplay) {
    // If user interacts manually, we pause auto speech or let it slide
  }
  
  elements.activeCard.classList.add(outClass);
  
  setTimeout(() => {
    updateDataCallback();
    elements.activeCard.classList.remove(outClass);
    elements.activeCard.classList.add(inClass);
    
    setTimeout(() => {
      elements.activeCard.classList.remove(inClass);
    }, 250);
  }, 250);
}

// Autoplay / Zikir Mode Logic
function toggleAutoplay() {
  if (state.isAutoplay) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

function startAutoplay() {
  state.isAutoplay = true;
  elements.iconPlay.classList.add('hidden');
  elements.iconPause.classList.remove('hidden');
  elements.btnPlay.setAttribute('aria-label', 'Jeda putar otomatis');
  elements.btnPlay.classList.add('active');

  // Trigger immediate voice reading of current name
  speakName();
  
  state.autoplayInterval = setInterval(() => {
    nextCard();
    // Speak name after it renders (using small delay for slide transition)
    setTimeout(() => {
      if (state.isAutoplay) speakName();
    }, 300);
  }, state.autoplaySpeed);
}

function stopAutoplay() {
  state.isAutoplay = false;
  elements.iconPlay.classList.remove('hidden');
  elements.iconPause.classList.add('hidden');
  elements.btnPlay.setAttribute('aria-label', 'Putar otomatis zikir');
  elements.btnPlay.classList.remove('active');
  
  if (state.autoplayInterval) {
    clearInterval(state.autoplayInterval);
    state.autoplayInterval = null;
  }
  
  // Stop speaking
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Text to Speech (TTS) Reader
function speakName() {
  if (!('speechSynthesis' in window)) {
    alert("Perangkat Anda tidak mendukung pembacaan suara.");
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const item = ASMAUL_HUSNA[state.currentIndex];
  
  // Format the speech text
  // Example: "Nomor satu. Ar-Rahman. Arti: Yang Maha Pengasih"
  const speechText = `${item.latin}. Arti. ${item.indo}.`;
  
  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.lang = 'id-ID'; // Indonesian voice
  utterance.rate = 0.85; // Slightly slower for clear visibility sync
  utterance.pitch = 1.0;

  // Attempt to select an Indonesian voice if available
  const voices = window.speechSynthesis.getVoices();
  const idVoice = voices.find(voice => voice.lang.includes('id') || voice.lang.includes('ID'));
  if (idVoice) {
    utterance.voice = idVoice;
  }

  // Handle errors or logs
  utterance.onerror = (e) => {
    console.error('SpeechSynthesisUtterance error:', e);
  };

  // Trigger browser speech
  window.speechSynthesis.speak(utterance);
}

// Swipe Gestures Handlers
function setupSwipeGestures() {
  elements.cardContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  elements.cardContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const swipeThreshold = 50; // min distance in px
  const diffX = touchEndX - touchStartX;
  
  if (Math.abs(diffX) > swipeThreshold) {
    if (diffX > 0) {
      // Swiped right -> Previous card
      prevCard();
    } else {
      // Swiped left -> Next card
      nextCard();
    }
  }
}

// Search Features
function handleSearch(e) {
  const val = e.target.value;
  if (val.trim().length > 0) {
    elements.btnClearSearch.style.display = 'flex';
  } else {
    elements.btnClearSearch.style.display = 'none';
  }
  renderList(val);
}

function clearSearch() {
  elements.searchInput.value = '';
  elements.btnClearSearch.style.display = 'none';
  renderList();
  elements.searchInput.focus();
}

// Service worker registration handles within standard initialization window load
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('PWA Service Worker registered with scope: ', reg.scope);
      })
      .catch(err => {
        console.error('PWA Service Worker registration failed: ', err);
      });
  });
}

// Handle dynamic voice loading latency in some browsers (e.g. Chrome)
if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Keep voices loaded in memory
    window.speechSynthesis.getVoices();
  };
}

// Start application
init();
