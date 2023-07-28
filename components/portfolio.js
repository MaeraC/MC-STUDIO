
    let figuresRef = [];

    function fetchProjects() {
        fetch('portfolio.json')
            .then(response => response.json())
            .then(data => createFigures(data))
            .catch(error => console.error('Error fetching projects:', error));
    }

    function handleScroll() {
        const scrolledFromTop = window.pageYOffset + window.innerHeight;

        figuresRef.forEach(figure => {
            const distanceFromTop = figure.offsetTop;

            if (scrolledFromTop >= distanceFromTop + 50) {
                const delaiAnim = figure.getAttribute('data-delai');
                setTimeout(() => {
                    figure.style.top = '0';
                    figure.style.opacity = '1';
                }, delaiAnim);
            }
        });
    }

    function createFigure(project, index) {
        const figure = document.createElement('figure');
        figure.classList.add('box-shadow', 'fade-in');
        figure.setAttribute('data-delai', index * 200);

        const link = document.createElement('a');
        link.setAttribute('href', project.link);
        link.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', project.image);
        img.setAttribute('alt', project.title);

        link.appendChild(img);
        figure.appendChild(link);

        return figure;
    }

    function createFigures(projects) {
        const gallery = document.getElementById('gallery');
        figuresRef = projects.map((project, index) => {
            const figure = createFigure(project, index);
            gallery.appendChild(figure);
            return figure;
        });

        handleScroll();
    }

    function init() {
        fetchProjects();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }

    init();


