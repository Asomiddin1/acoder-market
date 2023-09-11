'use client';
import Link from "next/link"
import { useState } from "react";


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div>
      <div className="flex  bg-white h-[10vh] shadow justify-between items-center md:px-12
      px-4 py-2 w-full
      fixed top-0 z-50 border-b-slate-400 border">
        <Link href={'/'} className="text-[22px]">Acoder-Market</Link>

        <div className="flex items-center space-x-2.5 text-sm">
          <nav className="md:ml-auto  nav_ul items-center text-base
         justify-center">
            <Link href={'/'} className="mr-5 hover:text-gray-900">Home page</Link>
            <Link href={'/all-products'} className="mr-5 hover:text-gray-900">All products</Link>
            <Link href={'/contacts'}  className="mr-5 hover:text-gray-900">Contacts</Link>
            <Link href={'/shopping-cart'}>
              <button className="button bg-blue-600 text-white border-transparent
        hover:border-blue-600 hover:bg-transparent hover:text-blue-700">
                My bag
              </button>
            </Link>
          </nav>
          <div onClick={()=>setMenu(prev => !prev)} className="hidden flex-col nav_menu  gap-[3.7px]">
            <div className="w-[20px] rounded h-[3px] bg-[black]"></div>
            <div className="w-[20px] rounded h-[2.7px] bg-[black]"></div>
            <div className="w-[20px] rounded h-[3px] bg-[black]"></div>
          </div>

        </div>
      </div>
      {/* bars */}
      <div className="relative top-0 md:hidden block ">
        <div className={`fixed z-[49] w-full left-0 ${menu ? 'top-[10vh]':'top-[-100%]'} transition-all duration-500 bg-slate-100  h-full`}>
        <div className="flex flex-col items-center gap-y-10 pt-10">
        <Link onClick={()=>setMenu(prev => !prev)} href={'/'} className="mr-5 hover:text-gray-900">Home page</Link>
            <Link onClick={()=>setMenu(prev => !prev)} href={'/all-products'} className="mr-5 hover:text-gray-900">All products</Link>
            <Link href={'/contacts'} className="mr-5 hover:text-gray-900">Contacts</Link>
            <Link onClick={()=>setMenu(prev => !prev)} href={'/shopping-cart'}>
              <button className="button bg-blue-600 text-white border-transparent
        hover:border-blue-600 hover:bg-transparent hover:text-blue-700">
                My bag
              </button>
            </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

{/* */ }

