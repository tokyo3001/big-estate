import React from 'react'
import logo from '../images/logo.png'
import arrow from '../images/arrow.png'

function Header() {
  return (
    <div className='flex h-28 fixed bg-white '>
        <div className='h-[54.05px] w-[148.62px] absolute left-[196px] top-[38.55px] grid'>
            <img alt='logo' src={logo} className=''/>
        </div>
        <div className=''>
            <ul className='flex ml-[659px] mt-[54px] font-display'>
                <li className='flex'>Product 
                    <img src={arrow} alt="arrow" className='w-[12px] h-[6px] mt-[9px]'/>
                </li>
                <li className='ml-[21px]'>Virtual Tour</li>
                <li className='ml-[17px]'>Pricing</li>
                <li className='ml-[22px]'>Case studies</li>
                <li className='ml-[10px]'>About us</li>
            </ul>
        </div>
        <div className='ml-[259px] mt-[47px] mr-[235px]'>
            <button className='border-2 border-solid border-[#3461FF] text-[#3461FF] rounded-full pt-[7px] pb-[7px] pl-[20px] pr-[26px] '>Sign up</button>
            <button className='border-2 border-solid bg-[#3461FF] border-[#3461FF] text-white rounded-full pt-[7px] pb-[7px] pl-[28px] pr-[28px] ml-[2px]'>Log in</button>
        </div>
    </div>
  )
}

export default Header