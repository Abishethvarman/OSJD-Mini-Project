import React from 'react'
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='bg-black py-4 px-20 flex items-center'>
            <div className=" uppercase text-3xl font-extrabold text-white ">OSJD</div>

            <ul className=' flex space-x-10 m-auto'>
                <Link to="/"><li className='uppercase font-bold text-white'>sports</li></Link>
                <Link to='/about'> <li className='uppercase font-bold text-white'>about us</li> </Link>
                <Link to='/service'><li className='uppercase font-bold text-white'>services</li> </Link>
                <Link to='/contact'><li className='uppercase font-bold text-white'>contacts</li></Link>

            </ul>

            <div className="flex space-x-4">
                <MdSearch className=' text-2xl text-white' />
                <MdAccountCircle className=' text-2xl text-white' />
            </div>
        </div>
    )
}

export default Header