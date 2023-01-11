import './style.css';

const portfolioItemsDiv: HTMLDivElement | null = document.querySelector('#portfolioItems');

const portfolioItems = [
  {
    title: 'Doer',
    description: 'My todo list app. Made with Tailwind and TypeScript.',
    imageUrl: '../public/img/Doer.png',
    imgAlt: 'image of my todo list app',
    link: 'https://redicholas.github.io/Doer/', 
  },
  {
    title: 'KaffeHornet',
    description: 'This is a group project for Medieinstitutet. <br> A semi-functional webshop.',
    imageUrl: '../public/img/kaffeHornet.png',
    imgAlt: 'image of my coffee corner website',
    link: 'https://redicholas.github.io/KaffeHornet/',
  },
  {
    title: 'To the Moon',
    description: 'My first project for Medieinstitutet. HTML & CSS',
    imageUrl: '../public/img/to-the-moon.png',
    imgAlt: 'image of my space ventures website',
    link: 'https://github.com/Redicholas/space-ventures',
  },
];

function showPortfolioItems() {
  portfolioItems.forEach((portfolioItem) => {
    const { title, description, imageUrl, imgAlt, link } = portfolioItem;
    if (portfolioItemsDiv != null) { 
      portfolioItemsDiv.innerHTML += `
      <div class="rounded-xl mb-10 p-8 bg-gradient-to-t from-middleGreen to-darkGreen hover:bg-gradient-to-b text-sm">
          <a
            href="${link}"
            loading="lazy"
            title="${title}"
            target="_blank"
            class=""
          >
          <img src="${imageUrl}" alt="${imgAlt}" class="rounded-xl m-auto mb-8 w-full">
        </a>
        <p class="text-center">${description}</p>
      </div>
      `;
    }});
}

showPortfolioItems();
