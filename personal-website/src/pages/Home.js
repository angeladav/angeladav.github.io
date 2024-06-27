import '../styling/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home-main-content'>
                <div className='home-photo-container'>
                    <img className='home-photo' src="./images/pictureofme.png">
                    </img>
                </div>
                <div className='home-text-container'>
                    <div className='home-title'>
                        Hi! I’m
                    </div>
                    <div className='home-title'>
                        Angela Davis.
                    </div>
                    <div className='home-regular-text'>
                        Software and Computer Engineer. Graduate of Northwestern University, with a B.S. in Computer Engineering and a M.S. in Computer Science.
                    </div>
                </div>
            </div>
            <div className='home-social-media'>
                <div className='home-icon-container'>
                    <img className='home-icon' src="./images/linkedin.svg"> </img>
                    <img className='home-icon' src="./images/github.svg"> </img>
                    <img className='home-icon' src="./images/figma.svg"> </img>
                </div>
            </div>
        </div>
    );
}

export default Home;