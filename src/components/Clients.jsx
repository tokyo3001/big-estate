import React from 'react'
import img1 from '../images/Rectangle 1img1.png'
import img2 from '../images/image 157img2.png'
import leftarrow from '../images/chevron-downleftarrow.png'
import rightarrow from '../images/chevron-downrightarrow.png'
import robot from '../images/Group 1261153211robo.png'

function Clients() {
  return (
    <div className='mt-[150px]'>
        <p className=' font-display1 text-3xl justify-center flex'>
            What Our Clients Say About Us
        </p>
        <div className='flex mt-[117px]'>
            <div className='flex ml-[25px] rounded-lg shadow-sm shadow-slate-700 w-[745px] h-[180px]'>
                <img src={img1} alt="" className='w-[245px] rounded-lg h-[180px]' />
                <div className='p-[47px]'>
                    <p>This is a unique platform to source high-quality leads that are highly valued in any marketing, particularly a shifting market.</p>
                    <p className='float-right font-bold'>-Anshul Gupta, House of Real Estate</p>
                </div>
            </div>
            <div className='flex ml-[60px] rounded-lg shadow-sm shadow-slate-700 w-[745px] h-[180px]'>
                <img src={img2} alt="" className='w-[245px] h-[180px] rounded-lg' />
                <div className='p-[47px]'>
                    <p>This is a unique platform to source high-quality leads that are highly valued in any marketing, particularly a shifting market.</p>
                    <p className='float-right font-bold'>-Anshul Gupta, House of Real Estate</p>
                </div>
            </div>
        </div>
        <div className='flex mt-[31px]'> 
            <img className='ml-[649px] ' src={leftarrow} alt="" />
            <img className='ml-[500px]' src={rightarrow} alt="" />
        </div>
        <div className='mt-[160px] flex w-full h-[467px] bg-[#3461FF]'>
            <div className=' ml-[236px]'>
                <p className='font-serif mt-[135px] text-5xl w-[749px] h-[219px] text-white'>
                    Learn why our clients trust us to drive long-term growth
                </p>
                <button className='border-2 border-solid bg-white border-[#ffffff] text-blue-700 rounded-full pt-2 pb-2 pl-7 pr-7'>Sign up</button>
            </div>
            <div className=' mt-[-150px]'>
                <img src={robot} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Clients