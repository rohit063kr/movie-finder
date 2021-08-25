class SearchView {
  _parentElement = document.querySelectorAll('.nav__form');

  addHandlerQuery(handler) {
    this._parentElement.forEach(el =>
      // Listening for submit events for all input fields
      el.addEventListener('submit', function (e) {
        e.preventDefault();
        // getting query
        const query = this.querySelector('.nav__input').value;
        // clearing query
        this.querySelector('.nav__input').value = '';
        // Handling query
        handler(query);
      })
    );
  }
}
export default new SearchView();
