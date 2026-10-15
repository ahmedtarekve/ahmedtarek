// --- Projects Database (Wistia Portfolio) ---

// Dynamically load Wistia core & media scripts so <wistia-player> works seamlessly with innerHTML
(function loadWistiaScripts() {
    const wistiaMediaIds = ['fqxv163bbz', 'hj3b7jyhnn', '406or55x14'];

    // 1. Load main Wistia player script
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // 2. Load each video's module script
    wistiaMediaIds.forEach(id => {
        const embedScript = document.createElement('script');
        embedScript.src = `https://fast.wistia.com/embed/${id}.js`;
        embedScript.async = true;
        embedScript.type = 'module';
        document.head.appendChild(embedScript);
    });

    // 3. Inject responsive grid styling for portfolio.html items
    const gridStyle = document.createElement('style');
    gridStyle.innerHTML = `
        .portfolio-grid .portfolio-item {
            width: 100% !important;
            border-radius: 16px;
            overflow: hidden;
            background: #000;
            border: 1px solid rgba(255, 255, 255, 0.06);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .portfolio-grid .portfolio-item:hover {
            transform: translateY(-5px);
            border-color: rgba(245, 158, 11, 0.5);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(245, 158, 11, 0.15);
        }
        .portfolio-grid .portfolio-item wistia-player {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 16px;
        }
    `;
    document.head.appendChild(gridStyle);
})();

const allProjects = [
    // Video 1
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='fqxv163bbz']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/fqxv163bbz/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="fqxv163bbz" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 2
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='hj3b7jyhnn']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/hj3b7jyhnn/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="hj3b7jyhnn" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 3
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='406or55x14']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/406or55x14/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="406or55x14" aspect="1.7777777777777777"></wistia-player>
        `
    }

    // To add a new Wistia video later:
    // 1. Add its media-id to the wistiaMediaIds array at the top of this file.
    // 2. Copy one of the objects above and replace the media-id in both the <style> and <wistia-player>.
];
