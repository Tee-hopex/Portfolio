import '../styles/Sec2.css'

import sec2_image from '../assets/sec2_image.png'

function Sec2 () {

    return (
        <>
            <section id='s2' className=' section2'>
                <div className="sec-left">
                    <h1>About Me</h1>
                    <img src= {sec2_image} alt="" />
                    <p>
                        Passionate about creating web pages UI User Interface, I intend to develop my skills and do more beautiful and better project 
                    </p>

                </div>




                <div className="sec-right">

                </div>
            </section>
        </>
    )
}


export default Sec2