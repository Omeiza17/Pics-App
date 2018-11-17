import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    // console.log(props);
  }

  render() {
    return (
        <div className="ui segment">
          <form action="" className="ui form" onSubmit={this.onFormSubmit}>
            <label htmlFor="search">Image Search</label>
            <input type="text" placeholder="Search...." value={this.state.term}
                   onChange={(e) => this.setState({term: e.target.value})}/>
          </form>
        </div>
    );
  }

  onFormSubmit = event => {
    event.preventDefault();

    // noinspection JSUnresolvedFunction
    this.props.onSubmit(this.state.term);
  }
}

export default SearchBar;
