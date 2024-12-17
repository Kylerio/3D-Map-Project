import { Menu, X } from "lucide-react"
import { useState } from "react"

import { navItems } from "../data/data"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white/15 backdrop-blur-md">
        <div className="container px-4 mx-auto relative text-md">
            <div className="flex justify-between lg:justify-center items-center">
                <span className="text-1xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-400 text-transparent bg-clip-text">3D Map</span>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, data) => (
                        <li key={data}>
                            <a href={item.href} className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden flex">
                    <button onClick={toggleNavbar}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {open && (
                <div className="fixed right-0 z-20 bg-neutral-700 w-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, data) => (
                            <li key={data} className="py-4">
                                <a href={item.href} className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar