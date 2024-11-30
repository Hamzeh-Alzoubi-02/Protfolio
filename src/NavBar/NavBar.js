import React, { useState } from 'react';
import BIO from '../IMG/1725308097719.jpeg';
 

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);  
    };
 
     function Home() {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }, 100);
      }

      function Profile() {
        setTimeout(() => {
            window.scrollTo({
                top: 800,
                behavior: 'smooth'
            })
        }, 100);
      }

      function Resume() {
        setTimeout(() => {
            window.scrollTo({
                top: 1500,
                behavior: 'smooth'
            })
        }, 100);
      }

      function Contacts() {
        setTimeout(() => {
            window.scrollTo({
                top: 2500,
                behavior: 'smooth'
            })
        }, 100);
      }
    return (
        <div className="NavBar">
            <div className="logo">
                <img src={BIO} alt='BIO' className='BIO'/>
                <h1  className='BIO1'>HZ</h1>
            </div>
            
           
            <div className="menu-icon" onClick={handleMenuToggle}>
                &#9776;
            </div>

           
            <div className={`right ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li onClick={Home}>Home</li>
                    <li onClick={Profile}>Portfolio</li>
                   
                    <li onClick={Resume}>Resume</li>
                    <li onClick={Contacts}>Contact</li>
                </ul>
            </div>
        </div>
    );
}
