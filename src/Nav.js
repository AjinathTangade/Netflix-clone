import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav() {
const [show, handleShow] = useState (false);

const transitionNavBar = () =>{
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false); 
      }
};

  useEffect (() =>{
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  })
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
              <img className="nav__logo"  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='try'/>
              <img src='https://img.freepik.com/free-vector/man-face-logo-abstract-design-negative-space-style_126523-2758.jpg?w=740&t=st=1661796127~exp=1661796727~hmac=e1bee6611a3aeb01333f16cf3351a6de9da6f2718f84caa9ac9165d6d89293dd'  className='nav__avatar' alt='try'/>
        </div>
    </div>
  )
}

export default Nav;
