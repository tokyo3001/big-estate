import React from 'react'
import { createPopper } from '@popperjs/core';
import logo from '../images/logo.png'
import arrow from '../images/arrow.png'

function Header({ color }) {

    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");

  return (
    <div className='flex lg:h-28 h-28 fixed bg-white'>
        <div className='h-[54.05px] w-[148.62px] absolute left-[20px] lg:left-[196px] top-[38.55px] grid'>
            <img alt='logo' src={logo} className=''/>
        </div>
        <div className='flex lg:grid'>
            <ul className='flex ml-[659px] mt-[54px] font-display lg:visible invisible'>
                <li className='flex'>Product 
                    <img src={arrow} alt="arrow" className='w-[12px] h-[6px] mt-[9px]'/>
                </li>
                <li className='ml-[21px]'>Virtual Tour</li>
                <li className='ml-[17px]'>Pricing</li>
                <li className='ml-[22px]'>Case studies</li>
                <li className='ml-[10px]'>About us</li>
            </ul>
            <div className="visible lg:invisible ml-[-850px] mt-[40px]">
            <button
              className={
                "text-[#3461FF] border-2 border-[#3461FF] font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Menu 
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left bg-white rounded shadow-lg mt-1"
              }
              style={{ minWidth: "2rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  " +
                  (color === "white" ? " text-slate-700" : "text-black")
                }
                onClick={e => e.preventDefault()}
              >
                Virtual Tour
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  " +
                  (color === "white" ? " text-slate-700" : "text-black")
                }
                onClick={e => e.preventDefault()}
              >
                Pricing
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  " +
                  (color === "white" ? " text-slate-700" : "text-black")
                }
                onClick={e => e.preventDefault()}
              >
                Case Studies
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  " +
                  (color === "white" ? " text-slate-700" : "text-black")
                }
                onClick={e => e.preventDefault()}
              >
                About Us
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  " +
                  (color === "white" ? " text-slate-700" : "text-black")
                }
                onClick={e => e.preventDefault()}
              >
                Sign Up
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  " +
                  (color === "white" ? " text-slate-700" : "text-black")
                }
                onClick={e => e.preventDefault()}
              >
                Log In
              </a>
            </div>
            </div>
        </div>
        <div className='lg:visible invisible ml-[259px] mt-[47px] mr-[235px]'>
            <button className='border-2 border-solid border-[#3461FF] text-[#3461FF] rounded-full pt-[7px] pb-[7px] pl-[20px] pr-[26px] '>Sign up</button>
            <button className='border-2 border-solid bg-[#3461FF] border-[#3461FF] text-white rounded-full pt-[7px] pb-[7px] pl-[28px] pr-[28px] ml-[2px]'>Log in</button>
        </div>
    </div>
  )
}

export default Header