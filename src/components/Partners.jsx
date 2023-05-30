import React from 'react'
import dlf from '../images/dlf.png'
import m3m from '../images/m3m.png'
import whiteland from '../images/whiteland.png'
import emaar from '../images/emaar.png'
import centralpark from '../images/centralpark.png'
import smartworld from '../images/smartworld.png'

function Partners() {
  return (
    <div className='lg:mt-[230px] mt-[80px]'>
        <p className=' font-display1 text-2xl lg:text-3xl ml-[30px] lg:flex lg:justify-center'>
            Our Growth Partners
        </p>
        <div className='mt-[38px] bg-[#F3F6FF] lg:w-[1840px] md:w-[1024px] lg:ml-[-400px] md:ml-0 lg:overflow-auto md:overflow-scroll' >
            <div className='flex md:w-[1024px] m-auto md:overflow-scroll lg:overflow-auto overflow-scroll'>
              <img className='w-[263px] h-[116px] mt-12 ' src={m3m} alt="" />
              <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={whiteland} alt="" />
              <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={emaar} alt="" />
              <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={dlf} alt="" />
              <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={centralpark} alt="" />
              <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={smartworld} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Partners