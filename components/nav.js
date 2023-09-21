window.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".open-burger");
    const menu = document.querySelector(".nav")
    const menuList = document.querySelector(".nav ul")
    let isMenuOpen = false

    menuBtn.style.display = "none"

    function OpenMenuBurger() {
        const menuBurger = document.createElement("ul")
        const burgerItem1 = document.createElement("li")
        const burgerItem2 = document.createElement("li")
        const burgerItem3 = document.createElement("li")
        const burgerItem4 = document.createElement("li")
        const burgerItem5 = document.createElement("li")
        const burgerItem6 = document.createElement("li")
        const closeBtn = document.createElement("i")

        burgerItem1.innerHTML = "<a href='https://mc-studio-dev.fr/index.html/#services'>Mes services</a>"
        burgerItem2.innerHTML = "<a href='https://mc-studio-dev.fr/index.html/#avantages'>Mes atouts</a>"
        burgerItem2.innerHTML = "<a href='https://mc-studio-dev.fr/index.html/#garanties'>Mes garanties</a>"
        burgerItem3.innerHTML = "<a href='https://mc-studio-dev.fr/index.html/#deroulement'>Déroulement</a>"
        burgerItem4.innerHTML = "<a href='https://mc-studio-dev.fr/index.html/#realisations'>Mes réalisations</a>"
        burgerItem5.innerHTML = "<a href='https://mc-studio-dev.fr/pages/about.html'>À propos</a>"

        menuBurger.classList.add("menu2")
        closeBtn.classList.add("fas", "fa-times", "close-menu")
        burgerItem1.classList.add("link")
        burgerItem2.classList.add("link")
        burgerItem3.classList.add("link")
        burgerItem4.classList.add("link")
        burgerItem5.classList.add("link")
        burgerItem6.classList.add("link")

        closeBtn.addEventListener("click", () => {
            menuBurger.style.display = "none"
        })

        menu.appendChild(menuBurger)
        menuBurger.appendChild(burgerItem1)
        menuBurger.appendChild(burgerItem2)
        menuBurger.appendChild(burgerItem3)
        menuBurger.appendChild(burgerItem4)
        menuBurger.appendChild(burgerItem5)
        menuBurger.appendChild(burgerItem6)
        menuBurger.appendChild(closeBtn)

        isMenuOpen = true
    }

    function closeMenuBurger() {
        if (isMenuOpen) {
            const menuBurger = menu.querySelector(".menu2")
            if (menuBurger) {
                menuBurger.remove()
            }
            //menuList.style.display = "flex"; // Afficher le menu complet
            isMenuOpen = false; // Mettre à jour l'état du menu (fermé)
        }
    }

    function checkWindowSize() {
        if (window.innerWidth <= 1130) {
            menuList.style.display = "none";
            menuBtn.style.display = "flex";
        } else {
            closeMenuBurger();
            menuBtn.style.display = "none";
            //menuList.style.display = "flex";
        }
        if (window.innerWidth <= 700) {
           const fleches = document.querySelector(".landing-page img")
           fleches.style.display = "none"
        } else {
            const fleches = document.querySelector(".landing-page img")
           fleches.style.display = "block"
        }
    }

    // Vérifier la largeur de la fenêtre lors du chargement initial
    checkWindowSize();

    // Mettre à jour l'état du menu lorsqu'on redimensionne la fenêtre
    window.addEventListener("resize", () => {
        checkWindowSize();
    });

    // Ajouter un événement de clic sur le bouton du menu burger
    menuBtn.addEventListener("click", () => {
        if (isMenuOpen) {
            closeMenuBurger();
        } else {
            OpenMenuBurger();
        }
    });
});