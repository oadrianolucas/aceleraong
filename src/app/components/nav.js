"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import Image from 'next/image';
import MenuButton from './menuButton';

const navigationLinks = [
  { name: 'Planos', href: '#planos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Blogs', href: 'https://blog.aceleraong.com.br' },
  { name: 'Centro de Ajuda', href: 'https://ajuda.aceleraong.com.br' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className="bg-emerald-500 shadow-md">
        <nav className="nav py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-3xl font-bold">
              <Image
              className='lg:w-44 md:w-36 w-28'
                src="/img/logo-white.svg"
                width={180}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className={`hidden lg:block lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mx-2 text-white font-semibold hover:text-emerald-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="aling-rigth text-sm lg:text-md">
              <a
                href="https://app.aceleraong.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-emerald-700 mr-4"
              >
                Login
              </a>
              <a
                href="https://app.aceleraong.com.br/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-500 font-bold px-4 py-2 rounded hover:bg-emerald-700"
              >
                Cadastre-se
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className='bg-emerald-700 shadow-md p-2 block lg:hidden'>
        <div className='container mx-auto'>
          <div className="text-right mt-1 mr-1 lg:hidden">
            <span className='text-2xl'><MenuButton onClick={handleToggleMenu} menuOpen={menuOpen} /> </span>
          </div>
          
          <div className={`flex flex-col ${menuOpen ? 'block' : 'hidden'}`}>
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 px-2 rounded-xl hover:bg-emerald-600 text-white font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
