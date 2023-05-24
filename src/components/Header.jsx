import React from 'react'
import logo from '../images/logo.png'
import rectangle from '../images/logo-rectangle.png'
import arrow from '../images/arrow.png'

function Header() {
  return (
    <div className='flex h-48'>
        <div className='h-[54.05px] w-[148.62px] absolute left-[196px] top-[38.55px] grid'>
            <img alt='logo' src={logo} className=''/>
            <img alt='logo-rectangle' src={rectangle} className='mt-[27.4px]'/>
            <img alt='logo-rectangle' src={rectangle} className='mt-[9px]'/>
        </div>
        <div>
            <ul className='flex gap-9 ml-[659px] mt-[54px]'>
                <li className='flex'>Product 
                    <img src={arrow} alt="arrow" className='w-[12px] h-[6px] mt-[9px] ml-[7px]'/>
                </li>
                <li>Virtual Tour</li>
                <li>Pricing</li>
                <li>Case studies</li>
                <li>About us</li>
            </ul>
        </div>
        <div className='ml-[259px] mt-[47px]'>
            <button className='border-2 border-solid border-[#3461FF] text-[#3461FF] rounded-full pt-2 pb-2 pl-6 pr-6 '>Sign up</button>
            <button className='border-2 border-solid bg-[#3461FF] border-[#3461FF] text-white rounded-full pt-2 pb-2 pl-7 pr-7 '>Log in</button>
        </div>
    </div>
  )
}

export default Header