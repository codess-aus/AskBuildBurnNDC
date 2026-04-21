// Main functionality
document.addEventListener('DOMContentLoaded', () => {
    // Set up videos to loop
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.setAttribute('autoplay', true);
        video.setAttribute('loop', true);
        video.setAttribute('muted', true);
        video.setAttribute('playsinline', true);
    });

    // Set up hero images with lazy loading
    const heroImages = document.querySelectorAll('.hero-image');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        heroImages.forEach(img => imageObserver.observe(img));
    }

    // Improve table accessibility
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.getAttribute('role')) {
            table.setAttribute('role', 'table');
        }
        const headers = table.querySelectorAll('th');
        headers.forEach(header => {
            if (!header.getAttribute('scope')) {
                header.setAttribute('scope', 'col');
            }
        });
    });

    // Add keyboard navigation for code blocks
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((block, index) => {
        block.setAttribute('tabindex', '0');
        block.setAttribute('role', 'region');
        block.setAttribute('aria-label', `Code example ${index + 1}`);
    });

    // Skip to main content link
    if (!document.querySelector('.skip-to-main')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Mark main content
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }
});

// Utility function to add hero image to page
function addHeroImage(imagePath, altText = 'Chapter hero image') {
    const hero = document.createElement('div');
    hero.className = 'hero-container';
    const img = document.createElement('img');
    img.className = 'hero-image';
    img.src = imagePath;
    img.alt = altText;
    img.loading = 'lazy';
    hero.appendChild(img);
    
    const content = document.querySelector('.md-content');
    if (content && content.firstChild) {
        content.insertBefore(hero, content.firstChild);
    }
    
    return hero;
}

// Utility function to add looping video
function addLoopingVideo(videoPath, posterPath = null) {
    const container = document.createElement('div');
    container.className = 'video-container';
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsinline = true;
    video.controls = true;
    if (posterPath) {
        video.poster = posterPath;
    }
    const source = document.createElement('source');
    source.src = videoPath;
    source.type = 'video/mp4';
    video.appendChild(source);
    container.appendChild(video);
    
    return container;
}

// Export for use in markdown
window.pageUtils = {
    addHeroImage,
    addLoopingVideo
};
