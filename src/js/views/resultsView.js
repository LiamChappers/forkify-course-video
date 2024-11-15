import previewView from './previewView';
import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = 'No recipes found from your search results. Please try again';
  _successMsg = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
