import React from 'react';
import navbar from './navbar.css';

export default function NavBar() {
   const mobileNav = () => {
    const burger = document.querySelector("#burger");
    const links = document.querySelectorAll("li");
    const navLinks = document.getElementById("ul");

    burger.addEventListener("click", (event) => {
      event.stopPropagation()
       
      console.log('action')
    //   toggle the Nav section
      navLinks.classList.toggle("transform_links");

    //   animate the links individually
      links.forEach((li, index) => {
        if (li.style.animation) {
          li.style.animation = "";
        } else {
          li.style.animation = `animateLinks .5 ease forwards ${
            index / 7 + 2.3
          }s`;
        }
      });

      // animate burger
      burger.classList.toggle('toggle');
    
    });
  };
  return (
    <nav>
      <h3 className="logo">
        <img src="mahmoud3.png" alt="Logo" />
      </h3>
      <ul className="nav_links" id="ul">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Our Products</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="about">About US</a>
        </li>
      </ul>

      <div id= 'burger' onClick={mobileNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
