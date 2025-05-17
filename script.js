// Global variables
let isLoggedIn = false;
let currentSection = '';
let lastActivity = Date.now();
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

// Configuration for content sections
const config = {
    tugas: {
        count: 14,
        filterOptions: ['Semua', 'Website', 'PPLG', 'Informatika', 'P5', 'Ulangan', 'Projek Sekolah', 'Projek Pribadi'],
        titles: [
            'Rizky Phortopolio (PPLG)',
            'E-commerce (PPLG)',
            'Kasir (PPLG Ulangan)',
            'Kereta (PPLG)',
            'Bioskop (PPLG)',
            'Perpustakaan (PPLG Ulangan)',
            'Company Profile (PPLG)',
            'Global Multimedia Creative School (Informatika)',
            'Benteng Vredeburg (Informatika Ulangan)',
            'Prototype Product (P5)',
            'Infokom Esports (Projek Pribadi)',
            'Pemutar Lagu (Projek Pribadi)',
            'JKT48 (Projek Pribadi)',
            'Fritzy Force (Projek Pribadi)'
        ],
        links: [
            'https://drive.google.com/file/d/1Ic_I9jzWZCQHHe2UTL6tS53ydogArSRV/view?usp=drive_link',
            'https://drive.google.com/file/d/1ZA-SZBheFX637UxfeKBtOCoGqUTIXnGr/view?usp=drive_link',
            'https://drive.google.com/file/d/1gPYkjw-43upjBaIeM6vU2av1b8nnOJk_/view?usp=drive_link',
            'https://drive.google.com/file/d/1gOnKBEMumWdVYyWZVx5O86c-68R05QSc/view?usp=drive_link',
            'https://drive.google.com/file/d/1u8kswjyHiA1clqLsdTRSNH2lRC802zXb/view?usp=drive_link',
            'https://drive.google.com/file/d/1izMk3KKblZKDnpus7bMTWImTHTQvuH_9/view?usp=drive_link',
            'https://drive.google.com/file/d/1N1BrVMZ5faZs7gttn0wVYbSXzlxy5SR7/view?usp=drive_link',
            'https://drive.google.com/file/d/130eund1tmFpNBm2HL2QwcdoD7M1Irp2n/view?usp=drive_link',
            'https://drive.google.com/file/d/1QWXONFzPr59pCaGoi7E_YVRy4OeRQ6dd/view?usp=drive_link',
            'https://drive.google.com/file/d/1wveuWq5uqr17z7IowVeCitwXdKnCKTtA/view?usp=drive_link',
            'https://drive.google.com/file/d/1LqIboJOCTpcIpT3LhWaSTvZftIyD1F75/view?usp=drive_link',
            'https://drive.google.com/file/d/16WH1twAVmYhCobDPCvMME7NMMXJZ6qtz/view?usp=drive_link',
            'https://drive.google.com/file/d/1z4lVvNoreOJ6-1UiDm8DGT5rXiVtKG4Q/view?usp=drive_link',
            'https://drive.google.com/file/d/1DpAK68fdhvipPuWYpuJfX9WJIBbNQfi5/view?usp=drive_link'
        ],
        descriptions: [
            'Rizky Phortopolio Website.',
            'E-commerce Website.',
            'Kasir Website.',
            'Tiket Kereta Website',
            'Tiket Bioskop Website',
            'Perpustakaan Website',
            'Company Profile Website',
            'Global Multimedia Creative School Website',
            'Benteng Vredeburg Website',
            'Prototype Produk Website',
            'Infokom Esports Website',
            'Pemutar Lagu Website',
            'JKT48 Website',
            'Fritzy Force Website'
        ],
        filters: [
            ['Semua', 'Website', 'PPLG', 'Projek Sekolah'],
            ['Semua', 'Website', 'PPLG', 'Projek Sekolah'],
            ['Semua', 'Website', 'PPLG', 'Ulangan', 'Projek Sekolah'],
            ['Semua', 'Website', 'PPLG', 'Projek Sekolah'],
            ['Semua', 'Website', 'PPLG', 'Projek Sekolah'],
            ['Semua', 'Website', 'PPLG', 'Ulangan', 'Projek Sekolah'],
            ['Semua', 'Website', 'PPLG', 'Projek Sekolah'],
            ['Semua', 'Website', 'Informatika', 'Projek Sekolah'],
            ['Semua', 'Website', 'Informatika', 'Ulangan', 'Projek Sekolah'],
            ['Semua', 'Website', 'P5', 'Projek Sekolah'],
            ['Semua', 'Website', 'Projek Pribadi'],
            ['Semua', 'Website', 'Projek Pribadi'],
            ['Semua', 'Website', 'Projek Pribadi'],
            ['Semua', 'Website', 'Projek Pribadi']
        ]
    },
    random: {
        count: 4,
        filterOptions: ['Semua', 'Mod', 'Resource Pack', 'Shaders', 'Map'],
        titles: [
            'Ultimate Immersion Modern Archviz',
            'Minecraft Backrooms Found Footage',
            'The First City ($50,000 MrBeast Mod)',
            'Physics'
        ],
        links: [
            'https://drive.google.com/file/d/17hkagsWej8jkY4AOb9-xQcyVlXM60mrg/view?usp=drive_link',
            'https://drive.google.com/file/d/193NgfzJjyJyL5ofZEyk5XHqjavksKC6K/view?usp=drive_link',
            'https://www.mediafire.com/file/vowmw0k265ltuvh/MR_Beast_mod.zip/file',
            'https://drive.google.com/file/d/1mFbXLvDFp6bDfCBaTJdVA1yTqGD1qREO/view?usp=drive_link'
        ],
        descriptions: [
            'Realistic MOD.',
            'Backrooms MOD.',
            'MrBeast MOD.',
            'Physics Mod.'
        ],
        filters: [
            ['Semua', 'Mod', 'Resource Pack', 'Shaders'],
            ['Semua', 'Mod', 'Resource Pack'],
            ['Semua', 'Mod', 'Resource Pack', 'Shaders', 'Map'],
            ['Semua', 'Mod', 'Resource Pack', 'Shaders']
        ]
    },
    game: {
        count: 2,
        filterOptions: ['Semua', 'Projek', 'Bisa Dimainkan'],
        titles: [
            'Projek BOX SIEGE',
            'Game BOX SIEGE'
        ],
        links: [
            'https://drive.google.com/file/d/1Fktic2rU2Gcr0oTd9rM_1piIB6zfbfif/view?usp=drive_link',
            'https://drive.google.com/file/d/1hgbnzQ2dg3GwHTLqu9UpUuOL_6aoXnJk/view?usp=drive_link'
        ],
        descriptions: [
            'Link download Projek game BOX SIEGE',
            'Link download game BOX SIEGE (sedikit bug)'
        ],
        filters: [
            ['Semua', 'Projek'],
            ['Semua', 'Bisa Dimainkan']
        ]
    }
};

