module.exports = function() {
    return [
        {
            type: 'image',
            dir: 'files/images',
            files: [
                {
                    width: 1600,
                    file: 'team-andro-tube-start-resp.jpg'
                },
                {
                    width: 800,
                    file: 'team-andro-tube-start-resp_800.jpg'
                },
            ],
            resp_sizes: '(max-width: 1280px) 90vw, 1280px',
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: 'Screenshots der Startseite der Team-Andro-Videos',
                en: 'Screenshots of the home page of the Team-Andro videos',
            },
            caption: {
                text: {
                    de: `
                        Auf der Startseite der Video-Plattform befinden sich ausgewählte Videos in einem „Carousel“, und Listen von neuen und hervorgehobenen Videos werden in einem Raster angezeigt.
                    `,
                    en: `
                        The home page of the video platform shows some hand-selected videos in a carousel and lists of new and featured videos in a grid.
                    `,
                },
                source: {
                    label: 'screenshot_source',
                    text: {
                        de: 'Startseite Team-Andro-Videos',
                        en: 'Home page Team-Andro videos',
                    },
                    url: 'https://www.team-andro.com/tube/',
                }
            }
        },
        {
            type: 'image',
            dir: 'files/images',
            files: [
                {
                    width: 1600,
                    file: 'team-andro-tube-video-resp.jpg'
                },
                {
                    width: 800,
                    file: 'team-andro-tube-video-resp_800.jpg'
                },
            ],
            resp_sizes: '(max-width: 1280px) 90vw, 1280px',
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: 'Screenshots einer Video-Seite der Team-Andro-Videos',
                en: 'Screenshots of a video page of Team-Andro videos',
            },
            caption: {
                text: {
                    de: `
                        Die Videos werden in einem angepassten Player basierend auf video.js abgespielt. Die Besucher können Videos kommentieren und bewerten.
                    `,
                    en: `
                        The videos are displayed in a customized player based on video.js. Users can leave comments and rate the video.
                    `,
                },
                source: {
                    label: 'screenshot_source',
                    text: {
                        de: 'Videoseite der Team-Andro-Videos',
                        en: 'Video page of Team-Andro videos',
                    },
                    url: 'https://www.team-andro.com/tube/v/18657/',
                }
            }
        },
        {
            type: 'image',
            dir: 'files/images',
            files: [
                {
                    width: 1600,
                    file: 'team-andro-tube-profile-resp.jpg'
                },
                {
                    width: 800,
                    file: 'team-andro-tube-profile-resp_800.jpg'
                },
            ],
            resp_sizes: '(max-width: 1280px) 90vw, 1280px',
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: 'Screenshots eines Benutzerprofils der Team-Andro-Videos',
                en: 'Screenshots of a user profile page of Team-Andro videos',
            },
            caption: {
                text: {
                    de: `
                        Für jeden User gibt es eine eigene Profil-Seite, auf der die eigenen Videos und Playlists bearbeitet werden können. 
                    `,
                    en: `
                        Each user has their own profile page with all their own videos and playlists they can edit when logged in.
                    `,
                },
                source: {
                    label: 'screenshot_source',
                    text: {
                        de: 'Benutzerprofil der Team-Andro-Videos',
                        en: 'Profile page of Team-Andro videos',
                    },
                    url: 'https://www.team-andro.com/tube/profil/301258/',
                }
            }
        },
    ];
};