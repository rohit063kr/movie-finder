class View {
  _data = '';

  render(data) {
    this._data = data;
    const markup = this._data.map(data => this._generateMarkup(data)).join('');
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderErr(err) {
    this._clear();
    this._parentElement.insertAdjacentText('afterbegin', err);
  }

  renderLoader() {
    const markup = ` 
    <div class="loader">
    <p class="loader__text">Please wait for a while!</p>
    <img src="https://flevix.com/wp-content/uploads/2019/07/Untitled-2.gif" />
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}

export default View;
