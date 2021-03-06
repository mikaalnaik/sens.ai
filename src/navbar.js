import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu'

class NavBar extends Component {

  showSettings (event) {
  event.preventDefault();
}

  render() {
    return (
      <div className="navbar">
          <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
           <a id="about" className="menu-item" href="/about">About</a>
           <a id="contact" className="menu-item" href="/contact">Contact</a>
           <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
         </Menu>
  <div className='navbar-brand'>  Sens.ai </div>
  </div>
    );
  }
}

export default NavBar;
