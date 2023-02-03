import React, {useState} from 'react';
import '../styles/NewsHomepage.scss';
import MobileMenu from './MobileMenu';

import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/images/icon-menu.svg'
import mobileHeadlineImage from '../assets/images/image-web-3-mobile.jpg'




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

                        <Logo viewBox='16 0 57 57' id='logoIcon' className='masthead'/>

                        <MenuIcon viewBox='10 -1 20 20' 
                            height={'20px'}
                            width={'50px'}
                             id='menuIcon'
                             onClick={(e) => {
                                handleOpenMenu(e);
                             }}/>

                    </div>

                    <div className='newsHomepageHeadline'>

                        <img src={mobileHeadlineImage} alt='Colorful blocks in an elaborate, aesthetically pleasing pattern' className='mobileHeadlineImage'/>

                        <div className='newsHomepageHeadlineContent'>
                            <div className='newsHomepageHeadlineHeader'>
                                The Bright Future of Web 3.0?
                            </div>

                            <div className='newsHomepageHeadlineDetails'>
                                <div className='newsHomepageHeadlineLead'>
                                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                                </div>
                                <button className='newsHomepageHeadlineDetailsMore'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='newsHomepageNewStoriesContainer'>

                        <div className='newsHomepageNewStoriesHeader'>
                            New
                        </div>

                        <div className='newsHomepageNewStory'>
                            <div className='newsHomepageNewStoryHeader'>
                                Hydrogen VS Electric Cars
                            </div>
                            <div className='newsHomepageNewStoryContent'>
                                Will hydrogen-fueled cars ever catch up to EVs?
                            </div>

                        </div>

                        <hr className='newsHomepageNewStorySeparator'/>

                        <div className='newsHomepageNewStory'>
                            <div className='newsHomepageNewStoryHeader'>
                                The Downsides of AI Artistry
                            </div>
                            <div className='newsHomepageNewStoryContent'>
                                What are the possible adverse effects of on-demand AI image generation?
                            </div>

                        </div>

                        <hr className='newsHomepageNewStorySeparator'/>

                        <div className='newsHomepageNewStory'>
                            <div className='newsHomepageNewStoryHeader'>
                                Is VC Funding Drying Up?
                            </div>
                            <div className='newsHomepageNewStoryContent'>
                                Private funding by VC firms is down 50% YOY. We take a look at what that means.
                            </div>

                        </div>

                    </div>

                    

                    I am News Homepage Component! asdkjh aslkdhlaksjhdlkjahsdkjhaskljdhlasjdhlkajshdlkjahsdlkjhaslkdhslkjdhlkasjhdljas

                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


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