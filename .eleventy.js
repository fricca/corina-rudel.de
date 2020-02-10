const moment = require("moment");
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function(eleventyConfig) {
    const defaultLocale = 'de';

    // Copy files to dist
    eleventyConfig
        .addPassthroughCopy("files")
        .addPassthroughCopy(".htaccess")
        .addPassthroughCopy("favicon.ico");

    // Date filter (localized)
    // https://www.webstoemp.com/blog/multilingual-sites-eleventy/
    eleventyConfig.addNunjucksFilter(
        "date",
        function(date, format, locale) {
            locale = locale ? locale : defaultLocale;
            moment.locale(locale);

            return moment(date).format(format);
        }
    );

    // Translation filter
    eleventyConfig.addNunjucksFilter(
        "trans",
        function(string, locale, locales, context) {
            locale = locale ? locale : defaultLocale;
            locales = locales ? locales : null;

            if (locale && locales) {
                return locales[locale][string];
            }

            return string;
        }
    );

    // Markdown filter
    // https://edjohnsonwilliams.co.uk/2019/05/04/replicating-jekyll-s-markdownify-filter-in-nunjucks-with-eleventy/
    const md = require('markdown-it')({
        html: true
    });

    eleventyConfig.addNunjucksFilter(
        'markdown',
        function(string) {
            return md.render(string);
        }
    );

    // Custom sorting by front matter field "sort"
    // collection.myCollection | sorted
    eleventyConfig.addFilter('sorted', function(collection) {
        return collection.sort((a, b) => {
            const sortA = parseInt(a.data.sort, 10);
            const sortB = parseInt(b.data.sort, 10);

            if (sortA > sortB) {
                return 1;
            } else if (sortA < sortB) {
                return -1;
            } else {
                return 0;
            }
        });
    });

    // Add MD5 strings to assets (css, js)
    // https://github.com/mightyplow/eleventy-plugin-cache-buster
    const cacheBusterOptions = {
        outputDirectory: 'dist'
    };
    eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};