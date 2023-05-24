import React from 'react'
import dlf from '../images/dlf.png'
import m3m from '../images/m3m.png'
import whiteland from '../images/whiteland.png'
import emaar from '../images/emaar.png'
import centralpark from '../images/centralpark.png'
import smartworld from '../images/smartworld.png'

function Partners() {
  return (
    <div className='mt-[150px]'>
        <p className=' font-display1 text-3xl justify-center flex'>
            Our Growth Partners
        </p>
        <div className='w-full h-[212px] mt-[38px] bg-[#F3F6FF] flex pl-28' >
            <img className='w-[263px] h-[116px] mt-12' src={m3m} alt="" />
            <img className='w-[263px] h-[116px] mt-12' src={whiteland} alt="" />
            <img className='w-[263px] h-[116px] mt-12' src={emaar} alt="" />
            <img className='w-[263px] h-[116px] mt-12' src={dlf} alt="" />
            <img className='w-[263px] h-[116px] mt-12' src={centralpark} alt="" />
            <img className='w-[263px] h-[116px] mt-12' src={smartworld} alt="" />
        </div>
    </div>
  )
}

export default Partners