import React, {useState} from 'react';
import '../styles/NewsHomepage.scss';
import MobileMenu from './MobileMenu';

import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/images/icon-menu.svg'



function NewsHomepage(props) {

    const [mobileMenu, toggleMobileMenu] = useState(false);


    function handleOpenMenu(e) {
        e.preventDefault();
        // console.log(`You clicked the open menu button`);
        console.log(e.target.className);
        if(e.target.className
            === 'mobileMenuSidePane'){
                // toggleMobileMenu(false);
                console.log('you clicked the side pade')
            }
            else if (e.target.className === 'mobileMenuFull') {
                toggleMobileMenu(false)
            }
            else {
                mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true);
            }
        
    }
    

    return(
        <div className='newsHomepage'>
            <div className='newsHomepageWrapper'>

                <div className='newsHomepageContent'>

                    <div className='newsHomepageNav'>

                        <Logo viewBox='16 0 57 57' id='logoIcon'/>

                        <MenuIcon viewBox='10 -1 20 20' 
                            height={'20px'}
                            width={'50px'}
                             id='menuIcon'
                             onClick={(e) => {
                                handleOpenMenu(e);
                             }}/>

                    </div>

                    

                    I am News Homepage Component! asdkjh
                </div>

                {mobileMenu && <MobileMenu 
                                    toggleMobileMenu={handleOpenMenu}
                                    />}


                {/* <MobileMenu/> */}

            </div>
            
        </div>
    )
}

export default NewsHomepage;