const contentData = [
    {
        type: 'modpack',
        title: 'Survival Plus+',
        description: 'Make survival mode easier',
        logo: 'IMG/LOGO/sp.png',
        banner: 'IMG/BG/spbg.png',
        url: 'https://modrinth.com/modpack/survival-plus+',
        buttonText: 'Download Modpack'
    },
    {
        type: 'modpack',
        title: 'BadutZY’s Survival Modpack (Fabric)',
        description: 'Modpack that add some stuff to minecraft',
        logo: 'IMG/LOGO/bs.png',
        banner: 'IMG/BG/bsbg.png',
        url: 'https://modrinth.com/modpack/badutzys-survival-modpack',
        buttonText: 'Download Modpack'
    },
    {
        type: 'mod',
        title: 'Stackable Items MOD',
        description: 'Make items stackable up to 64',
        logo: 'IMG/LOGO/si.png',
        banner: 'IMG/BG/sibg.png',
        url: 'https://modrinth.com/mod/stackable-items-mod',
        buttonText: 'Download Mod'
    },
    {
        type: 'mod',
        title: 'Craftable Items MOD',
        description: 'Make uncraftable items Craftable',
        logo: 'IMG/LOGO/ci.png',
        banner: 'IMG/BG/cibg.png',
        url: 'https://modrinth.com/mod/craftable-items-mod',
        buttonText: 'Download Mod'
    },
    {
        type: 'mod',
        title: 'Breakable Blocks',
        description: 'Make Blocks like End Portal Frame and Spawner Breakable and Obtainable in survival',
        logo: 'IMG/LOGO/bb.png',
        banner: 'IMG/BG/bbbg.png',
        url: 'https://modrinth.com/mod/breakable-blocks',
        buttonText: 'Download Mod'
    },
    {
        type: 'mod',
        title: 'Obtainable Trial Chamber',
        description: 'Make blocks in the Trial Chamber like Vault and Trial Spawner Obtainable',
        logo: 'IMG/LOGO/otc.png',
        banner: 'IMG/BG/otcbg.png',
        url: 'https://modrinth.com/mod/obtainable-trial-chamber',
        buttonText: 'Download Mod'
    },
    {
        type: 'game',
        title: 'Geometry Dash',
        description: 'Geometry Dash is a fast-paced platformer that will leave you screaming in frustration, but you’ll keep coming back for more. Geometry Dash isn’t your typical rhythm-based game, it actually requires skill on top of good timing.',
        logo: 'IMG/LOGO/gd.png',
        banner: 'IMG/BG/gdbg.png',
        url: 'https://www.dropbox.com/scl/fi/pjpthrs5i6dgmhhcv8r50/Geometry-Dash.zip?rlkey=qy9epoeg476bhdfonztbtld6f&st=rns0skw7&dl=1',
        buttonText: 'Download Game'
    },
    {
        type: 'game',
        title: 'Box Siege',
        description: 'based on 1v1 best of 3, and the time of each round can be set from 30 seconds to 5 minutes. Additional power up items are scattered around the map.',
        logo: 'IMG/LOGO/boxsiege.jpg',
        banner: 'IMG/BG/boxsiegebg.png',
        url: 'https://equinoxinteractive.github.io/BoxSiege/',
        buttonText: 'Visit the website'
    },
    {
        type: 'texture',
        title: 'Painting Only',
        description: 'Just change the existing painting in minecraft.',
        logo: 'IMG/LOGO/paint.jpg',
        banner: 'IMG/BG/paintbg.png',
        url: 'https://www.dropbox.com/scl/fi/zwgqn9a17xa1qy29vke8i/ONLY-PANTING.zip?rlkey=qkjsh4blylb2cy34wyygxky3m&st=whda3nzv&dl=1',
        buttonText: 'Download Texture'
    },
    {
        type: 'texture',
        title: 'DarkMode',
        description: 'Customize the game so that dark mode goes where the texture pack can’t reach.',
        logo: 'IMG/LOGO/darkmode.png',
        banner: 'IMG/BG/darkmodebg.jpg',
        url: 'https://geode-sdk.org/mods/bitz.darkmode_v4',
        buttonText: 'Download Texture'
    },
    {
        type: 'texture',
        title: 'BadutZY’s Dark Mode',
        description: 'Customize the game so that dark mode goes where the texture pack can’t reach edited by BadutZY.',
        logo: 'IMG/LOGO/bs.png',
        banner: 'IMG/BG/darkmodebg.jpg',
        url: 'https://www.dropbox.com/scl/fi/18tlgalgo9oxa1qbj23n6/BadutZY-s-Dark-Mode.zip?rlkey=aalibvg2i7jpsiw1dyxkxfu41&st=hbkcmzjq&dl=1',
        buttonText: 'Download Texture'
    },
    {
        type: 'texture',
        title: 'BadutZY’s Icon',
        description: 'Just change some icons in Geometry Dash.',
        logo: 'IMG/LOGO/bs.png',
        banner: 'IMG/BG/iconbg.jpg',
        url: 'https://www.dropbox.com/scl/fi/5czgtllsfc6z5v3nokiuk/BadutZY-s-Icon.zip?rlkey=g7cfillqwz2rnfpg8okau865a&st=g0hr3g5d&dl=1',
        buttonText: 'Download Texture'
    },
    {
        type: 'other',
        title: 'Geode',
        description: 'fan-made extension for Geometry Dash that adds mod support to the game.',
        logo: 'IMG/LOGO/geode.png',
        banner: 'IMG/BG/geodebg.png',
        url: 'https://www.dropbox.com/scl/fi/knxhsz20ve79r6q28vmvi/Mods.zip?rlkey=8ekzhwaqr9ueakus2gibbo66x&st=xjhf3voq&dl=1',
        buttonText: 'Download Add-on'
    },
    {
        type: 'other',
        title: 'The Whale',
        description: 'ID: 110741112',
        logo: 'IMG/LOGO/thewhale.png',
        banner: 'IMG/BG/thewhalebg.jpg',
        url: 'https://youtu.be/Q27B3natlg0?si=jweDvHhu8STGcJHz',
        buttonText: 'Watch Video'
    },
    {
        type: 'other',
        title: 'Rage Quit',
        description: 'ID: 110044659',
        logo: 'IMG/LOGO/ragequit.png',
        banner: 'IMG/BG/ragequitbg.jpg',
        url: 'https://youtu.be/7NjW7CLbZl0?si=dhcaLp69dPZ5Bkwa',
        buttonText: 'Watch Video'
    },
    {
        type: 'other',
        title: 'The Stereo Madness',
        description: 'ID: 110004702',
        logo: 'IMG/LOGO/thestereomadness.png',
        banner: 'IMG/BG/thestereomadnesbg.jpg',
        url: 'https://youtu.be/gKybauhcp68?si=91hEQGdOMaZMcIV3',
        buttonText: 'Watch Video'
    },
    {
        type: 'other',
        title: 'Breakpoint',
        description: 'ID: 117863163',
        logo: 'IMG/LOGO/breakpoint.png',
        banner: 'IMG/BG/breakpointbg.jpg',
        url: 'https://youtu.be/OnoUJK7QaBQ?si=z5TJ5dYR7oJ7h-H2',
        buttonText: 'Watch Video'
    },
    {
        type: 'other',
        title: 'How',
        description: 'ID: 63395980',
        logo: 'IMG/LOGO/how.png',
        banner: 'IMG/BG/howbg.jpg',
        url: 'https://youtu.be/UKqMBAxxun8?si=o4EsO-JPwQ7Phtge',
        buttonText: 'Watch Video'
    },
    {
        type: 'other',
        title: 'What',
        description: 'ID: 95174837',
        logo: 'IMG/LOGO/what.png',
        banner: 'IMG/BG/whatbg.jpg',
        url: 'https://youtu.be/o43EeGiiG-k?si=P4pF_Soaoy0JI5-C',
        buttonText: 'Watch Video'
    },
    {
        type: 'other',
        title: 'PBO/PPL Tugas',
        description: 'Tugas CRUD',
        logo: 'IMG/LOGO/jvlg.png',
        banner: 'IMG/BG/bdz.png',
        url: 'https://www.dropbox.com/scl/fi/oce0t2t1t6ua3xryvpij9/PBO-Rizky-Maulana-Putra-XI-RPL-2.zip?rlkey=09il1t0qhbbl74xkk6a8qo5be&st=mzs3aa5t&dl=1',
        buttonText: 'Download'
    }
];

