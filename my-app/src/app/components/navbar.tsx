"use client"
import Link from "next/link" 
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
 
const clickHandler = ()=>{
   setIsOpen(!isOpen) 
 
}
  return (
    <div>
      <header>
      <button title="button" onClick={clickHandler} className="text-white font-semibold ml-6 mt-2 md:hidden lg:hidden block">{isOpen ? <FaTimes/> : <FaBars/> } </button>

        {/* for large screens */}
        <nav className="hidden md:block lg:block">
            <ul className="flex flex-row gap-6 items-center justify-center py-3 text-white font-semibold">
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/"} > Home</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/about"}> About</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/projects"}>Projects</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/skills"}>Skils</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
          {isOpen && 
          <nav className="md:hidden lg:hidden block ">
            <ul className="flex flex-col gap-3 items-start py-1 text-white font-semibold">
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/"} onClick={clickHandler}> Home</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/about"} onClick={clickHandler}> About</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/projects"} onClick={clickHandler}>Projects</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/skills"} onClick={clickHandler}>Skils</Link></li>
                <li className="hover:bg-white/10 px-6 py-3 rounded-xl"><Link href={"/contact"} onClick={clickHandler}>Contact</Link></li>
            </ul>
          </nav>}
      </header>
    </div>
  )
}
