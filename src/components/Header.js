import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id='home' className='header-wrapper'>
            <div className='main-info'>
                <h1>WEB DEVELOPMENT</h1>
                <Typed
                //自行定義class 
                className='typed-text'
                //所有要顯示的內容
                strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                //打出來的速度
                typeSpeed={40}
                //回退的速度
                backSpeed={60}
                //無限循環，否則打完一次就不會打第二次了
                loop
                />
                <a href='/' className="btn-main-offer">
                    CONTACT ME
                </a>
            </div>
        </div>
    )
}

export default Header
