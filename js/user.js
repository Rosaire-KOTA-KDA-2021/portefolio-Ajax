let worksList = [];
let skillsList = [];
let bannerTitle = document.querySelector("#bannerTitle");
let aboutMeImage = document.querySelector("#aboutMeImage");
let aboutMeContent = document.querySelector("#aboutMeContent");

class Developper {
  /**
   *
   * @param {*} datas
   */
  constructor(datas = []) {
    this.datas = datas;
    this.elementsContainer = [];
    this.renderElements();
  }
  /**
   * @returns {array} return un tableau d'objects{elemet HTML}
   */
  createDomElements() {
    let bannerTitle = document.createElement("div");
    let developperBriefPresenation = document.createElement("h1");
    let developperProfile = document.createElement("h2");
    let bannerSkills = document.createElement("div");
    let avatar = document.createElement("img");
    let aboutFirstLine = document.createElement("p");
    let aboutSecondLine = document.createElement("p");

    bannerTitle.classList.add("banner__title");
    avatar.classList.add("card__image");
    avatar.classList.add("image-profile");
    avatar.setAttribute("alt", "image-profile");
    avatar.setAttribute("src", "");

    this.elementsContainer.push({
      bannerTitle,
      developperBriefPresenation,
      developperProfile,
      bannerSkills,
      avatar,
      aboutFirstLine,
      aboutSecondLine,
    });
    return this.elementsContainer;
  }
  renderElements() {
    this.createDomElements().forEach((element) => {
      element.developperBriefPresenation.textContent = ` ${this.datas.brief} ${this.datas.firstname} ${this.datas.lastname}(${this.datas.nickname})`;
      element.developperProfile.textContent = `${this.datas.profile}`;
      element.avatar.src = this.datas.avatar;
      element.aboutFirstLine.innerHTML = this.datas.about[0];
      element.aboutSecondLine.textContent = this.datas.about[1];

      const data = element.bannerTitle.appendChild(
        element.developperBriefPresenation
      );

      bannerTitle.appendChild(
        element.bannerTitle.appendChild(element.developperBriefPresenation)
      );
      bannerTitle.appendChild(element.developperProfile);
      aboutMeImage.appendChild(element.avatar);
      aboutMeContent.appendChild(element.aboutFirstLine);
      aboutMeContent.appendChild(element.aboutSecondLine);
    });
  }
}

// On cree recupere nos donnees a partir du serveur

function getJsonDatas() {
  fetch(" http://localhost:3000/developper")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // On creer un developpeur en passant en parametre les donnees Json
      new Developper(data);
    });
}

// On charge les items et donnees lors du chargement du DOM

document.addEventListener("DOMContentLoaded", getJsonDatas);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("banner--add-particles-js", "databases/particles.json");
