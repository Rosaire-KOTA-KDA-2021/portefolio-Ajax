// let slide = new Array(
//   "https://mdbootstrap.com/img/new/standard/city/041.jpg",
//   "https://mdbootstrap.com/img/new/standard/city/042.jpg",
//   "https://mdbootstrap.com/img/new/standard/city/043.jpg",
//   "prairie-alpes.jpg"
// );
// let slides = document.querySelectorAll(".slide");
// let numero = 0;
// function ChangeSlide(sens) {
//   numero = numero + sens;
//   if (numero < 0) numero = slide.length - 1;
//   if (numero > slide.length - 1) numero = 0;

//   for (const slide of slides) {
//     slide.src = slide[numero];
//   }
// }

// setInterval("ChangeSlide(1)", 4000);

let slider = document.querySelector("#slider");

class Carousel {
  /**
   *
   * @param {HTML element} element
   * @param {Object} options
   * @param {Object} options.slidesToScroll=le nombre d'elements a faire defiler
   * @param {Object} options.slidesToScroll=le nombre d'elements visible dans un slide
   */
  constructor(element, options = {}) {
    this.element = element;
    // on assigne des options par defaut pour eviter des erreurs
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );

    let children = [].slice.call(element.children);
    this.currentSlide = 0;

    // calcul de elemets qu'on souhaite avoir visible

    this.carouselRoot = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel__container");

    // On gere que le la largeur du container soi egal a la ration *100
    // this.container.style.width = `${ratio * 100} %`;
    carouselRoot.appendChild(this.container);
    this.element.appendChild(this.carouselRoot);

    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      //   item.style.width = `${(100 * this.options.slidesVisible) / ratio} %`;
      this.container.appendChild(item);
      return item;
    });
    this.setSyle();
    this.createNavigation();
  }
  /**
   * Applique la navigation
   */
  createNavigation() {
    let nextButton = this.createDivWithClass("carousel__next");
    let prevButton = this.createDivWithClass("carousel__prev");
    this.carouselRoot.appendChild(nextButton);
    this.carouselRoot.appendChild(prevButton);
    nextButton.addEventListener("click", this.nextItems.bind(this));
    prevButton.addEventListener("click", this.prevItems.bind(this));
  }
  nextItems() {
    this.goTo(this.currentSlide + this.options.slidesToScroll);
  }
  prevItems() {
    this.goTo(this.currentSlide - this.options.slidesToScroll);
  }
  /**
   * Deplace la carousel vers l'element cible
   * @param {Number} index
   */
  goTo(index) {
    let translatex = (index * -100) / this.items.length;
    this.currentSlide = index;
    this.container.style.transform = `translate3d(${translatex}%,0,0)`;
  }
  /**
   * Applique la bonne dimension a nos elements
   */
  setSyle() {
    let ratio = this.items.length / options.slidesVisible;
    this.container.style.width = `${ratio * 100} %`;
    //on ajoute des items
    this.items.array.forEach(
      (item) =>
        (item.style.width = `${(100 * this.options.slidesVisible) / ratio} %`)
    );
  }
  /**
   *
   * @param {string} classname
   * @returns {HTMLElement}
   */
  createDivWithClass(classname) {
    let div = document.createElement("div");
    div.classList.add(classname);
    return div;
  }
}
function createCarousel() {
  new Carousel(slider, {
    slidesToScroll: 3,
    slidesVisible: 3,
  });
}
// on ajoute le carousel au chargement du DOM
document.addEventListener("DOMContentLoaded", createCarousel);
