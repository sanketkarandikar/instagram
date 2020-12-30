import React, { useState} from 'react';
import './RightFooter.css';

function RightFooter() {
    const [menus, setMenus] = useState([{
        name: 'About'
    }, {name: 'Press'}, {name: 'Language'}, {name: 'API'}, {name: 'Jobs'}, {name: 'Privacy'}, {name: 'Terms'}, {name: 'Locations'}, {name: 'Top Accounts'}, {name: 'Hashtags'}]);
    return (
        <div className="footer_menu">
            {menus.map((item, index) => <span key={index} className="footer_menu_names">{item.name}</span>)}
        </div>
    )
}

export default RightFooter
