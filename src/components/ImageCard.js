import React, {Component} from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {spans: 0};
    this.imageRef = React.createRef(); // creates a reference to a DOM element
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 15);

    this.setState({spans});

  };

  render() {
    const {description, urls} = this.props.image;
    // noinspection JSUnresolvedVariable
    return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img ref={this.imageRef} src={urls.regular} alt={description}/>
        </div>
    );
  }
}

export default ImageCard;
