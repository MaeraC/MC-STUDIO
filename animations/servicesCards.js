
    const cards = document.querySelectorAll(".appear");

    function handleScroll() {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;

        cards.forEach((card) => {
            const distanceFromTop = card.offsetTop;
            const delaiAnim = card.getAttribute("data-delai");

            if (scrolledFromTop >= distanceFromTop + 50) {
                setTimeout(() => {
                    card.style.top = "0";
                    card.style.opacity = "1";
                }, delaiAnim);
            }
        });
    }

    function init() {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    }

    init()