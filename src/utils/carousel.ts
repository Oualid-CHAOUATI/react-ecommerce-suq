import { ComponentPropsWithoutRef } from "react";

class carouselTouchPlugin {
  constructor(carousel) {
    this.carousel = carousel;
    this.root = this.carousel.carouselContainer;
    this.bindMethods();
    this.setEventListener();
  }

  bindMethods() {
    this.startDrag = this.startDrag.bind(this);
    this.drag = this.drag.bind(this);
    this.endDrag = this.endDrag.bind(this);
  }

  setEventListener() {
    this.root.addEventListener("mousedown", this.startDrag);
    this.root.addEventListener("touchstart", this.startDrag);
  }

  startDrag(e) {
    this.translate = { x: 0, y: 0 };
    if (e.touches) {
      if (e.touches.length > 1) return;
      e = e.touches[0];
    }

    let { screenX: x, screenY: y } = e;
    this.origin = { x, y };

    window.addEventListener("mousemove", this.drag);
    window.addEventListener("touchmove", this.drag);

    window.addEventListener("mouseup", this.endDrag);
    window.addEventListener("touchend", this.endDrag);
    window.addEventListener("touchcancel", this.endDrag);
  }

  drag(e) {
    this.carousel.on_off_select(0);
    this.carousel.setTransition(0);

    e = e.touches ? e.touches[0] : e;
    let { screenX: x, screenY: y } = e;
    let point = { x, y };
    this.translate = { x: point.x - this.origin.x, y: point.y - this.origin.y };
    console.log(Math.abs(this.translate.y));

    if (Math.abs(this.translate.y) > 35) return; //we are trying to scroll up or down

    let translatePercentage =
      (100 * this.translate.x) / this.carousel.getWidth("carousel");
    let xMove_MAX =
      (100 * (this.carousel.size - this.carousel.get_slidesVisible)) /
      this.carousel.size;
    let xMove_NEW = this.carousel.xMove + translatePercentage;

    this.carousel.carousel.style.transform = `translateX(${
      this.carousel.xMove + translatePercentage
    }%)`;
  }

  endDrag() {
    this.carousel.setTransition(1);
    this.carousel.on_off_select(1);

    let translatePercantage =
      this.translate.x / this.carousel.getWidth("carousel");

    translatePercantage /= this.carousel.get_slidePercentage;

    let absTranslatePercentage = Math.abs(translatePercantage);

    for (let i = 0; i < Math.floor(absTranslatePercentage); i++) {
      this.carousel.nextSlide(Math.sign(translatePercantage * -1));
    }

    if (absTranslatePercentage % 1 >= 0.3) {
      this.carousel.nextSlide(Math.sign(translatePercantage * -1));
    } else {
      this.carousel.resetToXmove();
    }

    window.removeEventListener("mousemove", this.drag);
    window.removeEventListener("touchmove", this.drag);

    window.removeEventListener("mouseup", this.endDrag);
    window.removeEventListener("touchend", this.endDrag);
    window.removeEventListener("touchcancel", this.endDrag);
  }
}

type HTMLTagtype = keyof JSX.IntrinsicElements;

function createElement<T extends HTMLTagtype>(
  tag: T,
  props: ComponentPropsWithoutRef<T>
) {
  const element: HTMLElement = document.createElement(tag);
  if (props)
    for (const key in props) element.setAttribute(key, String(props[key]));
  return element;
}

export class Carousel {
  index: number = 0;
  size: number | undefined;
  root: HTMLElement | undefined;
  carouselContainer: HTMLElement | undefined;
  children: Element[] | undefined;
  carousel: HTMLElement;
  fakeCarouselContainer: HTMLElement;
  constructor(element: HTMLElement) {
    console.log(this);

    this.bindMethods();

    this.initDom(element);
    this.setContainerWidth();
    this.setEventsListeners();
    this.createPagination();
    this.createNavigation();

    this.gotoItem(0);

    if (this.get_slidesVisible < this.size!) new carouselTouchPlugin(this);
  }

  bindMethods() {
    this.handleResize = this.handleResize.bind(this);
    this.setContainerWidth = this.setContainerWidth.bind(this);
  }

  initDom(element: HTMLElement) {
    this.root = element;
    this.root.setAttribute("class", "carousel-wrapper flex-center column");
    this.root.setAttribute("tabindex", String(0));
    this.carouselContainer = createElement("div", {
      className: "carousel-container",
    });

    this.fakeCarouselContainer = createElement("div", {
      className: "fake-carousel-container",
    });
    this.carousel = createElement("div", {
      className: "carousel flex-center ",
    });
    this.size = element.childElementCount;
    this.children = [...element.children];
    this.root.appendChild(this.carouselContainer);
    this.root.appendChild(this.fakeCarouselContainer);
    this.carouselContainer.appendChild(this.carousel);

    this.children.forEach((child) => this.carousel.appendChild(child));
  }

  get get_slidesVisible() {
    return Math.max(
      1,
      Math.floor(
        this.getWidth("fakeCarouselContainer") / this.getWidth("child")
      )
    );
  }
  get get_slidePercentage() {
    return (
      (this.get_slidesVisible * this.getWidth("child")) /
      this.getWidth("carousel")
    );
  }
  on_off_select(state) {
    switch (state) {
      case 0:
        this.carousel.style.pointerEvents = "none";
        return;
      case 1:
        this.carousel.style.pointerEvents = "all";
        return;
    }
  }

