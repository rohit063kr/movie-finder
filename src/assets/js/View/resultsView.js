import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.movies');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const id = e.target.closest('.movies__item')?.dataset.id;
      if (!id) return;
      handler(id);
    });
  }

  _generateMarkup(data) {
    const html = `
    <div class="movies__item" data-id="${data.imdbID}">
      <img src="${data.poster}" alt="${data.title}" class="movies__img" />
        <div class="movies__description">
          <p class="movies__title">${data.title}</p>
          <p class="movies__year">${data.year}</p>
          <p class="movies__type">${data.type}</p>
        </div>
    </div>
    `;
    return html;
  }
}
export default new ResultsView();
