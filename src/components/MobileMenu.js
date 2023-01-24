import React, {useState} from 'react';
import '../styles/MobileMenu.scss';

import {ReactComponent as MenuClose} from '../assets/images/icon-menu-close.svg'


function MobileMenu(props) {

    return(
        <div className='mobileMenuFull'>

            <div className='mobileMenuSidePane'>

                <MenuClose/>

                I am the Mobile Menu Component!sdhkfj

            </div>




        </div>
    )
}

export default MobileMenu;