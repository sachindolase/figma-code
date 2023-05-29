import '../styles/help.scss';
import img from '../common-components/Vector.png';
const Help = () => {
    return (
        <>
            <div className="helpController">
                <div className="socialMediaLinks">
                <h2><img src={img}></img>LaslesVPN</h2>
                    <p><span>LaslesVPN</span><br/> is a private virtual network that has unique features and has high security.</p>
                    <div className="links">
                        <a href="#">https://www.facebook.com</a><br/>
                        <a href="#">https://www.twitter.com</a><br />
                        <a href="#">https://www.telegram.com</a>
                    </div>
                    <p>©2020Lasles<span>VPN</span></p>
                </div>
                <div className="socialMediaLinks">
                    <h2>Product</h2>
                    <a href="#">Download</a>
                    <a href="#">Pricing</a>
                    <a href="#">Locations</a>
                    <a href="#">Server</a>
                    <a href="#">Countries</a>
                    <a href="#">Blog</a> 
                </div>
                <div className="socialMediaLinks">
                    <h2>Engage</h2>
                    <a href="#">LaslesVPN ?</a>
                    <a href="#">FAQ</a>
                    <a href="#">Tutorials</a>
                    <a href="#">About Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="socialMediaLinks">
                    <h2>Earn Money</h2>
                    <a href="#">Affiliate</a>
                    <a href="#">Become Partner</a>
                </div>

            </div>
        </>
    )
}

export default Help;