import "./style.css";

const html = document.documentElement;
const darkLightBtn: HTMLButtonElement | null = document.querySelector("#darkLight");
const portfolioItemsDiv: HTMLDivElement | null = document.querySelector("#portfolioItems");
const cvThumbnail: HTMLImageElement | null = document.querySelector("#cvThumbnail");
const closeCvModalBtn: HTMLButtonElement | null = document.querySelector("#closeCvModalBtn");
const cvModal: HTMLDivElement | null = document.querySelector("#cvModal");

const portfolioItems = [
  {
    title: "Pizzaleria",
    description: "Team project, code a given design. <br /> HTML | Sass | JavaScript",
    imageUrl: "/img/pizzaleria.png",
    imgAlt: "image of our pizza website",
    repoLink: "https://github.com/Medieinstitutet/fed22d-grafiska-verktyg-korsbarstomaterna",
    liveLink: "https://medieinstitutet.github.io/fed22d-grafiska-verktyg-korsbarstomaterna/",
  },
  {
    title: "Doer",
    description: "Solo project, todo-list. <br /> HTML | Tailwind | TypeScript",
    imageUrl: "/img/Doer.png",
    imgAlt: "image of my todo list app",
    repoLink: "https://github.com/Redicholas/Doer",
    liveLink: "https://redicholas.github.io/Doer/"
  },
  {
    title: "KaffeHörnet",
    description: "Team project, code a web-shop. <br /> HTML | Sass | JavaScript",
    imageUrl: "./img/kaffeHornet.png",
    imgAlt: "image of our coffee corner website",
    repoLink: "https://github.com/Redicholas/KaffeHornet",
    liveLink: "https://redicholas.github.io/KaffeHornet/",
  },
];

function toggleDarkLight() {
  if (html != null) {
    html.classList.toggle("dark");
  }
}

function showCvModal() {
  if (cvModal != null) {
    cvModal.classList.replace("hidden", "flex");
  }
}

function closeCvModal() {
  if (cvModal != null) {
    cvModal.classList.replace("flex", "hidden");
  }
}

function showPortfolioItems() {
  portfolioItems.forEach((portfolioItem) => {
    const { description, imageUrl, imgAlt, repoLink, liveLink } = portfolioItem;
    if (portfolioItemsDiv != null) {
      portfolioItemsDiv.innerHTML += `
      <div class="rounded-xl max-w-md mx-auto p-4 border dark:border-transparentWhite
      border-transparentBlack fade-in transition-all duration-300
        hover:bg-transparentBlack dark:hover:bg-transparentWhite dark:bg-greyblack bg-transparentWhite
        ">
        
          <img src="${imageUrl}" alt="${imgAlt}" 
          class="rounded-xl m-auto mb-4 w-full max-w-xs border border-transparentBlack relative"
          height="100" width="100">
          <p class="text-center text-sm">${description}</p>
          <div class="flex justify-around mt-4">
            <a href="${repoLink}" target="_blank" title="Link to the GitHub Repository" class="border dark:border-transparentWhite
            border-transparentBlack  px-6 py-1 rounded hover:bg-yellow hover:text-greyblack transition-all"/>Repo</a>
            <a href="${liveLink}" target="_blank" title="Link to the live site"  class="border dark:border-transparentWhite
            border-transparentBlack  px-6 py-1 rounded hover:bg-yellow hover:text-greyblack transition-all"/>Live</a>
          </div>
      </div>
      `;
    }
  });
}

const hidden = document.querySelectorAll(".fade-in");
const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hide");
    }
  });
});

hidden.forEach((element) => {
  Observer.observe(element);
});

showPortfolioItems();
darkLightBtn?.addEventListener("click", toggleDarkLight);
cvThumbnail?.addEventListener("click", showCvModal);
closeCvModalBtn?.addEventListener("click", closeCvModal);
