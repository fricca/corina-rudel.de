const ScrollIndicator = (options) => {
    const defaults = {
        'selector': {
            'root': '.progress-indicator'
        },
        'vars': {
            'progress': '--reading-progress'
        }
    };

    const config = Object.assign({}, defaults, options);
    const root = document.querySelector(config.selector.root);

    /**
     * Calculate scroll progress
     *
     * @returns double
     */
    const calcProgress = () => {
        const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const winHeight = window.innerHeight;
        const totalHeight = root.offsetHeight;
        const scrollHeight = totalHeight - winHeight;

        return (top / scrollHeight);
    };

    /**
     * Update custom property with progress value
     * 
     * @param double progress
     */
    const updateProgress = () => {
        const progress = calcProgress();

        requestAnimationFrame(() => {
            root.style.setProperty(config.vars.progress, progress);
        });
    };

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    // Initially set progress after loading
    updateProgress();
}

export default ScrollIndicator;