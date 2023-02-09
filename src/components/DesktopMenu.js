import React, {useState} from 'react';
import '../styles/DesktopMenu.scss';

// import {ReactComponent as MenuClose} from '../assets/images/icon-menu-close.svg'


function DesktopMenu(props) {

    return(
        // <div className='mobileMenuFull' 
        //     onClick={(e) => {
        //         props.toggleMobileMenu(e);
        //         }
        //     } style={{opacity: props.mobileMenu && "0%", visbility: props.mobileMenu && 'hidden', left: props.mobileMenuTimeout && "500px"}}>

        //     <div className='mobileMenuSidePane' style={{left: props.mobileMenu && '500px'}}>

        //         <a href='#home' className='mobileMenuLink'>
        //             Home
        //         </a>

        //         <a href='#new-stories' className='mobileMenuLink'>
        //             New
        //         </a>

        //         <a href="#popular-stories" className='mobileMenuLink'>
        //             Popular
        //         </a>

        //         <div className='mobileMenuLink'>
        //             Trending
        //         </div>
                
        //         <div className='mobileMenuLink'>
        //             Categories
        //         </div>

        //     </div>

        // </div>

        // <div>
        //     Menu
        // </div>

        <div className='desktopMenu'>

            <div className='desktopMenuPane' >

                <a href='#home' className='desktopMenuLink'>
                    Home
                </a>

                <a href='#new-stories' className='desktopMenuLink'>
                    New
                </a>

                <a href="#popular-stories" className='desktopMenuLink'>
                    Popular
                </a>

                <a className='desktopMenuLink' onClick={(e)=> {
                    e.preventDefault();
                }}>
                    Trending
                </a>
                
                <a className='desktopMenuLink'>
                    Categories
                </a>

            </div>

        </div>

    )
}

export default DesktopMenu;