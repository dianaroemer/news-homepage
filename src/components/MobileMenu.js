import React, {useState} from 'react';
import '../styles/MobileMenu.scss';

import {ReactComponent as MenuClose} from '../assets/images/icon-menu-close.svg'


function MobileMenu(props) {

    // const [mobileMenuTimeout, setMobileMenuTimeout] = useState(false);
    
    // function manageMobileMenuTimeout() {
    //     console.log('called mobileMenuTimeout', mobileMenuTimeout, props.mobileMenu);



    //     // if( props.mobileMenu) {
    //     //     console.log('deep')
    //     //     setMobileMenuTimeout(false)
    //     // } else {
    //     //     console.log('not deep');
    //     //     setMobileMenuTimeout(true)
    //     // }
    //     mobileMenuTimeout ? setMobileMenuTimeout(false) : setMobileMenuTimeout(true);
    // }

    

    return(
        <div className='mobileMenuFull' 
            onClick={(e) => {
                props.toggleMobileMenu(e);
                // if(props.mobileMenu){
                //     console.log("OPEN")

                // } else {
                //     console.log("CLOSE")
                //     setTimeout(() => {
                //         manageMobileMenuTimeout();
                //     }, "1000")
                // }


                }
            } style={{opacity: props.mobileMenu && "0%", visbility: props.mobileMenu && 'hidden', left: props.mobileMenuTimeout && "500px"}}>
        {/* <div className='mobileMenuFull' onClick={(e) => {props.toggleMobileMenu(e)}} style={{opacity: props.mobileMenu && "0%"}}> */}


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




        </div>
    )
}

export default MobileMenu;