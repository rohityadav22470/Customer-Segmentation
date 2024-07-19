import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            {!isLoginOrRegisterPage && (
                <Link className='btn' to="/login" role='button'>LogIn / Register</Link>
            )}
        </nav>
    );
}

export default Navbar;