import React from "react";
import logo from "../assets/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan} from '@fortawesome/free-solid-svg-icons';
import {  faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faUserTie} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className="flex my-6 justify-between" id="nav">
      <div className="flex" id="navleft">
      <div className="w-24" id="logo">
        <img src={logo} alt="logo"  className=""/>
        <p className=""></p>
      </div>
      <div className="my-4" id="left-menu">
        <ul className="flex list-none mx-2 ">
          <li className="px-2 mx-4">Store</li>
          <li className="px-2 mx-4">Categories</li>
          <li className="px-2 mx-4">Sale</li>
        </ul>
      </div>
      </div>
      <div id="navright" className="flex mx-9 my-4">
      <div className="" id="right-menu">
        <ul className ="flex list-none mx-2">
          <li className="px-2 mx-4">About</li>
          <li className="px-2 mx-4">Contact</li>
        </ul>
      </div>
      <div className="px-1 border-solid border-2 border-black ">
        <input type="text" placeholder="Search Products..." className="focus:outline-none"></input>
      </div>
      <div className="px-2 mx-2 border-solid border-2 border-black">
        <button> <FontAwesomeIcon icon={ faGreaterThan}/> </button>
      </div>
      <div className="px-2 text-2xl cursor-pointer"><FontAwesomeIcon icon={faCartShopping}/></div>
      <div className="px-2 text-2xl cursor-pointer"><FontAwesomeIcon icon={faUserTie}/></div>
      </div>
       
    </div>
  );
};

export default Navbar;
