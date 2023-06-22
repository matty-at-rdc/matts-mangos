import React from 'react'
import { Link } from 'react-router-dom'

import "./Home.css"

export default () => (
    <div className='home'>
        <h1 className='title'>Matt's Mangos 🥭</h1>
        <div className='poem'>
            <p>In a tropical land, where sunshine dances,</p>
            <p>Mangos thrive, nature's sweetest chances.</p>
            <p>With golden skin and fragrant perfume,</p>
            <p>Juicy flesh, a taste that makes hearts bloom.</p>
            <br/>
            <p>Swaying on trees, like ripe orbs of delight,</p>
            <p>Their luscious sweetness, a tropical bite.</p>
            <p>Succulent kisses, the tangy and sweet,</p>
            <p>A symphony of flavors, a heavenly treat.</p>
            <br/>

            <p>Beneath the sun's gaze, they ripen with care,</p>
            <p>Whispering secrets of faraway air.</p>
            <p>Each bite reveals a paradise untold,</p>
            <p>Mangos, nature's treasure, worth more than gold.</p>
            <small>-- Poem written by Robots</small>
        </div>
        <div className='hero'>
            <h2>What if everything you ever wanted was a mango?</h2>
        </div>
        <div className='invitation'>
            <h2 className='intro'>Am I in Heaven? What is this?</h2>
            <p>No, it's not heaven, but good guess! You're at the website for Matt's Mangos. Here at Matt's Mangos 🥭 you will find a little about us and you will be able to order ripe delicious mangos. Check out our <Link to='/menu'>Menu</Link> and our <Link to='/about'>About</Link> page and be prepared to find the <span className='nonsense'>mango-if-cent</span>.</p>
        </div>
    </div>
)
