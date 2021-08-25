import * as model from './model.js';
import SearchView from './View/searchView.js';
import SidebarView from './View/sidebarView.js';
import ResultsView from './View/resultsView.js';
import pageView from './view/pageView.js';

const controleSearch = async function (query) {
  try {
    ResultsView.renderLoader();
    await model.getSearchData(query);
    ResultsView.render(model.state.search.results);
  } catch (err) {
    ResultsView.renderErr(err);
  }
};

const controlePage = async function (id) {
  try {
    pageView.renderLoader();
    await model.getPageData(id);
    pageView.render(model.state.page);
  } catch (err) {
    pageView.log(err);
  }
};

const init = function () {
  SearchView.addHandlerQuery(controleSearch);
  SidebarView.addHandlerOperateSlide();
  ResultsView.addHandlerClick(controlePage);
};
init();
