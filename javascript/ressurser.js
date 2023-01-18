const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

let CatEl, SourceSectionEl;

function createElements(item) {
    CatEl = document.createElement('button');
    if (item.category === "HTML") {
        CatEl.className = "navbar-button navbar-button-active";
    } else {
        CatEl.className = "navbar-button";
    }
    SourceSectionEl = document.createElement("section");
    if (item.category === "HTML") {
        SourceSectionEl.className = "output-section-active output-section " + item.category.replace(/\s+/g, '-').toLowerCase();
    } else {
        SourceSectionEl.className = "output-section " + item.category.replace(/\s+/g, '-').toLowerCase();
    }

    CatEl.innerHTML = `${item.category}`;

    SourceSectionEl.innerHTML = `<h3 class="output-title">${item.category}</h3>
                                 <p class="output-text">${item.text}</p>
                                 <ul>
                                     <li><a class="output-link" href="${item.sources[0].url}">${item.sources[0].title}</a></li>
                                     <li><a class="output-link" href="${item.sources[1].url}">${item.sources[1].title}</a></li>
                                     <li><a class="output-link" href="${item.sources[2].url}">${item.sources[2].title}</a></li>
                                 </ul>`;

    document.getElementById("navbar").appendChild(CatEl);
    document.getElementById("ressurs-output").appendChild(SourceSectionEl);
}

resources.map(createElements);

const navButtons = document.querySelectorAll(".navbar-button");

navButtons.forEach(function(item) {
    item.addEventListener("click", function() {
        if (item.classList.contains("navbar-button-active")) {

        } else {
            let buttonName = this.innerHTML.replace(/\s+/g, '-').toLowerCase();

            let activeButtons = document.querySelectorAll(".navbar-button-active");

            activeButtons.forEach(function(item) {
                item.classList.remove("navbar-button-active");
            });

            let activeSection = document.querySelectorAll(".output-section-active");

            activeSection.forEach(function(item) {
                item.classList.remove("output-section-active");
            });

            item.classList.add("navbar-button-active");
            document.getElementsByClassName(buttonName)[0].classList.add("output-section-active");
        }
    });
});