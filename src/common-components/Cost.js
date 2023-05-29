import '../styles/cost.scss'
import boxImg from '../assets/Free.svg'

const Cost = () => {
    return (
        <>
            <div className='costController'>
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                <div className='costCard'>
                    <div className='costCard'>
                        <div className='costItems'>
                            <img src={boxImg} />
                            <h2>Free Plan</h2>
                            <ul>
                                <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>No Traffic Logs</li>
                                <li>Works on All Devices</li>
                            </ul>
                        </div>
                        <div className='cost'>
                        <p>Free</p>
                        <button>Select</button>
                        </div>
                    </div>
                    
                    <div className='costCard'>
                        <div className='costItems'>
                            <img src={boxImg} />
                            <h2>Standard Plan</h2>
                            <ul>
                                <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>Yes Traffic Logs</li>
                                <li>Works on All Devices</li>
                                <li>Connect Anyware</li>
                            </ul>
                        </div>
                        <div className='cost'>
                        <p>$9<span> / mo </span></p>
                        <button>Select</button>
                        </div>
                    </div>
                    
                    <div className='costCard'>
                        <div className='costItems'>
                            <img src={boxImg} />
                            <h2>Premium Plan</h2>
                            <ul>
                            <li>Unlimited Bandwitch</li>
                                <li>Encrypted Connection</li>
                                <li>Yes Traffic Logs</li>
                                <li>Works on All Devices</li>
                                <li>Connect Anyware</li>
                                <li>Get New Features</li>
                            </ul>
                        </div>
                        <div className='cost'>
                        <p>$12<span> / mo </span></p>
                        <button>Select</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Cost;