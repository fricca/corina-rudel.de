module.exports = {
    locales: [
        {
            short: 'de',
            text: 'Deutsch',
            default: true
        },
        {
            short: 'en',
            text: 'English',
            default: false
        },
    ],

    person: {
        name: "Corina Rudel",
        img: {
            url: "/files/images/corina-rudel.jpg",
            alt: {
                de: "",
                en: ""
            }
        },
        title: {
            de: "Webentwicklerin mit Fokus auf dem Frontend",
            en: "Web Developer with a Focus on the Front-End"
        },
        location: {
            de: "in München",
            en: "Munich, Germany"
        },
        contact: [
            {
                type: "email",
                text: "info@corina-rudel.de",
                protocol: "mailto:",
                url: "info@corina-rudel.de"
            },
            {
                type: "telephone",
                text: "+49 89 18006094",
                protocol: "tel:",
                url: "+498918006094"
            },
            // {
            //     type: "website",
            //     text: "corina-rudel.de",
            //     protocol: "https://",
            //     url: "corina-rudel.de"
            // },
            // {
            //     type: "linkedin",
            //     text: "linkedin.com/in/corina-rudel",
            //     protocol: "https://",
            //     url: "linkedin.com/in/corina-rudel/"
            // }
        ]
    },

    legal_notice: {
        name: "Corina Rudel",
        street: {
            de: "Nymphenburger Straße 119",
            en: "Nymphenburger Strasse 119"
        },
        town: {
            de: "80636 München",
            en: "80636 Munich, Germany"
        }
    },

    credit_urls: {
        "Grunt": 'https://gruntjs.com/',
        "Sass": 'https://sass-lang.com/',
        "Webpack": 'https://webpack.js.org/',
        "Eleventy": 'https://www.11ty.dev/'
    }
}