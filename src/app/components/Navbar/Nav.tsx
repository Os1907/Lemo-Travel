'use client';

import { useEffect, useRef ,useState} from 'react';
import Link from 'next/link';
import { HiOutlineMenu } from "react-icons/hi";
// import blackLogo from '../../../Images/Black.png';
// import whiteLogo from '../../../Images/white.png'; 
import { arabicFont } from '@/helper/font';
import { BsListNested } from 'react-icons/bs';

export default function Navbar() {
  // const arabicFont= arabicFont;
  const Links = [
    {
      name: 'الصفحة الرئيسية',
      link: '/',
    },
    {
      name: 'من نحن؟',
      link: '/about',
    },
    {
      name: 'الخدمات',
      link: '/services',
    },
    {
      name:"العروض",
      link: '/offers',
    },
    {
      name: 'التواصل',
      link: '/contact',
    }

    
     
    ];

  const prevScrollPos = useRef(0);
  const navbarRef = useRef(null);
  const bg = useRef<HTMLImageElement | null>(null);
  const logoRef = useRef<HTMLImageElement>(null); 
  const mobileMenuRef = useRef<HTMLImageElement>(null); 

  const toggleMenu = () => {
    const menu = mobileMenuRef.current as HTMLElement | null;
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
    setOpen(!open);
  };

  const [open, setOpen] = useState(true)
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navBar = navbarRef.current as HTMLElement | null;

    if (navBar) {
      if (prevScrollPos.current > currentScrollPos || currentScrollPos < 10) {
        navBar.style.top = '1.5rem';
        bg?.current?.classList.add('bg-black');
        bg?.current?.classList.remove('bg-white');
        logoRef?.current?.classList.remove('text-white'); //
        logoRef?.current?.classList.add('text-black'); //

        // if (logoRef.current) {
        //   logoRef.current.src = whiteLogo.src; 
        // }
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.add('text-white');
          link.classList.remove('text-black');
        });
        document.getElementById('navBtn')?.classList.add('text-white');
        document.getElementById('navBtn')?.classList.remove('text-black');
        mobileMenuRef?.current?.classList.add('bg-black' , "text-white");
        mobileMenuRef?.current?.classList.remove('bg-white', "text-black");
        logoRef?.current?.classList.add('text-white');  //

      } else {
        navBar.style.top = '-5rem';
      }
    }

    if (currentScrollPos === 0) {
      bg?.current?.classList.remove('bg-black');
      bg?.current?.classList.add('bg-white');
      logoRef?.current?.classList.remove('text-white');  //
        logoRef?.current?.classList.add('text-black'); //
      // if (logoRef.current) {
      //   logoRef.current.src = whiteLogo.src; 
      // }
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-black');
      });
      document.getElementById('navBtn')?.classList.remove('text-white');
      document.getElementById('navBtn')?.classList.add('text-black');
      mobileMenuRef?.current?.classList.remove('bg-black' , "text-white");
        mobileMenuRef?.current?.classList.add('bg-white', "text-black");
    }

    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    console.log(logoRef.current?.classList)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      dir="rtl"
      className="fixed w-full z-50 transition-all duration-300 top-6"
    >
      <div
        ref={bg}
        className="max-w-7xl mx-2 lg:mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-full transition-colors duration-300"
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              {/* <img
                ref={logoRef}
                src={blackLogo.src} 
                alt="logo"
                className="h-14 w-auto"
              /> */}
              <p ref={logoRef}  className='text-3xl  uppercase font-bold enFont text-black'>
                LemoOo
              </p>
            </Link>
          </div>
          <div className={`hidden md:block ${arabicFont.className} font-bold text-xl`}>
            <div className="ml-10 flex items-baseline space-x-4">
              {Links.map((item) => (
                <Link
                  key={item.name}
                  href={`${item.link}`}
                  className="nav-link px-3 py-2 rounded-md text-sm font-medium text-black" 
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => toggleMenu()}
              id='navBtn'
              className="inline-flex items-center justify-center p-2 rounded-md text-black "
            >
              {
              
              open ? <HiOutlineMenu className="h-6 w-6 " /> : <BsListNested className="h-6 w-6"/> 
              }
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className="md:hidden bg-white rounded-3xl mx-3 mt-2 hidden text-black"
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${arabicFont.className}`}>
          {Links.map((item) => (
            <Link
              key={item.name}
              href={`/${item.link}`}
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
