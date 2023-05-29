import React from 'react'
import img from '../common-components/Vector.png';
import '../styles/nav.scss';
import Aboutcode from "./Aboutcode";
import Quality from "./Quality";
import Cost from "./Cost";
import Test from "./Test";
import Help from "./Help";



const Nav = () => {
    return (
        <>
            <div className="navController">
                <div className="navLogo">
                    
                    <h1 className="HeadingLogo"><img src={img}></img>Lasles<span>VPN</span></h1>
                </div>
                <div className="navOptionsBox">
                    <a href={Aboutcode}><button className="nevOptions">About</button></a>
                    <a href={Quality}><button className="nevOptions">Features</button></a>
                    <a href={Cost}><button className="nevOptions">Pricing</button></a>
                    <a href={Test} ><button className="nevOptions">Testimonials</button></a>
                    <a href={Help}><button className="nevOptions">Help</button></a>
                </div>
                <div className="navButtonsBox">
                    <button className="navBtn">Sign In</button>
                    <button className="navBtn">sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Nav;