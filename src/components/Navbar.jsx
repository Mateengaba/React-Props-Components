import React from 'react';
import Button from './Button';

function Navbar({ header,Home,About, Product }) {// props destracter
  return (
    <div>

      <header className="text-gray-00 body-font bg-orange-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={header.logo} className='h-16 w-16 rounded-full' alt="" />
            <span className="ml-3 text-xl">{header.title}</span>
          </a>
          <nav className="md:mr-auto font-bold cursor-pointer md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">{Home}</a>
            <a className="mr-5 hover:text-white">{About}</a>
            <a className="mr-5 hover:text-white">{Product} </a>
          </nav>

          <Button label={"Login"} />
        </div>
      </header>


    </div>
  );
}

export default Navbar;
