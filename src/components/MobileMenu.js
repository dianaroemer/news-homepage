import React, {useState} from 'react';
import '../styles/MobileMenu.scss';

import {ReactComponent as MenuClose} from '../assets/images/icon-menu-close.svg'


function MobileMenu(props) {



    

    return(
        <div className='mobileMenuFull' onClick={(e) => {props.toggleMobileMenu(e)}}>

            <div className='mobileMenuSidePane'>

                <MenuClose id='mobileMenuCloseIcon' viewBox='0 0 32 32'
                    onClick={(e) => {
                        props.toggleMobileMenu(e)}}/>

                <div className='mobileMenuLink'>
                    Home
                </div>

                <div className='mobileMenuLink'>
                    New
                </div>

                <div className='mobileMenuLink'>
                    Popular
                </div>

                <div className='mobileMenuLink'>
                    Trending
                </div>
                
                <div className='mobileMenuLink'>
                    Categories
                </div>

            </div>




        </div>
    )
}

export default MobileMenu;