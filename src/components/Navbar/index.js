import React from 'react'
import "../Navbar/Navbar.css"

import LogoIzq from "../../images/logo.png"
import ImageTelegram from "../../images/telegram.png"
import ImageTwitter from "../../images/twitter.png"


const Navbar = () => {
  return (
    <div>
      
<div className='navsuper'>
  <div className='nav-title'>
    <a href=""><img src={LogoIzq}></img></a>
  </div>
    <div className='nav'>
    <input type="checkbox" id="nav-check"></input>
    <div className='nav-header'></div>
    <div className='nav-btn'>
    <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>

    <div className='nav-links'>
                    <a href="#home">Home</a>
                    <a href="#tokenomic">Tokenomics</a>
                    <a href="#about">About</a>
                    <a href="#roadmap">Roadmap</a>
                    <a id="button-1" class="blocked" href="#">Marketplace</a>
    </div>
    <div className='imagesocial'>
      <a className='telegram' href='linktelegram' target='_blank'><img src={ImageTelegram}></img></a>
      <a className='twitter' href='twitterlink' target='_blank'><img src={ImageTwitter}></img></a>
    </div>

</div>
</div>

<div className='Waves'>
  {/* <img src={Waves}></img> */}
</div>

    </div>
  )
}

export default Navbar