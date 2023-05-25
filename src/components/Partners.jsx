import React from 'react'
import dlf from '../images/dlf.png'
import m3m from '../images/m3m.png'
import whiteland from '../images/whiteland.png'
import emaar from '../images/emaar.png'
import centralpark from '../images/centralpark.png'
import smartworld from '../images/smartworld.png'

function Partners() {
  return (
    <div className='mt-[230px]'>
        <p className=' font-display1 w-[1337px] h-[56px] text-3xl ml-[196px] flex justify-center'>
            Our Growth Partners
        </p>
        <div className='w-[1896px] h-[212px] mt-[38px] bg-[#F3F6FF] flex' >
            <img className='w-[263px] h-[116px] mt-12 ml-[75px]' src={m3m} alt="" />
            <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={whiteland} alt="" />
            <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={emaar} alt="" />
            <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={dlf} alt="" />
            <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={centralpark} alt="" />
            <img className='w-[263px] h-[116px] mt-12 ml-[34px]' src={smartworld} alt="" />
        </div>
    </div>
  )
}

export default Partners