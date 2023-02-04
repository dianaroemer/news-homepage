import React, {useState} from 'react';
import '../styles/MobileMenu.scss';

import {ReactComponent as MenuClose} from '../assets/images/icon-menu-close.svg'


function MobileMenu(props) {

    return(
        <div className='mobileMenu'>
            {props.isMobileViewport && <div className='mobileMenuFull' 
                onClick={(e) => {
                    props.toggleMobileMenu(e);
                    }
                } style={{opacity: props.mobileMenu && "0%", visbility: props.mobileMenu && 'hidden', left: props.mobileMenuTimeout && "500px"}}>

                <div className='mobileMenuSidePane' style={{left: props.mobileMenu && '500px'}}>

                    <MenuClose id='mobileMenuCloseIcon' viewBox='0 0 32 32'
                        onClick={(e) => {
                            props.toggleMobileMenu(e)}}/>

                    <a href='#home' className='mobileMenuLink'>
                        Home
                    </a>

                    <a href='#new-stories' className='mobileMenuLink'>
                        New
                    </a>

                    <a href="#popular-stories" className='mobileMenuLink'>
                        Popular
                    </a>

                    <div className='mobileMenuLink'>
                        Trending
                    </div>
                    
                    <div className='mobileMenuLink'>
                        Categories
                    </div>

                </div>

            </div> }
        </div>

    )
}

export default MobileMenu;