export default class Widget {
  constructor() {
    this.targetEement = document.querySelector('.btn-collapse'); // элемент-кнопка, которую нажали
    this.collapse_body = document.querySelector('.collapse-body'); // Блок с подсказкой
    this.eventClick = this.eventClick.bind(this);
    this.targetEement.style.cursor = 'pointer';
  }

  eventClick() {
    this.targetEement.addEventListener('click', () => {
      if (this.collapse_body.classList.contains('active')) {
        this.collapse_body.style.height = '0px';
        this.collapse_body.style.visibility = 'hidden';
        this.collapse_body.classList.remove('active');
      } else {
        this.collapse_body.classList.add('active');
        this.collapse_body.style.visibility = 'visible';
        this.collapse_body.style.height = `${this.collapse_body.scrollHeight}px`;
      }
    });
  }
}
