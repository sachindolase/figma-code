import img from '../assets/img1.svg'
import '../styles/aboutcode.scss';
const Aboutcode = () => {
    return (
        <>
            <div className="aboutController">
                <div className="aboutdescription">
                    <h2 className="descriptionTag">
                        Want anything to be easy with <span>LaslesVPN.</span>
                    </h2>
                    <p className="description">
                        Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
                    </p>
                    <button className='StartBtn'>
                        Get Started
                    </button>
                </div>
                <div className='descriptionImg'>
                    <img src={img}></img>
                </div>

            </div>

            <div className='aboutservices'>
                <div className='service'>
                    <a href='#' className="icon"><ion-icon  name="person"></ion-icon></a>
                    <p>90+<br /><span>Users</span></p>
                </div>
                <hr />
                <div className='service'>
                    <a href='#' className="icon"><ion-icon name="location"></ion-icon></a>
                    <p>30+<br /><span>Location</span></p>
                </div>
                <hr />
                <div className='service'>
                    <a href='#' className="icon"><ion-icon name="server"></ion-icon></a>
                    <p>50+<br /><span>Servers</span></p>
                </div>
            </div>
        </>
    )
}

export default Aboutcode;