import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    const [click, setClick]= useState(false);
    const handleClick = () =>setClick(!click);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <link to="/" className='navbar-logo'>
                    TRVL <i className='fab fa-typo3'/>
                </link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
            </div>
        </nav>
    )
}
export default Navbar;