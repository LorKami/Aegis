import React from 'react'
import "../Footer/Footer.css";

import ImageTelegram from "../../images/telegram.png"
import ImageTwitter from "../../images/twitter.png"
import Columns from "../../images/columns.png"

const Footer = () => {
  return (
    <div>
        

    <div className='superfooter'>
      <div className='ColumnLeft'>
        <img src={Columns}></img>
      </div>
        <div className='footer'>
            <div className='footersocial'>
                <a className='telegram' href='link telegram' target='_blank'><img src={ImageTelegram}></img></a>
                <a className='twitter' href='link telegram' target='_blank'><img src={ImageTwitter}></img></a>
            </div>
            <p>2023 © Aegis Productions, All Rights Reserved</p>
        </div>
        <div className='ColumnRight'>
        <img src={Columns}></img>
        </div>
    </div>


    </div>
  )
}

export default Footer