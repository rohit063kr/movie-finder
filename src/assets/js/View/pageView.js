import View from './view.js';

class PageView extends View {
  _parentElement = document.querySelector('.movies');

  _generateMarkup(data) {
    const html = `
    <div class="movies__page">
     <div class="movies__page-details">
      <div>
        <img src="${data.poster}" class="movies__img" alt="" />
      </div>
      <div class="movies__details">
        <p class="movies__details-title">
          Title: <span class="movies__col-yellow">${data.title}</span>
        </p>
        <p class="movies__details-title">
          Type: <span class="movies__col-yellow">${data.type}</span>
        </p>
        <p class="movies__details-title">
          Year: <span class="movies__col-yellow">${data.year}</span>
        </p>
        <p class="movies__details-title">
          Director: <span class="movies__col-yellow">${data.director}</span>
        </p>
        <p class="movies__details-title">
          Writter: <span class="movies__col-yellow">${data.writer}</span>
        </p>
      </div>
      <div class="movies__details">
        <p class="movies__details-title">
          Language: <span class="movies__col-yellow">${data.language}</span>
        </p>
        <p class="movies__details-title">
          Released: <span class="movies__col-yellow">${data.released}</span>
        </p>
        <p class="movies__details-title">
          Genre: <span class="movies__col-yellow">${data.genre}</span>
        </p>
        <p class="movies__details-title">
          Rating: <span class="movies__col-yellow">${data.imdbRating}</span>
        </p>
        <p class="movies__details-title">
          duration: <span class="movies__col-yellow">${data.runtime}</span>
        </p>
      </div>
      </div>
      <div class="actors">
        <img src="assets/img/bg.jpg" class="actors__img" alt="" />
        <img src="assets/img/bg.jpg" class="actors__img" alt="" />
        <img src="assets/img/bg.jpg" class="actors__img" alt="" />
        <img src="assets/img/bg.jpg" class="actors__img" alt="" />
        <img src="assets/img/bg.jpg" class="actors__img" alt="" />
        <img src="assets/img/bg.jpg" class="actors__img" alt="" />
      </div>
    </div>
  `;
    return html;
  }
}
export default new PageView();
