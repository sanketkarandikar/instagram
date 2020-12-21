import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import './Profile.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Profile() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);

  return (
    <div>
       <Grid container spacing={2}>
        <Grid>
          <div>
            <List dense={dense}>
                <ListItem>
                    <img className="profile_photo" src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/>
                  <ListItemText className='profile_name'
                    primary="Sanket Karandikar"
                    secondary={secondary ? 'Sanket Karandikar' : null}
                  />
                  <ListItemSecondaryAction>
                    <p className="profile_follow">Switch</p>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            <ListSubheader disableSticky={true} className="profile_suggestion_header">
                <span>Suggestions for you</span>
                <span>See All</span>
            </ListSubheader>
            <List dense={dense}>
                <ListItem>
                    <img className="profile_photo" src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/>
                  <ListItemText className='profile_name'
                    primary="Sanket Karandikar"
                    secondary={secondary ? 'Sanket Karandikar' : null}
                  />
                  <ListItemSecondaryAction>
                    <p className="profile_follow">Follow</p>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            <List dense={dense}>
                <ListItem>
                    <img className="profile_photo" src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/>
                  <ListItemText className='profile_name'
                    primary="Sanket Karandikar"
                    secondary={secondary ? 'Sanket Karandikar' : null}
                  />
                  <ListItemSecondaryAction>
                    <p className="profile_follow">Follow</p>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            <List dense={dense}>
                <ListItem>
                    <img className="profile_photo" src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/>
                  <ListItemText className='profile_name'
                    primary="Sanket Karandikar"
                    secondary={secondary ? 'Sanket Karandikar' : null}
                  />
                  <ListItemSecondaryAction>
                    <p className="profile_follow">Follow</p>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            <List dense={dense}>
                <ListItem>
                    <img className="profile_photo" src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/>
                  <ListItemText className='profile_name'
                    primary="Sanket Karandikar"
                    secondary={secondary ? 'Sanket Karandikar' : null}
                  />
                  <ListItemSecondaryAction>
                    <p className="profile_follow">Follow</p>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
