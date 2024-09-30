'use client';
import Logo from '../../../Images/logo.png';
import Image from 'next/image';
import { useEffect, useRef ,useState} from 'react';
import Link from 'next/link';
import { HiOutlineMenu } from "react-icons/hi";
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
      name: 'من نحن ؟',
      link: '/about',
    },
    {
      name: 'التواصل',
      link: '/',
    } 
    ];

  const prevScrollPos = useRef(0);
  const navbarRef = useRef(null);
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
      } else {
        navBar.style.top = '-5rem';
      }
    }
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      dir="rtl"
      className="fixed w-full z-[10000] transition-all duration-300 top-6">
      <div className="max-w-7xl mx-2 lg:mx-auto px-4 sm:px-6 lg:px-8 bg-main rounded-full transition-colors duration-300" >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
            <Image  src={Logo}  alt="logo" className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className={`hidden md:block ${arabicFont.className} font-bold text-xl`}>
            <div className="ml-10 flex items-baseline space-x-4">
              {Links.map((item) => (
                <Link
                  key={item.name}
                  href={`${item.link}`}
                  className="nav-link px-3 py-2 rounded-md text-sm font-medium text-white" 
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white "
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
        className="md:hidden bg-main rounded-3xl mx-3 mt-2 hidden text-white"
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${arabicFont.className}`}>
          {Links.map((item) => (
            <Link
              key={item.name}
              href={`${item.link}`}
              onClick={() => toggleMenu()}
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