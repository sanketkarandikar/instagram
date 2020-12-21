import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './Navbar.css';
function Navbar() {
    return (
    <div>
      <AppBar className="navbar_navbar" position="fixed">
        <Toolbar className="navbar_toolbar">
          <span className="navbar_logo">Instagram</span>
          <input className="navbar_input" type="text" placeholder="Search"/>          
          <div className="navbar_icons">
            <HomeIcon fontSize="large"/>
            <MessageIcon fontSize="large"/>
            <ExploreIcon fontSize="large"/>
            <FavoriteBorderIcon fontSize="large"/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar
