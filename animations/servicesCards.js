
    const cards = document.querySelectorAll(".appear");
    const faceImg = document.querySelectorAll(".face-image")

    function handleScroll() {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;

        cards.forEach((card) => {
            const distanceFromTop = card.offsetTop;
            const delaiAnim = card.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + 50) {
                setTimeout(() => {
                    card.style.top = "0"
                    card.style.opacity = "1"
                
                }, delaiAnim)
            }
        })
    }

    function mobileVersion() {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;

        faceImg.forEach((img) => {
            const distanceFromTop = img.offsetTop
            const delaiAnim = img.getAttribute("data-delai")

            if (scrolledFromTop >= distanceFromTop + 50 && window.innerWidth <= 978) {
                setTimeout(() => {
                    img.style.height = "60px"
                }, delaiAnim)
            }
        })
    }

    function init() {
        handleScroll()
        mobileVersion()
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', mobileVersion)
    }

    init()