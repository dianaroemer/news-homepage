import React, {useState} from 'react';
import '../styles/NewsHomepage.scss';
import MobileMenu from './MobileMenu';




function NewsHomepage(props) {

    return(
        <div className='newsHomepage'>
            <div className='newsHomepageWrapper'>

                <div className='newsHomepageContent'>
                    I am News Homepage Component! asdkjh
                </div>

                <MobileMenu/>

            </div>
            
        </div>
    )
}

export default NewsHomepage;