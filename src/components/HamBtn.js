import React from 'react'

const HamBtn = ({handleHamburger, toggleHamburger}) => {
    const handleClick = () => {
        handleHamburger()
    }
    return (
        <div onClick={handleClick} className={`menu-btn ${toggleHamburger===true ?'open' :''}`}>
        <div className="menu-btn__burger">

        </div>
    </div>
    )
}

export default HamBtn
