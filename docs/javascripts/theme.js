// Theme Management
const THEME_KEY = 'askbuildburn-theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

// Initialize theme
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem(THEME_KEY);
    const theme = savedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME);
    
    applyTheme(theme);
    updateThemeToggle(theme);
}

// Apply theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
}

// Update toggle button icon
function updateThemeToggle(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        const icon = toggle.querySelector('.material-icons');
        if (icon) {
            icon.textContent = theme === DARK_THEME ? 'brightness_7' : 'brightness_4';
        }
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    applyTheme(newTheme);
    updateThemeToggle(newTheme);
}

// Listen for theme preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
        updateThemeToggle(e.matches ? DARK_THEME : LIGHT_THEME);
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Set up theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});
