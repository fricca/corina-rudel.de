module.exports = function() {
    return [
        {
            type: 'image',
            dir: 'files/images',
            files: [
                {
                    width: 1600,
                    file: 'team-andro-gallery-start-resp.jpg'
                },
                {
                    width: 800,
                    file: 'team-andro-gallery-start-resp_800.jpg'
                },
            ],
            resp_sizes: '(max-width: 1280px) 90vw, 1280px',
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: 'Screenshots der Team-Andro-Galerie, mobil und Desktop',
                en: 'Screenshots in mobile and desktop devices of the home page of the Team-Andro gallery',
            },
            caption: {
                text: {
                    de: `
                        Auf der Startseite der Galerie werden oben die neuesten Bilderalben in einem Raster dargestellt, darunter befinden sich kategorisierte Listen aller Alben.
                    `,
                    en: `
                        The home page of the gallery shows the latest photo albums in a grid display at the top and categorized lists of all recent albums below
                    `,
                },
                source: {
                    label: 'screenshot_source',
                    text: {
                        de: 'Startseite der Team-Andro-Galerie',
                        en: 'Home page of the Team-Andro gallery',
                    },
                    url: 'https://www.team-andro.com/gallery/',
                }
            }
        },
        {
            type: 'video',
            dir: 'files/videos',
            files: [
                {
                    type: 'video/webm',
                    file: 'team-andro-gallery-desktop-edit.webm',
                },
                {
                    type: 'video/mp4',
                    file: 'team-andro-gallery-desktop-edit.mp4',
                },
            ],
            poster: {
                dir: 'files/images',
                file: 'team-andro-gallery-desktop-edit.jpg',
            },
            size: [1600, 1000],
            caption: {
                text: {
                    de: `
                        Das Video zeigt zunächst das Bearbeiten eines Bilderalbums am Desktop und endet mit der Vollbild-Ansicht einiger Bilder.
                    `,
                    en: `
                        The video shows the editing of an image album on a desktop computer and ends with the fullscreen display of some images.
                    `,
                },
            }
        },
        {
            type: 'video',
            dir: 'files/videos',
            files: [
                {
                    type: 'video/webm',
                    file: 'team-andro-gallery-mobile-edit-fullscreen.webm',
                },
                {
                    type: 'video/mp4',
                    file: 'team-andro-gallery-mobile-edit-fullscreen.mp4',
                },
            ],
            poster: {
                dir: 'files/images',
                file: 'team-andro-gallery-mobile-edit-fullscreen.jpg',
            },
            size: [1600, 1000],
            caption: {
                text: {
                    de: `
                        Das Video beginnt mit dem Bearbeiten und Sortieren von Bildern auf einem Smartphone und zeigt dann die komfortable,  touch-freundliche Vollbildansicht. Das Smartphone wurde während des Videos gedreht um die Vollbildansicht im Querformat zu demonstrieren.
                    `,
                    en: `
                        This video starts with editing and sorting of images on a mobile phone and then shows the touch-friendly fullscreen mode for comfortable image viewing. During the video, the smartphone deliberately has been rotated from portrait to landscape view.
                    `,
                },
            }
        },
    ];
};