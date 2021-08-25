class sidebarView {
  _openBtn = document.querySelector('.nav__menu');
  _closeBtn = document.querySelector('.sidebar__close');
  _relativeElement = document.querySelector('.sidebar');
  _container = document.querySelector('.movies');

  constructor() {
    this._relativeElement.dataset.active = 0;
  }

  addHandlerOperateSlide(handler) {
    this._openBtn.addEventListener('click', this._operateSlide.bind(this));
    this._closeBtn.addEventListener('click', this._operateSlide.bind(this));
  }

  _operateSlide() {
    if (+this._relativeElement.dataset.active === 1) {
      // Clsosing
      this._relativeElement.classList.remove('sidebar--hidden');
      this._container.classList.add('movies__slide-pos');
      this._openBtn.style.opacity = '0';
      this._openBtn.style.zIndex = '0';
    }
    if (+this._relativeElement.dataset.active !== 1) {
      // Opening
      this._relativeElement.classList.add('sidebar--hidden');
      this._container.classList.remove('movies__slide-pos');
      this._openBtn.style.opacity = '100';
      this._openBtn.style.zIndex = '100';
    }
    this._switchState(this._relativeElement);
  }

  /*
  _openSlide() {
    if (+this._relativeElement.dataset.active === 0) return;
    this._relativeElement.classList.remove('sidebar--hidden');
    this._switchState(this._relativeElement);
    this._container.classList.add('movies__slide-pos');
    this._openBtn.style.opacity = '0';
  }

  _closeSlide() {
    if (+this._relativeElement.dataset.active === 0) return;
    // Hidding sidebar
    this._relativeElement.classList.add('sidebar--hidden');
    // Switching active state
    this._switchState(this._relativeElement);
    this._container.classList.remove('movies__slide-pos');
    this._openBtn.style.opacity = '100';
  }
*/

  _switchState(element) {
    element.dataset.active = +element.dataset.active === 0 ? 1 : 0;
  }

  // Unusual
  _setDisplay(element, boolean = false) {
    if (boolean) element.style.display = 'flex';
    if (!boolean) element.style.display = 'none';
  }
}
export default new sidebarView();
