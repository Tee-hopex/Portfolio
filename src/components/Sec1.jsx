import '../styles/Sec1.css'
import left_image from '../assets/left_img.png'

// import image from '../assets/image.png'
import image2 from '../assets/image2.png'

function Sec1 () {

    return (
        <>
            <section>
                <div className="sec1-left">
                    <div className="icons-container">
                        <div className='img1'>
                            <img src={left_image} alt="icon1" />
                        </div>
                        <div className='img2'>
                            <img src={left_image} alt="icon2" />
                        </div>
                        <div className='img3'>
                            <img src={left_image} alt="icon3" />
                        </div>
                        <div className='img4'>
                            <img src={left_image} alt="icon4" />
                        </div>
                        <div className='img5'>
                            <img src={left_image} alt="icon5" />
                        </div>
                        <div className='img6'>
                            <img src={left_image} alt="icon6" />                   </div>

                    </div>
                    <h1>
                        Tolu Hope                        
                    </h1>

                    <img src={left_image} alt="" />

                    <p>FullStack Web Developer</p>

                </div>
                <div className="sec1-right">
                    <div style={{backgroundImage: `url(${image2})`}} className="sec1-right-up">
                    </div>
                    <div style={{backgroundImage: `url(${image2})`}} className="sec1-right-down">
                    </div>

                </div>
            </section>
        </>
    )
}

export default Sec1