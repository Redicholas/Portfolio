import './style.css';

const portfolioItemsDiv: HTMLDivElement | null = document.querySelector('#portfolioItems');
const cvThumbnail: HTMLImageElement | null = document.querySelector('#cvThumbnail');
const closeCvModalBtn: HTMLButtonElement | null = document.querySelector('#closeCvModalBtn');
const cvModal: HTMLDivElement | null = document.querySelector('#cvModal');

const portfolioItems = [
  {
    title: 'Doer',
    description: 'HTML | Tailwind CSS | TypeScript | Vite',
    imageUrl: '/img/Doer.png',
    imgAlt: 'image of my todo list app',
    link: 'https://redicholas.github.io/Doer/', 
  },
  {
    title: 'KaffeHörnet',
    description: 'HTML | Sass | JavaScript | Vite',
    imageUrl: './img/kaffeHornet.png',
    imgAlt: 'image of my coffee corner website',
    link: 'https://redicholas.github.io/KaffeHornet/',
  },
  {
    title: 'To the Moon',
    description: 'HTML | CSS',
    imageUrl: '../img/to-the-moon.png',
    imgAlt: 'image of my space ventures website',
    link: 'https://github.com/Redicholas/space-ventures',
  },
];

function showCvModal() {
  if (cvModal != null) {
    cvModal.classList.replace('hidden', 'flex');
  }
}

function closeCvModal() {
  if (cvModal != null) {
    cvModal.classList.replace('flex', 'hidden');
  }
}

function showPortfolioItems() {
  portfolioItems.forEach((portfolioItem) => {
    const { title, description, imageUrl, imgAlt, link } = portfolioItem;
    if (portfolioItemsDiv != null) { 
      portfolioItemsDiv.innerHTML += `
      <div class="rounded-xl max-w-md mx-auto mb-10 p-4 border border-white sm:hover:shadow-none sm:hover:bg-lightGrey transition-all 
       neumorphic">
        <h3 class="text-center mb-2 text-2xl h-16">${title}</h3>
          <a
            href="${link}"
            loading="lazy"
            title="${title}"
            target="_blank"
            class=""
          >
          <img src="${imageUrl}" alt="${imgAlt}" 
          class="rounded-xl m-auto mb-4 w-full max-w-xs border border-transparentBlack"
          height="100" width="100">
        </a>
        <p class="text-center text-sm">${description}</p>
      </div>
      `;
    }});
}

const hiddenText = document.querySelectorAll('.textAppear');
const textObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('invisible');
      entry.target.classList.add('tracking-in-expand');
    }
  });
});

hiddenText.forEach((element) => {
  textObserver.observe(element);
});

showPortfolioItems();
cvThumbnail?.addEventListener('click', showCvModal);
closeCvModalBtn?.addEventListener('click', closeCvModal);