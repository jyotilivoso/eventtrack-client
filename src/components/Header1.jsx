import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserRoll, logout } from '../services/axiosClient';
import { Menu, X } from 'lucide-react';

function Header1() {
    const [menuOpen, setMenuOpen] = useState(false);
    const userRole = getUserRoll();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="bg-white shadow-md fixed w-full top-10 left-0 z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
                <div className="text-xl font-bold">Logo</div>

                {/* Hamburger Icon */}
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        {menuOpen ? <x /> : <Menu />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-xl items-center">
                    {userRole === "Admin" ? (
                        <>
                            <Link to="/admin">Home</Link>
                            <Link to="#">Add Client</Link>
                            <Link to="#">Add Place</Link>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="#">Contact-us</Link>
                            <Link to="#">Blogs</Link>
                            <Link to="/dest">Book</Link>
                            <a
                                href="https://wa.me/916371372865"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join As A Driver
                            </a>
                        </>
                    )}
                </nav>
            </div>

            {/* Mobile Modal Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/70 z-40 flex flex-col items-center justify-start pt-20 space-y-6 text-lg text-white">
                    {/* Close button */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 text-white text-3xl z-50"
                    >
                        <X />
                    </button>

                    {/* Menu Links */}
                    <div className="bg-white text-black w-10/12 rounded-lg p-6 space-y-4 text-center flex flex-col">
                        {userRole === "Admin" ? (
                            <>
                                <Link to="/admin" onClick={closeMenu}>Home</Link>
                                <Link to="#" onClick={closeMenu}>Add Client</Link>
                                <Link to="#" onClick={closeMenu}>Add Place</Link>
                                <button onClick={() => { logout(); closeMenu(); }}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/" onClick={closeMenu}>Home</Link>
                                <Link to="/" onClick={closeMenu}>About</Link>
                                <Link to="#" onClick={closeMenu}>Contact-us</Link>
                                <Link to="#" onClick={closeMenu}>Blogs</Link>
                                <Link to="/dest" onClick={closeMenu}>Book</Link>
                                <a
                                    href="https://wa.me/916371372865"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                >
                                    Join As A Driver
                                </a>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header1;
