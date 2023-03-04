import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import GlobalBtn from '../shared/GlobalBtn';
type Activeclass = {
    isActive: boolean
}

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    console.log(showMenu)
    const activeClass = ({ isActive }: Activeclass) => {
        return {
            color: isActive ? "#FF6B66" : '',
        }
    }

    const menuItems =
        <>
            <div className='lg:flex justify-between items-center'>
                <NavLink className='block uppercase py-2 lg:px-2 font-semibold transition duration-500 hover:text-primary-300' onClick={() => setShowMenu(!showMenu)} style={activeClass} to='/'>Home</NavLink>
                <NavLink className='block uppercase py-2 lg:px-2 font-semibold transition duration-500 hover:text-primary-300' onClick={() => setShowMenu(!showMenu)} style={activeClass} to='/benefits'>Benefits</NavLink>
                <NavLink className='block uppercase py-2 lg:px-2 font-semibold transition duration-500 hover:text-primary-300' onClick={() => setShowMenu(!showMenu)} style={activeClass} to='/classes'>Our Classes</NavLink>
                <NavLink className='block uppercase py-2 lg:px-2 font-semibold transition duration-500 hover:text-primary-300' onClick={() => setShowMenu(!showMenu)} style={activeClass} to='/contact'>Contact Us</NavLink>
            </div>
            <div className='lg:flex items-center'>
                <NavLink className='uppercase py-2 lg:px-2 font-semibold transition duration-500 hover:text-primary-300' onClick={() => setShowMenu(!showMenu)} to='#'>Sign In</NavLink>
                <div className='py-2 lg:px-2'>
                <GlobalBtn>Become a Member</GlobalBtn>
                </div>
            </div>
        </>

    return (
        <nav className='h-24 flex items-center lg:px-20'>
            <div className='flex justify-between items-center relative w-full'>
                <div className='pl-5 md:pl-10 lg:pl-0'>
                    <img src={Logo} alt="" />
                </div>
                <div className='block lg:hidden bg-secondary-500 p-2 rounded-full cursor-pointer mr-5 md:mr-10 lg:mr-0' onClick={() => setShowMenu(!showMenu)}>
                    <AiOutlineMenu size={25} />
                </div>
                <div className={`hidden ml-10 lg:flex justify-between items-center w-full transition-all ease-in-out duration-500`}>
                    {menuItems}
                </div>
                <div className={`flex justify-between lg:hidden w-full z-50 bg-primary-100 py-5 pl-10 pr-5 absolute transition-all ease-in-out duration-500 ${showMenu ? 'top-[-30px] ' : 'top-[-200px]'}`}>
                    {
                        showMenu &&
                        <>
                            <div>
                                {menuItems}
                            </div>
                            <div>
                                <MdOutlineCancel onClick={() => setShowMenu(!showMenu)} size={30} />
                            </div>
                        </>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;