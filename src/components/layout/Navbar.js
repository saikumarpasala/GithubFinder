import React from 'react';
import propTypes from 'prop-types';
import { link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
   return (
       <nav className='navbar bg-secondary'>
           <h1>
               <i className={icon} /> {title}
               </h1>
               <ul>
                   <li>
                       <link tof="/">Home</link>
                       </li>
                       <li>
                     <link to="/about">About</link>
                    </li>
                   </ul>
        </nav>
   );
    }
    Navbar.defaultprops = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
Navbar.propTypes = {
    title: propTypes.string.isRequired
}



export default Navbar;