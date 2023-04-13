import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <><h1>{this.props.title}</h1><p>Below, you will see many images of Horned Beast and if you see one you like based on the image and name hit the like button and there will be a bigger image with more information such as a description of the Horned Beast. If you learn more about it and you do not like it then you can hit unlike to remove the heart. The heart indicates a liked beast and that will allow us to gather information. If you absolutely love an image you can like it multiple times, please know the max number of likes is 3.</p></>
    )
  }
}
export default Header;