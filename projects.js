// --- Projects Database (Wistia Portfolio) ---

// Dynamically load Wistia core & media scripts so <wistia-player> works seamlessly with innerHTML
(function loadWistiaScripts() {
    const wistiaMediaIds = [
        'fqxv163bbz',
        'hj3b7jyhnn',
        '406or55x14',
        'uni6my2jzd',
        '21k7u1z5i9',
        'frzqz0a5fa',
        'y43pz9lezv',
        'bbftrbwlvt',
        'k7hxbxu0xg',
        '4k5p6sjhd7',
        '5oswhc6zhj',
        'rmktfrlg68',
        'gmv249blvf'
    ];

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
    },

    // Video 4
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='uni6my2jzd']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/uni6my2jzd/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="uni6my2jzd" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 5
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='21k7u1z5i9']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/21k7u1z5i9/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="21k7u1z5i9" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 6
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='frzqz0a5fa']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/frzqz0a5fa/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="frzqz0a5fa" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 7
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='y43pz9lezv']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/y43pz9lezv/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="y43pz9lezv" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 8
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='bbftrbwlvt']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/bbftrbwlvt/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="bbftrbwlvt" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 9
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='k7hxbxu0xg']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/k7hxbxu0xg/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 47.5%;
                }
            </style>
            <wistia-player media-id="k7hxbxu0xg" aspect="2.1052631578947367"></wistia-player>
        `
    },

    // Video 10
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='4k5p6sjhd7']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/4k5p6sjhd7/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="4k5p6sjhd7" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 11
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='5oswhc6zhj']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5oswhc6zhj/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="5oswhc6zhj" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 12
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='rmktfrlg68']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/rmktfrlg68/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="rmktfrlg68" aspect="1.7777777777777777"></wistia-player>
        `
    },

    // Video 13
    {
        categories: ['all', 'youtube'],
        type: 'horizontal',
        content: `
            <style>
                wistia-player[media-id='gmv249blvf']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gmv249blvf/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                }
            </style>
            <wistia-player media-id="gmv249blvf" aspect="1.7777777777777777"></wistia-player>
        `
    },
  // Video 14
{
    categories: ['all', 'youtube'],
    type: 'horizontal',
    content: `
        <style>
            wistia-player[media-id='liotij8p16']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/liotij8p16/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top: 56.25%; 
            }
        </style>
        <wistia-player media-id="liotij8p16" aspect="2.341463414634146"></wistia-player>
    `
},

// Video 15
{
    categories: ['all', 'youtube'],
    type: 'horizontal',
    content: `
        <style>
            wistia-player[media-id='qhwc9gl51m']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qhwc9gl51m/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top: 56.25%; 
            }
        </style>
        <wistia-player media-id="qhwc9gl51m" aspect="1.7777777777777777"></wistia-player>
    `
},
    // Video 16
{
    categories: ['all', 'youtube'],
    type: 'horizontal',
    content: `
        <style>
            wistia-player[media-id='hd9m9z4vym']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/hd9m9z4vym/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
            }
        </style>
        <wistia-player media-id="hd9m9z4vym" aspect="1.7777777777777777"></wistia-player>
    `
},

// Video 17
{
    categories: ['all', 'youtube'],
    type: 'horizontal',
    content: `
        <style>
            wistia-player[media-id='cstgmadioi']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/cstgmadioi/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
            }
        </style>
        <wistia-player media-id="cstgmadioi" aspect="1.7777777777777777"></wistia-player>
    `
},

// Video 18
{
    categories: ['all', 'youtube'],
    type: 'horizontal',
    content: `
        <style>
            wistia-player[media-id='dbbn6z6jjk']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/dbbn6z6jjk/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
            }
        </style>
        <wistia-player media-id="dbbn6z6jjk" aspect="1.7777777777777777"></wistia-player>
    `
},

// Video 19
{
    categories: ['all', 'youtube'],
    type: 'horizontal',
    content: `
        <style>
            wistia-player[media-id='vi31qw5ax5']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/vi31qw5ax5/swatch');
                display: block;
                filter: blur(5px);
                padding-top: 56.25%;
            }
        </style>
        <wistia-player media-id="vi31qw5ax5" aspect="1.7777777777777777"></wistia-player>
    `
},
];
