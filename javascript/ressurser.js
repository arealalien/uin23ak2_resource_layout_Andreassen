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

let CatEl, CatEl2, TextEl, SourceSectionEl, SourceListEl, SourceTitleEl1, SourceTitleEl1Link, SourceTitleEl2, SourceTitleEl2Link, SourceTitleEl3, SourceTitleEl3Link;

function createElements(item) {
    CatEl = document.createElement('button');
    if (item.category === "HTML") {
        CatEl.className = "navbar-button navbar-button-active";
    } else {
        CatEl.className = "navbar-button";
    }
    CatEl.innerHTML = item.category;
    CatEl2 = document.createElement('h3');
    CatEl2.className = "output-title";
    CatEl2.innerHTML = item.category;
    TextEl = document.createElement('p');
    TextEl.className = "output-text";
    TextEl.innerHTML = item.text;

    SourceSectionEl = document.createElement("section");
    if (item.category === "HTML") {
        SourceSectionEl.className = "output-section-active output-section " + item.category.replace(/\s+/g, '-').toLowerCase();
    } else {
        SourceSectionEl.className = "output-section " + item.category.replace(/\s+/g, '-').toLowerCase();
    }

    SourceListEl = document.createElement('ul');

    SourceTitleEl1 = document.createElement('li');
    SourceTitleEl1Link = document.createElement('a');
    SourceTitleEl1Link.className = "output-link";
    SourceTitleEl1Link.innerHTML = item.sources[0].title;
    SourceTitleEl1Link.setAttribute('href', item.sources[0].url);

    SourceTitleEl2 = document.createElement('li');
    SourceTitleEl2Link = document.createElement('a');
    SourceTitleEl2Link.className = "output-link";
    SourceTitleEl2Link.innerHTML = item.sources[1].title;
    SourceTitleEl2Link.setAttribute('href', item.sources[1].url);

    SourceTitleEl3 = document.createElement('li');
    SourceTitleEl3Link = document.createElement('a');
    SourceTitleEl3Link.className = "output-link";
    SourceTitleEl3Link.innerHTML = item.sources[2].title;
    SourceTitleEl3Link.setAttribute('href', item.sources[2].url);

    document.getElementById("navbar").appendChild(CatEl);
    document.getElementById("ressurs-output").appendChild(SourceSectionEl)
    SourceSectionEl.appendChild(CatEl2);
    SourceSectionEl.appendChild(TextEl);

    SourceSectionEl.appendChild(SourceListEl);

    SourceListEl.appendChild(SourceTitleEl1);
    SourceTitleEl1.appendChild(SourceTitleEl1Link);
    SourceListEl.appendChild(SourceTitleEl2);
    SourceTitleEl2.appendChild(SourceTitleEl2Link);
    SourceListEl.appendChild(SourceTitleEl3);
    SourceTitleEl3.appendChild(SourceTitleEl3Link);
}

resources.map(createElements);