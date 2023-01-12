import './style.css';

const portfolioItemsDiv: HTMLDivElement | null = document.querySelector('#portfolioItems');
const cvThumbnail: HTMLImageElement | null = document.querySelector('#cvThumbnail');
const closeCvModalBtn: HTMLButtonElement | null = document.querySelector('#closeCvModalBtn');
const cvModal: HTMLDivElement | null = document.querySelector('#cvModal');

function showCvModal() {
  if (cvModal != null) {
    cvModal.classList.remove('hidden');
  }
}

function closeCvModal() {
  if (cvModal != null) {
    cvModal.classList.add('hidden');
  }
}

const portfolioItems = [
  {
    title: 'Doer',
    description: 'My todo list app. Made with Tailwind and TypeScript.',
    imageUrl: '/img/Doer.png',
    imgAlt: 'image of my todo list app',
    link: 'https://redicholas.github.io/Doer/', 
  },
  {
    title: 'KaffeHornet',
    description: 'This is a group project for Medieinstitutet. <br> A semi-functional webshop.',
    imageUrl: './img/kaffeHornet.png',
    imgAlt: 'image of my coffee corner website',
    link: 'https://redicholas.github.io/KaffeHornet/',
  },
  {
    title: 'To the Moon',
    description: 'My first project for Medieinstitutet. HTML & CSS',
    imageUrl: '../img/to-the-moon.png',
    imgAlt: 'image of my space ventures website',
    link: 'https://github.com/Redicholas/space-ventures',
  },
];

function showPortfolioItems() {
  portfolioItems.forEach((portfolioItem) => {
    const { title, description, imageUrl, imgAlt, link } = portfolioItem;
    if (portfolioItemsDiv != null) { 
      portfolioItemsDiv.innerHTML += `
      <div class="rounded-xl mb-10 p-8 shadow hover:shadow-none shadow-black transition-all 
      bg-gradient-to-t from-middleGreen text-sm border border-transparentBlack">
          <a
            href="${link}"
            loading="lazy"
            title="${title}"
            target="_blank"
            class=""
          >
          <img src="${imageUrl}" alt="${imgAlt}" 
          class="rounded-xl m-auto mb-8 w-full"
          height="100" width="100">
        </a>
        <p class="text-center">${description}</p>
      </div>
      `;
    }});
}

showPortfolioItems();
cvThumbnail?.addEventListener('click', showCvModal);
closeCvModalBtn?.addEventListener('click', closeCvModal);