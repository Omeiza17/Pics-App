import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  // noinspection JSMethodCanBeStatic
  onSearchSubmit = async (term) => {
    // using axios to make a GET request to the Unslash API
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    /*
    * .then((response) => console.log(response.data.results)); Can be used when waiting on an promise
    */
  };

  render() {
    return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images} />
        </div>
    );
  }
}

export default App;
