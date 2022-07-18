export default class App {
  constructor() {
    this.targetEement = document.querySelector('.btn-collapse'); // элемент-кнопка, которую нажали
    this.widget = null; // Блок с подсказкой
    this.eventClick = this.eventClick.bind(this);
  }

  init() {
    this.create();
    this.eventClick();
  }

  create() {
    const widget = document.querySelector('.widget-text');
    this.widget = widget;
  }

  eventClick() {
    this.targetEement.addEventListener('click', () => {
      this.widget.classList.toggle('active');
    });
  }
}
