/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("banner--add-particles-js", "databases/particles.json");
let worksList = [];
let skillsList = [];
let bannerBody = document.querySelector(".banner__title");
let elementsContainer = [];

function createDomElements() {
  let bannerTitle = document.createElement("div");
  let developperBriefPresenation = document.createElement("h1");
  let developperProfile = document.createElement("h2");
  let bannerSkills = document.createElement("div");

  bannerTitle.classList.add("banner__title");
  elementsContainer.push({
    bannerTitle,
    developperBriefPresenation,
    developperProfile,
    bannerSkills,
  });
  return elementsContainer;
}

function renderElements(developper) {
  createDomElements().forEach((element) => {
    element.developperBriefPresenation.textContent = ` ${developper.brief} ${developper.firstname} ${developper.lastname}(${developper.nickname})`;
    element.developperProfile.textContent = `${developper.profile}`;

    const data = element.bannerTitle.appendChild(
      element.developperBriefPresenation
    );

    bannerBody.appendChild(
      element.bannerTitle.appendChild(element.developperBriefPresenation)
    );
    bannerBody.appendChild(element.developperProfile);
  });
}

function getDatas() {
  fetch(" http://localhost:3000/developper")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderElements(data);
    });
}

// On charge les items et donnes lors du chargement du DOM

document.addEventListener("DOMContentLoaded", getDatas);
