import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";



function Header() {
    return (
        <div>
            <div className=''>
                <div className='flex items-center justify-around   bg-blue-800 p-4'>
                    <div className='flex items-center text-white'>
                        <IoMdCall />
                        <h2 >55555656566</h2>
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
