import React from 'react'
import img1 from '../images/Rectangle 1img1.png'
import img2 from '../images/image 157img2.png'
import leftarrow from '../images/chevron-downleftarrow.png'
import rightarrow from '../images/chevron-downrightarrow.png'
import robot from '../images/Group 1261153211robo.png'

function Clients() {
  return (
    <div className='mt-[150px]'>
        <p className=' font-display1 text-2xl lg:text-3xl justify-center flex'>
            What Our Clients Say About Us
        </p>
        <div className='lg:flex lg:mt-[117px] mt-[60px]'>
            <div className='lg:flex ml-[10px] rounded-lg shadow-sm shadow-slate-700 lg:w-[745px] lg:h-[180px]'>
                <img src={img1} alt="" className='w-[245px] rounded-lg h-[180px]' />
                <div className='lg:p-[47px] p-7'>
                    <p>This is a unique platform to source high-quality leads that are highly valued in any marketing, particularly a shifting market.</p>
                    <p className='float-right font-bold'>-Anshul Gupta, House of Real Estate</p>
                </div>
            </div>
            <div className='lg:flex ml-[10px] lg:mt-[0px] mt-[30px] rounded-lg shadow-sm shadow-slate-700 lg:w-[745px] lg:h-[180px]'>
                <img src={img2} alt="" className='w-[245px] h-[180px] rounded-lg' />
                <div className='lg:p-[47px] p-7'>
                    <p>This is a unique platform to source high-quality leads that are highly valued in any marketing, particularly a shifting market.</p>
                    <p className='float-right font-bold'>-Anshul Gupta, House of Real Estate</p>
                </div>
            </div>
        </div>
        <div className='flex mt-[31px]'> 
            <img className='lg:ml-[649px] ml-[150px]' src={leftarrow} alt="" />
            <img className='lg:ml-[500px]' src={rightarrow} alt="" />
        </div>
        <div className='mt-[160px] lg:flex w-full h-[467px] bg-[#3461FF]'>
            <div className=' lg:ml-[236px]'>
                <p className='font-serif pt-10 lg:pt-0 mt-[135px] text-5xl lg:w-[749px] lg:h-[219px] text-white'>
                    Learn why our clients trust us to drive long-term growth
                </p>
                <button className='border-2 border-solid bg-white border-[#ffffff] text-blue-700 rounded-full pt-2 pb-2 pl-7 pr-7 mt-5 lg:mt-[0px]'>Sign up</button>
            </div>
            <div className=' lg:mt-[-150px]'>
                <img src={robot} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Clients