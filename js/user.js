let bannerSection = document.querySelector("banner");

let bannerTitlesContainer = document.querySelector("#bannerTitle");
let aboutMeImageContainer = document.querySelector("#aboutMeImage");
let aboutMeContentContainer = document.querySelector("#aboutMeContent");
let skillsFrontendContainer = document.querySelector("#skillsFrontend");
let skillsBackendContainer = document.querySelector("#skillsBackend");

let skillsLinuxHostingContainer = document.querySelector("#skillsLinuxHosting");
let skillsOthersContainer = document.querySelector("#skillsOthers");
let worksColumns = document.querySelector("#worksColumns");

/**
 * la classe Developpeur
 */
class Developper {
  /**
   *
   * @param {*} datas
   */
  constructor(datas = []) {
    this.datas = datas;
    this.htmlElementsContainer = [];
    this.renderHtmlElements();
  }
  /**
   * @returns {array} return un tableau d'objects{elemet HTML}
   */
  createDOMElements() {
    // 1. creation des htmlElements de la section banniere
    let bannerTitle = document.createElement("div");
    let developperBriefPresenation = document.createElement("h1");
    let developperProfile = document.createElement("h2");
    let bannerSkills = document.createElement("div");
    bannerTitle.classList.add("banner__title");

    // 2. creation des htmlElements de la section Apropos

    let avatar = document.createElement("img");
    let aboutMeFirstLine = document.createElement("p");
    let aboutMeSecondLine = document.createElement("p");
    avatar.classList.add("card__image");
    avatar.classList.add("image-profile");
    avatar.setAttribute("alt", "image-profile");
    avatar.setAttribute("src", "");

    // 3. creation des htmlElements de la section Mes Competences(Skills)
    // 3.1. Skills= Front-end
    let html5ImageDiv = document.createElement("div");
    let html5Image = document.createElement("img");
    let jsImageDiv = document.createElement("div");
    let jsImage = document.createElement("img");
    let cssImageDiv = document.createElement("div");
    let cssImage = document.createElement("img");
    let sassImageDiv = document.createElement("div");
    let sassImage = document.createElement("img");
    let jsonImageDiv = document.createElement("div");
    let jsonImage = document.createElement("img");

    html5Image.setAttribute("alt", "html5");
    html5Image.setAttribute("src", "");
    jsImage.setAttribute("alt", "javascript");
    jsImage.setAttribute("src", "");
    cssImage.setAttribute("alt", "css3");
    cssImage.setAttribute("src", "");
    sassImage.setAttribute("alt", "sass");
    sassImage.setAttribute("src", "");
    jsonImage.setAttribute("alt", "json");
    jsonImage.setAttribute("src", "");

    // 3.2. Skills= Back-end
    let phpImageDiv = document.createElement("div");
    let phpImage = document.createElement("img");
    let pythonImageDiv = document.createElement("div");
    let pythonImage = document.createElement("img");
    let symfonyImageDiv = document.createElement("div");
    let symfonyImage = document.createElement("img");
    let wordpressImageDiv = document.createElement("div");
    let wordpressImage = document.createElement("img");
    let javaImageDiv = document.createElement("div");
    let javaImage = document.createElement("img");

    // 3.2. Skills= Linux And Hosting
    let cpanelImageDiv = document.createElement("div");
    let cpanelImage = document.createElement("img");
    let ubuntuImageDiv = document.createElement("div");
    let ubuntuImage = document.createElement("img");
    let dnsImageDiv = document.createElement("div");
    let dnsImage = document.createElement("img");
    let sslImageDiv = document.createElement("div");
    let sslImage = document.createElement("img");
    let apacheImageDiv = document.createElement("div");
    let apacheImage = document.createElement("img");

    cpanelImage.setAttribute("alt", "cpanel");
    cpanelImage.setAttribute("src", "");
    ubuntuImage.setAttribute("alt", "ubuntu");
    ubuntuImage.setAttribute("src", "");
    dnsImage.setAttribute("alt", "DNS");
    dnsImage.setAttribute("src", "");
    sslImage.setAttribute("alt", "ssl");
    sslImage.setAttribute("src", "");
    apacheImage.setAttribute("alt", "apache");
    apacheImage.setAttribute("src", "");

    // 3.2. Skills= Others
    let gitImageDiv = document.createElement("div");
    let gitImage = document.createElement("img");
    let composerImageDiv = document.createElement("div");
    let composerImage = document.createElement("img");
    let npmImageDiv = document.createElement("div");
    let npmImage = document.createElement("img");

    // 4) Works:

    let gridColumn = document.createElement("div");
    let cardContainer = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardImageContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardTitle = document.createElement("h4");
    let cardSubTitle = document.createElement("h6");
    let cardText = document.createElement("p");
    let btnWork = document.createElement("button");

    gridColumn.classList.add("cols--4");
    cardContainer.classList.add("card");
    cardImageContainer.classList.add("card__image");
    cardImage.classList.add("card_image--top");
    cardImage.setAttribute("src", "");
    cardImage.setAttribute("alt", "");
    cardBody.classList.add("card__body");
    cardTitle.classList.add("card__title");
    cardSubTitle.classList.add("card__title");
    cardSubTitle.classList.add("card__sub-title");
    cardText.classList.add("card__text");
    btnWork.classList.add("btn");
    btnWork.classList.add("btn__primary");
    btnWork.textContent = "visualiser";

    // Insertion des htmlElements dans le conteneur(tableau d'objets)

    this.htmlElementsContainer.push({
      bannerTitle,
      developperBriefPresenation,
      developperProfile,
      bannerSkills,
      avatar,
      aboutMeFirstLine,
      aboutMeSecondLine,
      html5ImageDiv,
      html5Image,
      jsImageDiv,
      jsImage,
      cssImageDiv,
      cssImage,
      sassImageDiv,
      sassImage,
      jsonImageDiv,
      jsonImage,
      phpImageDiv,
      phpImage,
      pythonImageDiv,
      pythonImage,
      symfonyImageDiv,
      symfonyImage,
      wordpressImageDiv,
      wordpressImage,
      javaImageDiv,
      javaImage,
      cpanelImageDiv,
      cpanelImage,
      ubuntuImageDiv,
      ubuntuImage,
      dnsImageDiv,
      dnsImage,
      sslImageDiv,
      sslImage,
      apacheImageDiv,
      apacheImage,
      gitImageDiv,
      gitImage,
      composerImageDiv,
      composerImage,
      npmImageDiv,
      npmImage,
      gridColumn,
      cardContainer,
      cardBody,
      cardImageContainer,
      cardImage,
      cardTitle,
      cardSubTitle,
      cardText,
      btnWork,
    });
    return this.htmlElementsContainer;
  }