  setTransition(state) {
    switch (state) {
      case 0:
        this.carousel.style.transition = "0s";
        return;
      case 1:
        this.carousel.style.transition = "";
        return;
    }
  }
  getWidth(str) {
    switch (str) {
      case "child":
        return this.children[0].offsetWidth;
      case "fakeCarouselContainer":
        return this.fakeCarouselContainer.offsetWidth;
      case "carousel":
        return this.carousel.offsetWidth;
    }
  }
  setContainerWidth() {
    let cardWidth = this.getWidth("child");

    this.carouselContainer.style.width =
      Math.min(this.size * cardWidth, this.get_slidesVisible * cardWidth) +
      "px";
  }
  setEventsListeners() {
    this.resizeTimer = null;
    window.addEventListener("resize", this.handleResize);
    this.root.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.nextSlide(1);
          break;
        case "ArrowLeft":
          this.nextSlide(-1);
          break;
      }
    });
  }

  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setContainerWidth();
      this.createPagination();

      this.gotoItem(this.getIndex());
    }, 800);
  }
  getIndex() {
    return Math.floor(this.currentPosition / this.get_slidesVisible);
  }
  createPagination() {
    if (this.pagination) this.pagination.remove();
    this.pagination = createElement("div", { class: "pagination" });
    this.carouselContainer.appendChild(this.pagination);

    this.createDots();
    this.addPaginationEventsListener();
  }
  createDots() {
    this.dots = [];
    let slidesVisible = Math.max(1, this.get_slidesVisible);
    this.dotsLength = Math.ceil(this.size / slidesVisible); // slides to scoll est un getter
    if (this.dotsLength < 2) return;

    for (let i = 0; i < this.dotsLength; i++) {
      let dot = createElement("span", { class: "pagination-dot", id: i });
      this.dots.push(dot);
      this.pagination.append(dot);
    }
  }
  addPaginationEventsListener() {
    this.dots.forEach((dot, i) =>
      dot.addEventListener("click", (event) => {
        if (dot == this.activeDot) return;
        this.gotoItem(i);
      })
    );
  }

  createNavigation() {
    let navigation = createElement("div", { class: "navigation" });
    this.btn_next = createElement("button", { class: "navigation-btn next" });
    this.btn_prev = createElement("button", { class: "navigation-btn prev" });
    this.addIconToBtns();

    this.addNavigationEventsListeners();

    let r_btnWrapper = createElement("div", {
      class: "navigation-button-wrapper",
    });
    let l_btnWrapper = r_btnWrapper.cloneNode(true);
    r_btnWrapper.appendChild(this.btn_next);
    l_btnWrapper.appendChild(this.btn_prev);

    navigation.appendChild(r_btnWrapper);
    navigation.appendChild(l_btnWrapper);
    this.carouselContainer.appendChild(navigation);
  }

  addNavigationEventsListeners() {
    this.btn_next.addEventListener("click", () => {
      this.nextSlide(1);
    });
    this.btn_prev.addEventListener("click", () => {
      this.nextSlide(-1);
    });
  }

  nextSlide(i) {
    this.gotoItem(this.index + i);
  }
  addIconToBtns() {
    let arrowIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="123.964px" height="123.964px" viewBox="0 0 123.964 123.964" style="enable-background:new 0 0 123.964 123.964;"
     xml:space="preserve">
  <g>
    <path d="M121.7,57.681L83,26.881c-4-3.1-10-0.3-10,4.8v10.3c0,3.3-2.2,6.2-5.5,6.2H6c-3.3,0-6,2.4-6,5.8v16.2c0,3.2,2.7,6,6,6h61.5
      c3.3,0,5.5,2.601,5.5,5.9v10.3c0,5,6,7.8,9.9,4.7l38.6-30C124.7,64.781,124.8,60.081,121.7,57.681z"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  `;

    this.btn_next.innerHTML = arrowIcon;
    this.btn_prev.innerHTML = arrowIcon;
  }
  gotoItem(i) {
    // debugger
    if (i < 0 || i >= this.dotsLength) {
      this.resetToXmove();
      return;
    }
    this.index = i;
    this.check_styleBtns();

    let slidesVisible = this.get_slidesVisible;
    this.currentPosition = Math.min(
      i * slidesVisible,
      this.size - slidesVisible
    );
    this.currentPosition = Math.max(0, this.currentPosition);

    let xMove = this.currentPosition / this.size;
    xMove *= -100;
    this.xMove = xMove;
    this.carousel.style.transform = `translateX(${xMove}%)`;
    this.styleDots();
  }

  styleDots() {
    if (this.dotsLength < 2) return;
    if (this.activeDot) this.activeDot.classList.remove("active");
    this.activeDot = this.dots[this.index];
    this.activeDot.classList.add("active");
  }
  resetToXmove() {
    this.carousel.style.transform = `translateX(${this.xMove}%)`;
  }
  styleBtn(state, btn) {
    switch (state) {
      case "hide":
        this[btn].classList.add("hide");
        break;
      case "show":
        this[btn].classList.remove("hide");
        break;
    }
  }
  check_styleBtns() {
    let i = this.index;
    if (i == 0) this.styleBtn("hide", "btn_prev");
    else this.styleBtn("show", "btn_prev");

    if (i == this.dotsLength - 1) this.styleBtn("hide", "btn_next");
    else this.styleBtn("show", "btn_next");
  }
}

document
  .querySelectorAll(".carousel-content")
  .forEach((element) => new carousel(element));
