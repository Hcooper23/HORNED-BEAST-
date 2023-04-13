import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './hearts.css';
import './cardimage.css';

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  addClick = () => {
  if (this.state.likes < 3) {
    this.setState(prevState => ({
      likes: prevState.likes >= 0 ? prevState.likes + 1 : -1
    }));
    this.props.display(this.props.title);
  }
}
  unlikeClick = () => {
    if (this.state.likes > 0) {
      this.setState({
        likes: 0
      });
    }
  }

  render() {
    const heartClass = this.state.likes > 0 ? "red-heart" : "";
    return (
      <Card border="light" className="mb-4">
        <Card.Img variant="top" src={this.props.imageSrc} className="card-image" style={{width: '250px', height: 'auto'}} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Button variant="primary" className={heartClass} onClick={this.addClick}>
            &hearts; {this.state.likes}
          </Button>
          {this.state.likes > 0 &&
            <Button variant="danger" onClick={this.unlikeClick}>
              Unlike
            </Button>
          }
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;