let currentFilter = 'all';
let searchTerm = '';
let filteredData = [];

// Initialize
function init() {
    updateStats();
    renderContent();
    setupEventListeners();
    initEasterEgg();
}

// Easter Egg Modal
function initEasterEgg() {
    const easterEggBtn = document.getElementById('easterEggBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const videoFrame = document.getElementById('videoFrame');

    const videoUrl = 'https://drive.google.com/file/d/19q6lE_auUtgT7H-_RF0jP0KbD-b9vHDV/preview';
    
    // Open Modal
    easterEggBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        videoFrame.src = videoUrl;
        document.body.style.overflow = 'hidden';
    });
    
    // Close Modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = 'auto';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');

    // Hamburger Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Navigation Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            if (filter) {
                setFilter(filter);
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Filter Tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const filter = e.currentTarget.dataset.filter;
            setFilter(filter);
        });
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase().trim();
        clearSearch.classList.toggle('visible', searchTerm.length > 0);
        renderContent();
    });

    // Clear Search
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        searchTerm = '';
        clearSearch.classList.remove('visible');
        searchInput.focus();
        renderContent();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchTerm) {
                searchInput.value = '';
                searchTerm = '';
                clearSearch.classList.remove('visible');
                renderContent();
            }
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Set Filter
function setFilter(filter) {
    currentFilter = filter;
    
    // Update active states
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === filter);
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.dataset.filter === filter);
    });
    
    renderContent();
}

