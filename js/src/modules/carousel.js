const Carousel = (options) => {
    const defaults = {
        'selector': {
            'carousel': '.carousel__container',
        },
        'classes': {
            'overflow': 'is-overflown',
        }
    };

    const config = Object.assign({}, defaults, options);
    const carousels = document.querySelectorAll(config.selector.carousel);

    /**
     * Set class as overflow indicator
     * 
     * @param node el
     */
    const setOverflowIndicator = (el) => {
        el.classList.toggle(config.classes.overflow, el.clientWidth < el.scrollWidth);
    };

    for (const carousel of carousels) {

        // Initially
        setOverflowIndicator(carousel);

        // Update on resize
        // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
        // might change, e.g if different amount of items/page is set for larger screens
        if ('ResizeObserver' in window) {
            const observer = new ResizeObserver(() => {
                setOverflowIndicator(carousel);
            });

            observer.observe(carousel);
        }
    }
}

export default Carousel;