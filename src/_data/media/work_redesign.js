module.exports = function() {
    return [
        {
            type: 'image',
            dir: 'files/images',
            files: [
                {
                    width: 1600,
                    file: 'team-andro-styleguide.jpg'
                },
                {
                    width: 800,
                    file: 'team-andro-styleguide_800.jpg'
                },
            ],
            resp_sizes: '(max-width: 1280px) 100vw, 1280px',
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: 'Screenshot: Team-Andro-Styleguide - Beispiel Textformatierung',
                en: 'Screenshot: Team-Andro Styleguide - Text Formatting',
            },
            caption: {
                text: {
                    de: `
                        Der Team-Andro-Styleguide ist Dokumentation von Gestaltungsvorgaben und Code-Modulen, hier am Beispiel der Standard-Textformatierungen. 
                    `,
                    en: `
                        The Team-Andro styleguide serves as documentation of design guidelines and code modules, the picture shows an example of the default text formatting.
                    `,
                },
                source: {
                }
            }
        },
    ];
};