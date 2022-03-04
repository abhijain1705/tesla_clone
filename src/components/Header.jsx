import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className='fixed'>
      <Navbar>
        <a>
          <img className='h-[15px] w-[125px] sm:h-[20px]' src="/images/logo.svg" alt="" />
        </a>
        <Models>
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Panels</p>
          <p>Solar Roofs</p>
        </Models>
        <Menu>
          <p className='lg:visible  invisible'>Shop</p>
          <p className='lg:visible  invisible'>Account</p>
          <p className='relative sm:left-10 lg:left-0' onClick={() => { setBurgerStatus(true); }} >Menu</p>
        </Menu>
        <Options show={burgerStatus} className='bg-white text-[#171a20cc] fixed top-0 bottom-0 right-0 w-[250px] flex flex-col p-[20px] flex-start z-20'>
          <p className='ml-[150px] text-xl'><FontAwesomeIcon onClick={() => { setBurgerStatus(false) }} icon={faX} /></p>
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Panels</p>
          <p>Solar Roofs</p>
          <p>Existing Inventory</p>
          <p>Used Inventory</p>
          <p>Trade-In</p>
          <p>Test Drive</p>
          <p>CyberTruck</p>
          <p>Roadster</p>
          <p>Semi</p>
          <p>Charging</p>
          <p>Powerwall</p>
          <p>Commercial Energy</p>
          <p>Utilities</p>
          <p>Find Us</p>
          <p>Support</p>
          <p>Investor Relations</p>
          <p><FontAwesomeIcon icon={faGlobe} /> United States</p>
          <span>English</span>
        </Options>
      </Navbar>
    </div>
  )
}

export default Header;

const Navbar = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 20px 0 20px;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.div`
display: flex;
justify-content: space-evenly;
width: 300px;
 font-weight: 500;
 cursor: pointer;
`

const Models = styled.div`
  visibility: hidden;
  @media (min-width: 900px) {
    visibility: visible;
    display: flex;
    width: 600px;
    font-size: 16px;
    justify-content: space-evenly;
    cursor: pointer;
  }
`

const Options = styled.div`
    overflow: scroll;
    font-size: 12px;
    font-weight: 700;
    color: #171c20aa;
    transition: transform 0.3s ease-in;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}   ;
  p {
    padding: 20px 0;
    
  }
  span {
    position: relative;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
  }
`


