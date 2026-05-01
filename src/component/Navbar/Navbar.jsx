'use client'
import { ChartLine, Clock4, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

  const pathname = usePathname();

    const link = <>
  <li className="font-semibold"><Link href='/' 
  className={`flex items-center hover:bg-[#244D3F] hover:text-white ${
          pathname === "/" ? "text-[#244D3F] border-b-3 border-[#244D3F]" : ""
        }`} ><House className="-mr-1" size={16}/>Home</Link></li>



  <li className="font-semibold"><Link href='/timeline'
   className={`flex items-center hover:bg-[#244D3F] hover:text-white ${
          pathname === "/timeline" ? "text-[#244D3F] border-b-3 border-[#244D3F]" : ""
        }`}  ><Clock4 className="-mr-1" size={16} />Timeline</Link></li>


  <li className="font-semibold"><Link href='/stats'
   className={`flex items-center hover:bg-[#244D3F] hover:text-white ${
          pathname === "/stats" ? "text-[#244D3F] border-b-3 border-[#244D3F]" : ""
        }`} ><ChartLine className="-mr-1" size={16} />Stats</Link></li>
  
  </>
    return (
        <div>
               <div className=" bg-base-100 shadow-sm">
              
              <div className="w-11/12 mx-auto navbar ">
                <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <h1 className=" cursor-pointer text-2xl font-extrabold">Keen<span className="font-medium text-[#244D3F]">Keeper</span></h1>
  </div>
  <div className="navbar-end">
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  </div>
              </div>
</div>
        </div>
    );
};

export default Navbar;