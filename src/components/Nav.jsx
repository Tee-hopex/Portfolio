import '../styles/Nav.css'

import logo from '../assets/logo.png'

function Nav() {

    return (
        <>
            <nav>
                <div className="nav-left">
                    <div className='bg-logo'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>

                <div className="nav-right">
                    <ul>
                        <li className= 'bg-services'>
                            <a href="">Services</a>
                        </li>
                        <li className='bg-project'>
                            <a href="">Projects</a>
                        </li>
                        <li className='bg-contact-me'>
                            <a href="">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;