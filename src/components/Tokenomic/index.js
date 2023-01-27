import React from 'react'
import "../Tokenomic/Tokenomic.css";

import ImageTokenomic from "../../images/logo.png"

const Tokenomic = () => {
  return (
    <div>
        
    <div className='Tokenomic'>

    <div className='BubbleSection'>
        <div className='InfoLeft'>
        <h2>AEGIS PROJECT </h2>
                    <p>AEGIS is a utility project, that will implement a NFT marketplace.
                    Aegis team is formed by Solana and ethereum devs. we aim to bring the nft utilities such as create your own nfts or collections on our plataform.
                    Holders of Aegis will have whitelist access to our nft collection</p>
                    <p>Aegis will be fairlaunched at Pandasale.</p>
                    <p>⭐ 7% Tax
                       ⭐ Liquidity locked
                       ⭐Tax: 9% Buy & Sell.</p>

        </div>
        <div className='ImageRight'>
                <img src={ImageTokenomic}></img>
        </div>
    </div>

    </div>

    <div className='Waves'>
  {/* <img src={Waves}></img> */}
</div>


    </div>
  )
}

export default Tokenomic