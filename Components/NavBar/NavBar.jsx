import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';


const NavBar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navBar flex justify-between items-center p-10'>
        <div className='logoDiv'>
            <h1 className='logo text-[25px] text-blueColor'><strong>Climdes</strong>interns</h1>
        </div>

        <div className="hidden md:flex menu gap-8">
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Career</li>
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Internship</li>
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blog</li>
        </div>

        <div className="menu md:hidden w-[100%] ml-5 relative">
          <BiMenu onClick={toggleMenu} className="text-blueColor text-2xl cursor-pointer" />

        {isMenuOpen && (
          <div className="menuItems absolute top-16 right-0 bg-blue-300 text-white p-4 rounded shadow-md">
            <li className='menuList text-[#272727] hover:text-white p-4'>Career</li>
            <li className='menuList text-[#272727] hover:text-white p-4'>Jobs</li>
            <li className='menuList text-[#272727] hover:text-white p-4'>Internship</li>
            <li className='menuList text-[#272727] hover:text-white p-4'>Contact</li>
            <li className='menuList text-[#272727] hover:text-white p-4'>Blog</li>
          </div>
      )}
    </div>

    </div>
  )
}

export default NavBar
