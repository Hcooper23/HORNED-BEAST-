import { Component } from 'react';
import HornedBeast from './hornedbeast';
import list from './data.json';
import Results from './Results';
import { Row } from 'react-bootstrap';

 class Main extends Component{
   constructor () {
     super();
     this.state = {
       currentBeast: {image_url: null},
       HornedBeast: list,
     }
   }
   selectCurrentBeast = (beast) => {
     this.setState({ currentBeast: beast});
   }
     render() {
       return (
        <><p>{this.props.body}</p><>
           <Results currentBeast={this.state.currentBeast} />
           <Row sm={1} md={3} lg={5}>
             {this.state.HornedBeast.map((beastinfo, i) => <HornedBeast key={i} beastinfo={beastinfo} />)}
           </Row>
         </></>
         )
       }
   }
   export default Main