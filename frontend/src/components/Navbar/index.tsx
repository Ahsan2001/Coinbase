import React from 'react';
import {  NavLink  } from 'react-router-dom';
import style from './style.module.css';



const pages = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];


const Navbar: React.FC = () => {

  return (
    <header>
      <nav>
        {pages.map((page, index) => (
            <NavLink to={page.path}  key={index}
                className={({ isActive }) =>  isActive ? style.active : style.inActive  } >
                {page.label}
            </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
