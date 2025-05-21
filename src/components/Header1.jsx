import React from 'react'

function Header1() {
    return (
        <div className='flex items-center justify-around  p-4'>
            <div className='logo text-xl '>
                logo
            </div>


            <div>
                <ul>
                    <li className='inline-block mx-4 text-xl'>Home</li>
                    <li className='inline-block mx-4 text-xl'>About</li>
                    <li className='inline-block mx-4 text-xl'>Contact-us</li>
                    <li className='inline-block mx-4 text-xl'>Blogs</li>
                    <li className='inline-block mx-4 text-xl'>Book</li>


                </ul>
            </div>
        </div>
    )
}

export default Header1
