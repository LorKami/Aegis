import React from 'react'
import "../Timeline/Timeline.css";

import WarriorLeft from '../../images/warrior.png'

const Timeline = () => {
  return (
    <div>




            <div className='TimeLineSection'>
                <div className='WarriorLeft'>
                    <img src={WarriorLeft}></img>
                </div>
            
<div className="roadmap">

<div className="timeline">
    <h2>Roadmap</h2>
    <ul>
        <li>
            <span>Phase 1</span>
            <div className="content">
                <p>
                    — Stealth Launch <br></br>
                    — Active Community Contests <br></br>
                    — Telegram Marketing <br></br>
                    — Aggressive Shilling & Raids <br></br>
                    — Website release <br></br>
                    — Coin Voting Sites <br></br>
                    — Storefront sneak peek <br></br>
                </p>
            </div>
        </li>

        <li>
            <span>Phase 2</span>
            <div className="content">
                <p>
                    — Coin sites advertising <br></br>
                    — Audit Completed <br></br>
                    — Press Releases <br></br>
                    — Partnerships <br></br>
                    — YouTube Campaign <br></br>
                </p>
            </div>
        </li>

        <li>
            <span>Phase 3</span>
            <div className="content">
                <p>
                    — Social Media Push Of Our Meme <br></br>
                    — White Paper Released <br></br>
                    — Ne utilities <br></br>
                    — Push Into Phase 4 - New Utility Revealed <br></br>
                </p>
            </div>
        </li>

    </ul>
</div>

</div>

</div>


    </div>
  )
}

export default Timeline