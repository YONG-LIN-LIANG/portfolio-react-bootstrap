import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const SingleLi = ({
  name,
  to,
  setToggleActive,
  setToggleHamburger,
  toggleNum
}) => {
  const handleClick = e => {
    e.target.innerHTML === name && setToggleActive(toggleNum)
    setToggleHamburger(false)
  }
  return (
    <li className='singleLi'>
      <Link
        onClick={e => handleClick(e)}
        smooth={false}
        to={to}
        offset={-90}
        duration={1000}
      >
        {name}
      </Link>
    </li>
  )
}

const Navbar = () => {
  const [toggleActive, setToggleActive] = useState(0)
  const [toggleHamburger, setToggleHamburger] = useState(false);
  let navLi = [
    {
      name: 'HOME',
      to: 'home',
      toggleNum: 0
    },
    {
      name: 'SERVICES',
      to: 'services',
      toggleNum: 1
    },
    {
      name: 'EXPERIENCE',
      to: 'experience',
      toggleNum: 2
    },
    {
      name: 'PORTFOLIO',
      to: 'portfolio',
      toggleNum: 3
    },
    {
      name: 'CONTACTS',
      to: 'contacts',
      toggleNum: 4
    }
  ]

  const handleHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  }
  return (
    <div
      className='header d-flex justify-content-center'
    >
      <div
        className='w-100 container d-flex justify-content-between align-items-center'
      >
        <div style={{ cursor: 'pointer' }} className='left'>
          <Link smooth={false} to='home' offset={-90} duration={1000}>
            STEVEN
          </Link>
        </div>

        <div onClick={handleHamburger} className='hamburger'>
          <FontAwesomeIcon icon={faBars} />
        </div>

        
        <div className={`navbar ${toggleHamburger===true ?'open' :''} d-flex flex-column justify-content-center`}>
          <div className='indicator-area'>
            <div
            className='indicator'
            style={{ left: `${toggleActive * 20}%` }}
          ></div>
          </div>
          
          <ul
          className='d-flex'
         
          >
            {navLi.map((i, index) => (
              <SingleLi
                key={index}
                setToggleHamburger={setToggleHamburger}
                toggleNum={i.toggleNum}
                setToggleActive={setToggleActive}
                name={i.name}
                to={i.to}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
