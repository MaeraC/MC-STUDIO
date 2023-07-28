
function isItemInView(item) {
    const rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


    const itemsRef = document.getElementById('timeline');

    function handleScroll() {
        const items = itemsRef.querySelectorAll("li");
        let maxProgress = 0;

        for (let i = 0; i < items.length; i++) {
            if (isItemInView(items[i])) {
                const progress = i / (items.length - 1);

                if (progress > maxProgress) {
                    maxProgress = progress;
                }

                items[i].classList.add('show');
            }
        }

        // eslint-disable-next-line
        const [timelineProgress, setTimelineProgress] = [0, maxProgress];
    }

    function init() {
        handleScroll();
        window.addEventListener("load", handleScroll);
        window.addEventListener("resize", handleScroll);
        window.addEventListener("scroll", handleScroll);
    }

    init()



