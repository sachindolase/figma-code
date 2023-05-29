import img2 from '../assets/img2.svg'
import '../styles/quality.scss';

const Quality = () => {
    return (
        <>
            <div className="qualityController">
                <div className='img'>
                    <img src={img2} />
                </div>
                <div className='qualityDescription'>
                    <h2>We Provide Many Features You Can Use</h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul>
                        <li>Powerfull online protection.</li>
                        <li>Internet without borders.</li>
                        <li>Supercharged VPN</li>
                        <li>No specific time limits.</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Quality;