// Update Stats
function updateStats() {
    const mods = contentData.filter(item => item.type === 'mod').length;
    const modpacks = contentData.filter(item => item.type === 'modpack').length;
    const games = contentData.filter(item => item.type === 'game').length;

    document.getElementById('totalMods').textContent = mods;
    document.getElementById('totalModpacks').textContent = modpacks;
    document.getElementById('totalGames').textContent = games;
}

// Render Content
function renderContent() {
    const grid = document.getElementById('contentGrid');
    const contentCount = document.getElementById('contentCount');
    
    // Filter data
    filteredData = contentData.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.type === currentFilter;
        const matchesSearch = !searchTerm || 
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });
    
    // Update count
    const filterText = currentFilter === 'all' ? 'konten' : 
                      currentFilter === 'mod' ? 'mods' :
                      currentFilter === 'modpack' ? 'modpacks' : 'games';
    contentCount.textContent = `Menampilkan ${filteredData.length} ${filterText}`;
    
    // Render cards
    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <p>Tidak ada hasil ditemukan</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Coba gunakan kata kunci lain atau ubah filter</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredData.map(item => `
        <div class="content-card">
            <div class="card-banner" style="background-image: url('${item.banner}')">
                <div class="card-logo">
                    <img src="${item.logo}" alt="${item.title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%2321262d%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-size=%2240%22 fill=%22%231bd96a%22%3E${item.title.charAt(0)}%3C/text%3E%3C/svg%3E'">
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-footer">
                    <span class="card-tag ${item.type}">${item.type.toUpperCase()}</span>
                    <button class="card-download-btn" onclick="openContent('${item.url}', event)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        ${item.buttonText || 'Download'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Content
function openContent(url, event) {
    if (event) {
        event.stopPropagation();
    }
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);





