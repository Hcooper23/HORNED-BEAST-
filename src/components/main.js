import { Component } from 'react';
import HornedBeast from './hornedbeast';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      hornOptions: [] // add a new state property to hold the horn options
    };
  }

  componentDidMount() {
    // get all unique horn values from the data
    const hornValues = [...new Set(this.props.allBeasts.map(beast => beast.horns))];
    // generate an array of objects to represent the horn options
    const hornOptions = [
      { value: 'all', label: 'All' },
      ...hornValues.map(value => ({ value: value.toString(), label: value.toString() }))
    ];
    // set the horn options in the component state
    this.setState({ hornOptions });
  }

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    });
  }

  render() {
    const filteredBeasts = this.state.filter === 'all'
      ? this.props.allBeasts
      : this.props.allBeasts.filter(beast => beast.horns === parseInt(this.state.filter));

    return (
      <>
        <Form>
          <Form.Group controlId="formHornsFilter">
            <Form.Label>Filter by number of horns:</Form.Label>
            <Form.Control as="select" value={this.state.filter} onChange={this.handleFilterChange}>
              {this.state.hornOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
        <Row sm={1} md={3} lg={5}>
          {filteredBeasts.map((beast, i) => (
            <HornedBeast 
              key={i} 
              index={i}
              imageSrc={beast.image_url}
              title={beast.title}
              description={beast.description}
              display={this.props.display} 
            />
          ))}
        </Row>
      </>
    );
  }
}

export default Main;