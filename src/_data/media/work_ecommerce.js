module.exports = function() {
    return [
        {
            type: 'image',
            dir: 'files/images',
            files: [
                {
                    width: 1600,
                    file: 'fitmart-product-page.jpg'
                },
                {
                    width: 800,
                    file: 'fitmart-product-page_800.jpg'
                },
            ],
            resp_sizes: '(max-width: 1280px) 100vw, 1280px',
            size: [1600, 1000],
            lazy: true,
            alt: {
                de: 'Screenshot: Fitmart-Shop - Produktseite',
                en: 'Screenshot: Fitmart shop - product page',
            },
            caption: {
                text: {
                    de: `
                        Der Fitmart-Shop hat ein eigenentwickeltes responsives Layout erhalten, das Beispiel zeigt die Produkt-Detailseite. 
                    `,
                    en: `
                        For the Fitmart online shop, a custom responsive Layout has been developed. The picture shows an example of a product page.
                    `,
                },
                source: {
                }
            }
        },
    ];
};