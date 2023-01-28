import React, {useState} from 'react';
import '../styles/NewsHomepage.scss';
import MobileMenu from './MobileMenu';

import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/images/icon-menu.svg'



function NewsHomepage(props) {

    const [mobileMenu, toggleMobileMenu] = useState(true);
    const [mobileMenuTimeout, setMobileMenuTimeout] = useState(true);


    function handleOpenMenu(e) {
        e.preventDefault();
        console.log(`You clicked the open menu button`);
        // console.log(e.target.className);
        console.log()
        if(e.target.className
            === 'mobileMenuSidePane'){
                // toggleMobileMenu(false);
                console.log('you clicked the side panel')
        }
        else if (e.target.className === 'mobileMenuFull' && mobileMenu) {
            console.log('here?')
            toggleMobileMenu(false)
        }
        else if (mobileMenuTimeout) {
            console.log('OPEN')
            mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true);
            setMobileMenuTimeout(false);
        }
        else {
            console.log('CLOSE')
            mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true);
            setTimeout( () => {
                setMobileMenuTimeout(true);
                console.log('timeout logged');
            }, 500);
            

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

                {/* {mobileMenu && <MobileMenu 
                                    toggleMobileMenu={handleOpenMenu}
                                    mobileMenu={mobileMenu}
                                    />} */}

                <MobileMenu 
                    toggleMobileMenu={handleOpenMenu}
                    mobileMenu={mobileMenu}
                    mobileMenuTimeout={mobileMenuTimeout}
                />


                {/* <MobileMenu/> */}

            </div>
            
        </div>
    )
}

export default NewsHomepage;