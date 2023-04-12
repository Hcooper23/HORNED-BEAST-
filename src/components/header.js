import { Component } from 'react';

 class Header extends Component{
    render() {
      return (
        <><h1>{this.props.title}</h1><p>Below, you will see many images of Horned Beast and if you select one you will see a card display with the description of the card. Please read that and then decide if this a beast you like or if it is a best you do not. The heart indicates a liked beast and that will allow us to gather information. </p></>
      )
    }
}
export default Header;