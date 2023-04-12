import { Component } from 'react';
 import Button from 'react-bootstrap/Button';

 class SimpleForm extends Component {
   constructor() {
     super();
     this.state = {
       inputValue: null,
     }
   }

   handleSubmit = (e) => {
     e.preventDefault();
     console.log(e.target.input.value);
     this.setState({ inputValue: e.target.input.value });
   }


   render() {
     return (
         <Button type="submit">Submit</Button>
        )
   }
 }

 export default SimpleForm;