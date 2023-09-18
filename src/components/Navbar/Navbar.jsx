import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuFold,  AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'About', id: 'about', path: '/about' },
        { name: 'Services', id: 'services', path: '/services' },
        { name: 'Contact', id: 'contact', path: '/contact' },
        { name: 'Blog Post', id: 'blog-post', path: '/blog/:id' },
      ];      
    return (
        <nav className="bg-yellow-200 p-4">
            <div className="md:hidden">
                
                <button className="block text-xl text-black" onClick={() => setOpen(!open)}>
                    {
                        open ? <AiOutlineMenuFold/> 
                        : <AiOutlineClose/>
                    }
                   
                </button>
            </div>
            <ul className={`
                absolute 
                duration-1000
                p-4
                ${open ? '-left-40' : 'left-4'}
                bg-yellow-200 text-black  
                md:flex md:justify-center gap-8  md:static
            `}>
            {
                routes.map(route => <Link key={route.id} route={route} />)
            }
            </ul>
        </nav>
    );
};

export default Navbar;