// Session management
function updateActivity() {
    lastActivity = Date.now();
}

function checkSession() {
    if (isLoggedIn && Date.now() - lastActivity > SESSION_TIMEOUT) {
        Swal.fire({
            title: 'Sesi Berakhir',
            text: 'Anda telah idle selama 30 menit. Silakan login kembali.',
            icon: 'warning',
            confirmButtonText: 'OK'
        }).then(() => {
            logout(true);
        });
    }
}

// Background animation for login page
function animateLoginBackground() {
    const shapes = document.querySelectorAll('.login-shape');
    shapes.forEach((shape, index) => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        shape.style.left = `${randomX}px`;
        shape.style.top = `${randomY}px`;
        shape.style.animationDelay = `${index * 2}s`;
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    const profile = document.querySelector('.profile');
    profile.removeEventListener('click', toggleDropdown);
    profile.addEventListener('click', toggleDropdown);

    document.removeEventListener('click', closeDropdownOutside);
    document.addEventListener('click', closeDropdownOutside);

    function closeDropdownOutside(event) {
        const dropdown = document.getElementById('dropdown');
        // Jangan tutup dropdown jika klik terjadi di dalam profile atau dropdown
        if (!profile.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    }

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.removeEventListener('focus', handleInputFocus);
        input.removeEventListener('blur', handleInputBlur);
        input.addEventListener('focus', handleInputFocus);
        input.addEventListener('blur', handleInputBlur);
    });

    function handleInputFocus() {
        this.parentElement.classList.add('focused');
    }

    function handleInputBlur() {
        this.parentElement.classList.remove('focused');
    }

    const passwordInput = document.getElementById('password');
    passwordInput.removeEventListener('keypress', handlePasswordEnter);
    passwordInput.addEventListener('keypress', handlePasswordEnter);

    function handlePasswordEnter(e) {
        if (e.key === 'Enter') {
            login();
        }
    }

    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    activityEvents.forEach(event => {
        document.removeEventListener(event, updateActivity);
        document.addEventListener(event, updateActivity);
    });

    clearInterval(window.sessionCheckInterval);
    window.sessionCheckInterval = setInterval(checkSession, 60000);

    window.removeEventListener('pageshow', handlePageShow);
    window.addEventListener('pageshow', handlePageShow);

    function handlePageShow() {
        document.body.classList.add('page-transition');
        setTimeout(() => {
            document.body.classList.remove('page-transition');
        }, 500);
    }

    const searchInput = document.getElementById('search-input');
    searchInput.removeEventListener('keypress', handleSearchEnter);
    searchInput.addEventListener('keypress', handleSearchEnter);

    animateLoginBackground();
    updateLoginState();
}

