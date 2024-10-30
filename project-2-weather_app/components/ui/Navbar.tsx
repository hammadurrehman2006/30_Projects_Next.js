"use client"
import Image from 'next/image';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-white text-xl sm:text-[20px]">Muhammad Hammad ur Rehman</a>
      </div>
      <div className="flex-none gap-2">
        <div
          className="dropdown dropdown-end"
          onBlur={() => setDropdownOpen(false)} // Close when clicking outside
          onClick={handleDropdownToggle} // Toggle dropdown on click
        >
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="image of M Hammad ur Rehman"
                src="/brght.jpg"
                width={200}
                height={200}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content text-white bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${dropdownOpen ? 'block' : 'hidden'}`}
          >
            <li>
              <a href="https://www.linkedin.com/in/mhammadurrehman/" target="_blank" className="justify-between">
                Linkedin
              </a>
            </li>
            <li><a href="https://github.com/hammadurrehman2006" target="_blank">GitHub</a></li>
            <li><a href="https://www.instagram.com/m.hammadurrehman2006" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
