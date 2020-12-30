import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import { getUserDetails } from '../../Store/Reducer';
import {db, auth, storage} from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../Store/StateProvider';

import './Navbar.css';
function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    auth.signOut();
    dispatch({
      type: 'SET_USER',
      user: null
    })
    history.replace("/");

  };
    return (
    <div>
      <AppBar className="navbar_navbar" position="fixed">
        <Toolbar className="navbar_toolbar">
          <span className="navbar_logo">Instagram</span>
          <input className="navbar_input" type="text" placeholder="Search"/>          
          <div className="navbar_icons">
            <HomeIcon fontSize="small"/>
            <MessageIcon fontSize="small"/>
            <ExploreIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            {getUserDetails ? <React.Fragment>
            <PersonIcon onClick={handleClick} fontSize="small"/>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </React.Fragment> : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Navbar
