import React from 'react'
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        <select className='lang'>
          <option selected lang='en' value="/in/">English</option>
          <option lang='hi' value="/in-hi/" data-language="hi" data-country="IN">हिन्दी</option>
        </select>
    </div>
  )
}

export default NavBar