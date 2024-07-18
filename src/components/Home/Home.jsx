import React from 'react'
import './Home.css'
import { assets } from '../../assets/assets'

function Home() {
  return (
    <div className="home">
        <h1>wallpapers</h1>
        <div className="img-hero">
            <div className="left-img">
                <img src={assets.home1} alt="" />
                <div className="left-but">
                  <button className='but1'>shop now</button>
                  <button>learn more</button>
                </div>
            </div>
            <div className="right-img">
                <img src={assets.home2} alt="" />
                <p>We create art that appeal to the imagination, which everyone can enjoy indefinitely.</p>
            </div>
        </div>
    </div>
  )
}

export default Home