import React, {useState} from 'react';
import '../styles/NewsHomepage.scss';
import MobileMenu from './MobileMenu';

import {ReactComponent as Logo} from '../assets/images/logo.svg'
import {ReactComponent as MenuIcon} from '../assets/images/icon-menu.svg'
import mobileHeadlineImage from '../assets/images/image-web-3-mobile.jpg'

import newsThumbnailRetroPCs from '../assets/images/image-retro-pcs.jpg';
import newsThumbnailLaptops from '../assets/images/image-top-laptops.jpg';
import newsThumbnailGamingGrowth from '../assets/images/image-gaming-growth.jpg';



function NewsHomepage(props) {

    const [mobileMenu, toggleMobileMenu] = useState(true);
    const [mobileMenuTimeout, setMobileMenuTimeout] = useState(true);


    function handleOpenMenu(e) {
        // e.preventDefault();
        // console.log(`You clicked the open menu button`);
        // console.log(e.target.className);
        if(e.target.className
            === 'mobileMenuSidePane'){
                // toggleMobileMenu(false);
                console.log('you clicked the side panel')
        }
        else if (e.target.className === 'mobileMenuFull' && mobileMenu) {
            // console.log('here?')
            toggleMobileMenu(false)
        }
        else if (mobileMenuTimeout) {
            // console.log('OPEN')
            mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true);
            setMobileMenuTimeout(false);
        }
        else {
            // console.log('CLOSE')
            mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true);
            setTimeout( () => {
                setMobileMenuTimeout(true);
                // console.log('timeout logged');
            }, 500);
            

        }
        
    }
    

    return(
        <div className='newsHomepage'>
            <div className='newsHomepageWrapper'>

                <div className='newsHomepageContent' id="home">

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

                    <div className='newsHomepageNewStoriesContainer' id='new-stories'>

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
                            <div className='newsHomepageNewStoryContent' id='newsHomepageNewFinalStory'>
                                Private funding by VC firms is down 50% YOY. We take a look at what that means.
                            </div>

                        </div>

                    </div>

                    <div className='newsHomepageStoriesContainer' id='popular-stories'>
                        <article className='newsHomepageStoryContainer'>
                            <img src={newsThumbnailRetroPCs} alt='An old computer terminal lit in radical red and blue light' className='newsHomepageStoryThumbnail'/>


                             <div className='newsHomepageStoryContent'>
                                <h2 className='newsHomepageStoryNumber'>
                                    01
                                </h2>
                                <h3 className='newsHomepageStoryTitle'>
                                    Reviving Retro PCs
                                </h3>
                                <p className='newsHomepageStoryDescription'>
                                    What happens when old PCs are given modern upgrades?
                                </p>
                             </div>
                        </article>

                        <article className='newsHomepageStoryContainer'>
                            <img src={newsThumbnailLaptops} alt='XXXUPDATEXXX' className='newsHomepageStoryThumbnail'/>


                             <div className='newsHomepageStoryContent'>
                                <h2 className='newsHomepageStoryNumber'>
                                    02
                                </h2>
                                <h3 className='newsHomepageStoryTitle'>
                                    Top 10 Laptops of 2022
                                </h3>
                                <p className='newsHomepageStoryDescription'>
                                    Our best picks for various needs and budgets.
                                </p>
                             </div>
                        </article>

                        <article className='newsHomepageStoryContainer' id='newsHomepageFinalStoryContainer'>
                            <img src={newsThumbnailGamingGrowth} alt='XXXUPDATEXXX' className='newsHomepageStoryThumbnail'/>


                             <div className='newsHomepageStoryContent'>
                                <h2 className='newsHomepageStoryNumber'>
                                    03
                                </h2>
                                <h3 className='newsHomepageStoryTitle'>
                                    The Growth of Gaming
                                </h3>
                                <p className='newsHomepageStoryDescription'>
                                    How the pandemic has sparked fresh opportunities.
                                </p>
                             </div>
                        </article>
                    </div>

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