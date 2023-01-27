import React from 'react'
import "../Monitor/Monitor.css";

import HeroImage from "../../images/hero.png"


const Monitor = () => {
  return (
    <div>
      
    <div className='Monitor'>

    <div className='HeroInfo'>
      <div className='HeroText'>
      <h2>Aegis the next gem in Arbitrum</h2>
      <p>Welcome to the <span>Aegis</span> is a token built on the <span>Arbitrum</span> aiming to get the strongest
                community out of every meme coin!
                We do this through active engagement with the community, contests & raids combined with marketing to
                spread awareness about us.
                <br></br>
                From an experienced team and a strong community, <span>Aegis</span> is going to be the next moonshot!
            </p>
      </div>
    </div>

    <div className='HeroImage'>
      <img src={HeroImage}></img>
    </div>


    </div>

    <div className='Waves'>
  {/* <img src={Waves}></img> */}
</div>

    </div>
  )
}

export default Monitor