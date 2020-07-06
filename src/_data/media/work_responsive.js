module.exports = function () {
    return [
        {
            type: "image",
            dir: "files/images",
            files: [
                {
                    width: 1600,
                    file: "steuerkanzlei-knipping-schwabing.jpg",
                },
                {
                    width: 800,
                    file: "steuerkanzlei-knipping-schwabing_800.jpg",
                },
            ],
            resp_sizes: "(max-width: 1280px) 100vw, 1280px",
            size: [1600, 1000],
            lazy: true,
            alt: {
                de:
                    "Screenshot: Minimalistischer Online-Auftritt für Steuerberater Knipping",
                en:
                    "Screenshot: Minimalistic web site for tax consultant Knipping",
            },
            caption: {
                text: {
                    de: `
                        Für die Steuerkanzlei Paul H.P. Knipping in München habe ich basierend auf einem bestehenden Logo und Briefpapier einen responsiven Online-Auftritt umgesetzt.
                    `,
                    en: `
                        For the tax consulting agency Paul H.P. Knipping in Munich, I developed a small responsive web site based on the existing logo design and letterhead.
                    `,
                },
                source: {
                    label: "screenshot_source",
                    text: {
                        de: "steuerkanzlei-knipping.de",
                        en: "steuerkanzlei-knipping.de",
                    },
                    url: "https://www.steuerkanzlei-knipping.de",
                },
            },
        },
        {
            type: "image",
            dir: "files/images",
            files: [
                {
                    width: 1600,
                    file: "katja-kirste-profile.jpg",
                },
                {
                    width: 800,
                    file: "katja-kirste-profile_800.jpg",
                },
            ],
            resp_sizes: "(max-width: 1280px) 100vw, 1280px",
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: "Screenshot: Responsive Online-Portfolio von Katja Kirste",
                en: "Screenshot: Responsive online portfolio of Katja Kirste",
            },
            caption: {
                text: {
                    de: `
                        Für die Kommunikationberaterin Katja Kirste habe ich eine Portfolio-Website auf Basis von Drupal umgesetzt. Layout und Typografie sind in Zusammenarbeit entstanden. 
                    `,
                    en: `
                        For Katja Kirste, an communications advisor, I have built an online portfolio based on Drupal. Layout and typography were developed in cooperation.
                    `,
                },
                source: {
                    label: "screenshot_source",
                    text: {
                        de: "katjakirste.de",
                        en: "katjakirste.de",
                    },
                    url: "https://katjakirste.de/",
                },
            },
        },
        {
            type: "image",
            dir: "files/images",
            files: [
                {
                    width: 1600,
                    file: "moewo.jpg",
                },
                {
                    width: 800,
                    file: "moewo_800.jpg",
                },
            ],
            resp_sizes: "(max-width: 1280px) 100vw, 1280px",
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: "Screenshot: Responsive Website für moewo.de",
                en: "Screenshot: Respnsive web site for moewo.de",
            },
            caption: {
                text: {
                    de: `
                         moewo.de, ein Portal zur Vermittlung von möblierten Wohnungen in Bayreuth, habe ich mit Drupal umgesetzt. Auch Konzept und Layout waren Teil des Auftrags. Die Website habe ich nachträglich responsiv angepasst. 
                    `,
                    en: `
                        For moewo.de&mdash;an agency for furnished apartements in Bayreuth, Germany&mdash;I was responsible for conception, design and development (with Drupal). The responsive layout was integrated some years later.
                    `,
                },
                source: {
                    label: "screenshot_source",
                    text: {
                        de: "moewo.de",
                        en: "moewo.de",
                    },
                    url: "https://moewo.de/",
                },
            },
        },
    ];
};