  /**
   *  Affichage des elements html
   */
  renderHtmlElements() {
    this.createDOMElements().forEach((htmlElement) => {
      // 1- Section banner et A propos
      htmlElement.developperBriefPresenation.textContent = ` ${this.datas.brief} ${this.datas.firstname} ${this.datas.lastname}(${this.datas.nickname})`;
      htmlElement.developperProfile.textContent = `${this.datas.profile}`;
      htmlElement.avatar.src = this.datas.avatar;
      htmlElement.aboutMeFirstLine.innerHTML = this.datas.about[0];
      htmlElement.aboutMeSecondLine.textContent = this.datas.about[1];

      // 2.1. Skills Frontend : Affectation des images dans les elements html

      // for (let frontedSkillImage of this.datas.skills.frontend) {
      htmlElement.html5Image.src = this.datas.skills.frontend[0];
      htmlElement.html5ImageDiv.appendChild(htmlElement.html5Image);
      htmlElement.jsImage.src = this.datas.skills.frontend[1];
      htmlElement.jsImageDiv.appendChild(htmlElement.jsImage);
      htmlElement.cssImage.src = this.datas.skills.frontend[2];
      htmlElement.cssImageDiv.appendChild(htmlElement.cssImage);
      htmlElement.sassImage.src = this.datas.skills.frontend[3];
      htmlElement.sassImageDiv.appendChild(htmlElement.sassImage);
      htmlElement.jsonImage.src = this.datas.skills.frontend[4];
      htmlElement.jsonImageDiv.appendChild(htmlElement.jsonImage);

      // }

      // 2.1. Skills Backend : Affectation des images dans les elements html

      // for (let frontedSkillImage of this.datas.skills.frontend) {
      htmlElement.phpImage.src = this.datas.skills.backend[0];
      htmlElement.phpImageDiv.appendChild(htmlElement.phpImage);
      htmlElement.pythonImage.src = this.datas.skills.backend[1];
      htmlElement.pythonImageDiv.appendChild(htmlElement.pythonImage);
      htmlElement.wordpressImage.src = this.datas.skills.backend[2];
      htmlElement.wordpressImageDiv.appendChild(htmlElement.wordpressImage);
      htmlElement.symfonyImage.src = this.datas.skills.backend[3];
      htmlElement.symfonyImageDiv.appendChild(htmlElement.symfonyImage);
      htmlElement.javaImage.src = this.datas.skills.backend[4];
      htmlElement.javaImageDiv.appendChild(htmlElement.javaImage);

      // }

      // 2.3. Skills Linux And Hosting : Affectation des images dans les elements html

      // for (let frontedSkillImage of this.datas.skills.frontend) {
      htmlElement.cpanelImage.src = this.datas.skills.linuxAndHosting[0];
      htmlElement.cpanelImageDiv.appendChild(htmlElement.cpanelImage);
      htmlElement.ubuntuImage.src = this.datas.skills.linuxAndHosting[1];
      htmlElement.ubuntuImageDiv.appendChild(htmlElement.ubuntuImage);
      htmlElement.dnsImage.src = this.datas.skills.linuxAndHosting[2];
      htmlElement.dnsImageDiv.appendChild(htmlElement.dnsImage);
      htmlElement.sslImage.src = this.datas.skills.linuxAndHosting[3];
      htmlElement.sslImageDiv.appendChild(htmlElement.sslImage);
      htmlElement.apacheImage.src = this.datas.skills.linuxAndHosting[4];
      htmlElement.apacheImageDiv.appendChild(htmlElement.apacheImage);

      // 2.3. Skills Others : Affectation des images dans les elements html

      // for (let frontedSkillImage of this.datas.skills.frontend) {
      htmlElement.gitImage.src = this.datas.skills.others[0];
      htmlElement.gitImageDiv.appendChild(htmlElement.gitImage);
      htmlElement.composerImage.src = this.datas.skills.others[1];
      htmlElement.composerImageDiv.appendChild(htmlElement.composerImage);
      htmlElement.npmImage.src = this.datas.skills.others[2];
      htmlElement.npmImageDiv.appendChild(htmlElement.npmImage);

      for (let work of this.datas.works) {
        let gridColumn = document.createElement("div");
        let cardContainer = document.createElement("div");
        let cardBody = document.createElement("div");
        let cardImageContainer = document.createElement("div");
        let cardImage = document.createElement("img");
        let cardTitle = document.createElement("h4");
        let cardSubTitle = document.createElement("h6");
        let cardText = document.createElement("p");
        let btnWork = document.createElement("a");
        btnWork.setAttribute("href", "#");

        gridColumn.classList.add("cols--4");
        cardContainer.classList.add("card");
        cardImageContainer.classList.add("card__image");
        cardImage.classList.add("card_image--top");
        cardImage.setAttribute("src", "");
        cardImage.setAttribute("alt", "");
        cardBody.classList.add("card__body");
        cardTitle.classList.add("card__title");
        cardSubTitle.classList.add("card__title");
        cardSubTitle.classList.add("card__sub-title");
        cardText.classList.add("card__text");
        btnWork.classList.add("btn");
        btnWork.classList.add("btn__primary");
        btnWork.textContent = "visualiser";
        cardImage.src = work.image;
        cardTitle.textContent = work.title;
        cardSubTitle.textContent = work.subtitle;
        cardText.textContent = work.description;
        cardImageContainer.appendChild(cardImage);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(btnWork);
        cardContainer.appendChild(cardImageContainer);
        cardContainer.appendChild(cardBody);

        gridColumn.appendChild(cardContainer);
        worksColumns.appendChild(gridColumn);
        console.log(gridColumn);
      }
      // worksColumns.appendChild(cards);

      /* 
          Ajout des htmlElements dans des conteneurs selectionnees
      */

      // a) Section bannere
      bannerTitlesContainer.appendChild(
        htmlElement.bannerTitle.appendChild(
          htmlElement.developperBriefPresenation
        )
      );
      bannerTitlesContainer.appendChild(
        htmlElement.bannerTitle.appendChild(htmlElement.developperProfile)
      );

      // b) Section Apropos
      aboutMeImageContainer.appendChild(htmlElement.avatar);
      aboutMeContentContainer.appendChild(htmlElement.aboutMeFirstLine);
      aboutMeContentContainer.appendChild(htmlElement.aboutMeSecondLine);

      // c) Section Competences: Skills
      skillsFrontendContainer.appendChild(htmlElement.html5ImageDiv);
      skillsFrontendContainer.appendChild(htmlElement.jsImageDiv);
      skillsFrontendContainer.appendChild(htmlElement.cssImageDiv);
      skillsFrontendContainer.appendChild(htmlElement.sassImageDiv);
      skillsFrontendContainer.appendChild(htmlElement.jsonImageDiv);

      // c.2) backend:

      skillsBackendContainer.appendChild(htmlElement.phpImageDiv);
      skillsBackendContainer.appendChild(htmlElement.pythonImageDiv);
      skillsBackendContainer.appendChild(htmlElement.wordpressImageDiv);
      skillsBackendContainer.appendChild(htmlElement.symfonyImageDiv);
      skillsBackendContainer.appendChild(htmlElement.javaImageDiv);

      // c.3) Linux and Hosting:

      skillsLinuxHostingContainer.appendChild(htmlElement.cpanelImageDiv);
      skillsLinuxHostingContainer.appendChild(htmlElement.ubuntuImageDiv);
      skillsLinuxHostingContainer.appendChild(htmlElement.dnsImageDiv);
      skillsLinuxHostingContainer.appendChild(htmlElement.sslImageDiv);
      skillsLinuxHostingContainer.appendChild(htmlElement.apacheImageDiv);

      // c.4) Outils:

      skillsOthersContainer.appendChild(htmlElement.gitImageDiv);
      skillsOthersContainer.appendChild(htmlElement.composerImageDiv);
      skillsOthersContainer.appendChild(htmlElement.npmImageDiv);

      // Works
    });
  }
}

// On cree recupere nos donnees a partir du serveur

function getJsonDatas() {
  fetch(" http://localhost:3000/developpers")
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

let toggleCheckbox = document.querySelector("#toggle");
let navbarSupportedContent = document.querySelector("#navbarSupportedContent");

function visibleMenuToggle() {
  if (toggleCheckbox.checked == true) {
    navbarSupportedContent.style.display = "block";
    navbarSupportedContent.style.backgroundColor = "#ffff";
    navbarSupportedContent.style.color = "#0000";

    bannerTitlesContainer.classList.toggle("banner__body--faddown");
  } else {
    navbarSupportedContent.style.display = "none";
    bannerTitlesContainer.classList.remove("banner__body--faddown");
    navbarSupportedContent.style.backgroundColor = "#000";
  }
}

toggle.addEventListener("click", visibleMenuToggle);
