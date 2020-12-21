import { IconButton } from '@material-ui/core';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Status.css';

function Status() {
    const scrollToRight = () => {
        document.getElementById('content').scrollBy(50, 0); // for right scroll
    }

    const scrollToLeft = () => {
        document.getElementById('content').scrollBy(-50, 0); // for left scroll
    }
    return (
        <div className="status">
            <div className="status_button">
                <IconButton onClick={scrollToLeft} className="status_left_button" aria-label="delete">
                    <ChevronLeftIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={scrollToRight} className="status_right_button" aria-label="delete">
                <ChevronRightIcon fontSize="small" />
                </IconButton>   
            </div>
            <ul className="status_list" id="content">
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>
                <li><img src="https://instagram.fpnq11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122793715_204220977895075_3784420762352875279_n.jpg?_nc_ht=instagram.fpnq11-1.fna.fbcdn.net&_nc_ohc=wPY42SU2GUwAX_XwxJc&tp=1&oh=fb67952de184b380a8bcc0926d9e39b8&oe=600A3B5E"/></li>


            </ul>
        </div>
    )
}

export default Status
