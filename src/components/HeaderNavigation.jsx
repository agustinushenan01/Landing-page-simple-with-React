import { useState, useEffect } from 'react';
import '../index.css';

function HeaderNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* navigation */}
            <nav className={`bg-${scrolled ? 'white' : 'transparent'} fixed z-50 inset-x-0 top-0 justify-between ${scrolled ? 'bg-opacity-75 shadow-lg top-0' : ''}`}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between z-50">
                        <div>
                            <h1 className={`font-medium ${scrolled ? 'text-black' : 'text-white'}`}>Competense 1</h1>
                        </div>
                        <div className="hidden space-x-4 sm:flex">
                            <a href="/"
                                className={`text-${scrolled ? 'black' : 'white'} bg-primary-500 rounded-md items-center hover:text-white flex hover:bg-primary-600 px-3 py-2 text-sm font-medium`}>Home</a>
                            <a href="#"
                                className={`text-${scrolled ? 'black' : 'white'} hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Products</a>
                            <a href="#AboutUs"
                                className={`text-${scrolled ? 'black' : 'white'} hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>About</a>
                            <a href="#Contacts"
                                className={`text-${scrolled ? 'black' : 'white'} hover:bg-primary-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}>Contacts</a>
                        </div>

                        {/* mobile view */}
                        <div className={`sm:hidden z-50 ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu" style={{ backgroundColor: scrolled ? '#ffffff' : 'transparent' }}>

                            <div
                                className={`bg-${scrolled ? 'white' : 'transparent'} space-y-1 px-2 pb-3 pt-2 flex flex-col absolute ${scrolled ? 'bg-opacity-75' : ''} top-16 left-0 right-0 shadow-lg rounded-md border-y-2 border-y-figmagray-300`}>
                                <a href="#"
                                    className={`text-${scrolled ? 'black' : 'white'} bg-primary-500 rounded-md items-center hover:text-white hover:bg-primary-600 block px-3 py-2 text-base font-medium`}>Home</a>
                                <a href="#"
                                    className={`text-${scrolled ? 'black' : 'white'} hover:bg-primary-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Products</a>
                                <a href="#"
                                    className={`text-${scrolled ? 'black' : 'white'} hover:bg-primary-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>About</a>
                                <a href="#"
                                    className={`text-${scrolled ? 'black' : 'white'} hover:bg-primary-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Contacts</a>
                            </div>
                        </div>

                        {/* icon menu */}
                        <svg id="burger-menu" className={`block h-6 w-6 sm:hidden ${scrolled ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" aria-hidden="true" onClick={toggleMobileMenu}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderNavigation;