function updateLoginState() {
    if (!isLoggedIn) {
        document.getElementById('main-content').style.display = 'none';
        document.getElementById('login-page').style.display = 'flex';
    } else {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        Swal.fire({
            title: 'Error',
            text: 'Username dan password harus diisi!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    const loginBtn = document.querySelector('.login-btn');
    const originalContent = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    loginBtn.disabled = true;

    setTimeout(() => {
        if (username === 'BadutZY' && password === 'Fritzy123') {
            isLoggedIn = true;
            Swal.fire({
                title: 'Login Berhasil',
                text: 'Selamat datang di Portal Tugas',
                icon: 'success',
                confirmButtonText: 'Lanjutkan',
                timer: 2000,
                timerProgressBar: true
            }).then(() => {
                const mainContent = document.getElementById('main-content');
                mainContent.classList.add('page-transition');
                updateLoginState();
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                setTimeout(() => {
                    mainContent.classList.remove('page-transition');
                }, 500);
            });
        } else {
            loginBtn.innerHTML = originalContent;
            loginBtn.disabled = false;
            Swal.fire({
                title: 'Login Gagal',
                text: 'Username atau password salah',
                icon: 'error',
                confirmButtonText: 'Coba Lagi'
            });
        }
    }, 1000);
}

function toggleDropdown(event) {
    event.stopPropagation(); // Mencegah event klik menyebar ke dokumen
    const dropdown = document.getElementById('dropdown');
    console.log('Toggle dropdown:', dropdown.style.display); // Debugging
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function logout(force = false) {
    if (force) {
        performLogout();
        return;
    }

    Swal.fire({
        title: 'Logout?',
        text: 'Anda yakin ingin keluar dari portal?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ya, Logout',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            performLogout();
        }
    });
}

function performLogout() {
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';

    setTimeout(() => {
        isLoggedIn = false;
        updateLoginState();

        currentSection = '';
        resetActiveNavButtons();

        mainContent.style.transform = '';
        mainContent.style.opacity = '';

        // Reset login button state
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
        loginBtn.disabled = false;

        const loginPage = document.getElementById('login-page');
        loginPage.classList.add('page-transition');

        setTimeout(() => {
            loginPage.classList.remove('page-transition');
        }, 500);

        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });

        toast.fire({
            icon: 'success',
            title: 'Logout berhasil'
        });
    }, 300);
}

function resetActiveNavButtons() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
}

function setActiveNavButton(type) {
    resetActiveNavButtons();
    document.getElementById(`btn-${type}`).classList.add('active');
}

function loadContent(type) {
    try {
        if (currentSection === type) return;
        currentSection = type;
        setActiveNavButton(type);

        document.getElementById('search-input').value = '';
        document.getElementById('filter-select').value = 'all';

        renderContent(type);
    } catch (error) {
        console.error('Error loading content:', error);
        Swal.fire({
            title: 'Error',
            text: 'Terjadi kesalahan saat memuat konten.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

function handleSearchEnter(event) {
    if (event.key === 'Enter') {
        searchContent();
    }
}

function searchContent() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const filterSelect = document.getElementById('filter-select').value;
    renderContent(currentSection, searchInput, filterSelect);
}

function filterContent() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    const filterSelect = document.getElementById('filter-select').value;
    renderContent(currentSection, searchInput, filterSelect);
}

function renderContent(type, searchTerm = '', filterTag = 'all') {
    try {
        if (!type || !config[type]) {
            throw new Error('Invalid content type');
        }

        const contentSection = document.getElementById('content-section');
        contentSection.innerHTML = `
            <div class="content-controls">
                <div class="search-bar">
                    <input type="text" id="search-input" placeholder="Cari tugas atau konten..." value="${searchTerm}">
                    <i class="fas fa-search"></i>
                </div>
                <div class="filter-bar">
                    <select id="filter-select">
                        ${config[type].filterOptions.map(option => `
                            <option value="${option}" ${filterTag === option ? 'selected' : ''}>
                                ${option.charAt(0).toUpperCase() + option.slice(1)}
                            </option>
                        `).join('')}
                    </select>
                </div>
            </div>
            <div style="display: flex; justify-content: center; align-items: center; height: 300px;">
                <div style="text-align: center;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--primary);"></i>
                    <p>Loading content...</p>
                </div>
            </div>
        `;

        document.getElementById('search-input').addEventListener('keypress', handleSearchEnter);
        document.getElementById('filter-select').addEventListener('change', filterContent);

        setTimeout(() => {
            const sectionData = config[type];
            let html = `
                <div class="content-controls">
                    <div class="search-bar">
                        <input type="text" id="search-input" placeholder="Cari tugas atau konten..." value="${searchTerm}">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="filter-bar">
                        <select id="filter-select">
                            ${config[type].filterOptions.map(option => `
                                <option value="${option}" ${filterTag === option ? 'selected' : ''}>
                                    ${option.charAt(0).toUpperCase() + option.slice(1)}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                </div>
                <div class="page-transition">
                    <h2 style="margin-bottom: 20px; color: var(--primary);">
                        ${type === 'tugas' ? '<i class="fas fa-book-open"></i> Daftar Tugas' : type === 'random' ? '<i class="fas fa-random"></i> Konten Random' : '<i class="fas fa-gamepad"></i> Daftar Game'}
                    </h2>
                    <div class="content-grid">`;

            let hasContent = false;
            for (let i = 0; i < sectionData.count; i++) {
                const title = (sectionData.titles && sectionData.titles[i]) || `${type === 'tugas' ? 'Tugas' : type === 'random' ? 'Random' : 'Game'} ${i + 1}`;
                const description = sectionData.descriptions[i] || 'Deskripsi tidak tersedia.';
                const link = sectionData.links[i] || '#';
                const itemFilters = sectionData.filters[i] || [];

                const titleLower = title.toLowerCase();
                const descriptionLower = description.toLowerCase();

                const matchesSearch = !searchTerm || titleLower.includes(searchTerm) || descriptionLower.includes(searchTerm);
                const matchesFilter = filterTag === 'all' || itemFilters.includes(filterTag);

                if (matchesSearch && matchesFilter) {
                    hasContent = true;
                    html += `
                        <div class="content-item" data-index="${i}">
                            <div class="content-item-header">
                                <h2>${title}</h2>
                            </div>
                            <div class="content-item-body">
                                <p>${description}</p>
                                <p><strong>Tags:</strong> ${itemFilters.join(', ')}</p>
                            </div>
                            <div class="content-item-footer">
                                <button class="open-btn" onclick="openLink('${link}')">
                                    <i class="fas fa-external-link-alt"></i> Buka Link
                                </button>
                            </div>
                        </div>
                    `;
                }
            }

            if (!hasContent) {
                html += `
                    <div style="text-align: center; color: var(--text-muted);">
                        <p>Tidak ada konten yang ditemukan.</p>
                    </div>
                `;
            }

            html += `</div></div>`;
            contentSection.innerHTML = html;

            document.getElementById('search-input').addEventListener('keypress', handleSearchEnter);
            document.getElementById('filter-select').addEventListener('change', filterContent);

            const items = document.querySelectorAll('.content-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.animation = `itemAppear 0.5s ease forwards ${index * 0.1}s`;
                }, 10);
            });

            animateContentItems();
        }, 800);
    } catch (error) {
        console.error('Error rendering content:', error);
        Swal.fire({
            title: 'Error',
            text: 'Terjadi kesalahan saat memuat konten.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

function animateContentItems() {
    const items = document.querySelectorAll('.content-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
}

function openLink(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Tautan tidak valid!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}
