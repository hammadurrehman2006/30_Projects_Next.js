"use client"
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {


  return (
    <div className="navbar bg-base-100 shadow-sm justify-center">
    <div className="flex gap-2 justify-center">
      <div className="flex-1 text-center">
        <a className="btn btn-ghost text-white text-xl">Muhammad Hammad ur Rehman</a>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="Tailwind CSS Navbar component"
              src="/brght.jpg"
              height={150}
              width={150} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content text-white bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link href={"https://folio-2006.vercel.app"}>
              Portfolio
  
            
            </Link>
          </li>
          <li><Link href={"https://x.com/mhrehman2006"}>Twitter(X)</Link></li>
          <li><Link href={"https://www.linkedin.com/in/mhammadurrehman/"}>Linkedin</Link></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
