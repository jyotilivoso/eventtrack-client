import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";



function Header() {
    return (
        <div>
            <div className='fixed top-0 left-0 right-0 z-50 '>
                <div className='flex items-center justify-around   bg-blue-800 p-2'>
                    <div className='flex items-center text-white'>
                        <IoMdCall />
                        <h2 >+91 8957585865</h2>
                    </div>
                    <div className='flex items-center text-xl text-white gap-2'>
                        <FaFacebookSquare />
                        <FaSquareInstagram/>
                        <FaWhatsappSquare/>
                    </div>
                    

                </div>



            </div>
        </div>
    )
}

export default Header
