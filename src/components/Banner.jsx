import React from 'react'
import banner from '../images/big-estate.png'
import bar from '../images/bar.png'
import whatsapp from '../images/whatsapp.png'

function Banner() {
  return (
    <div className='grid'>
        <div className='flex ml-[193px] '>
            <div>
                <p className='mt-[132px] font-display font-bold text-[#3461FF] w-[535px] h-[180px] text-7xl'>
                    Scale Beyond <span className='text-black'>Normal!</span>
                </p>
                <p className='text-[#00000099] w-[456px] h-[50px] font-display'>
                    World’s best <span className='font-bold'>AI-Proptech</span> Solution for real estate Lead Generation
                </p>
                <button className=' mt-[41.57px] border-2 border-solid bg-[#3461FF] border-[#3461FF] text-white rounded-full pt-2 pb-2 pl-7 pr-7 '>
                    Get Started
                </button>
            </div>
            <div className='grid'>
                <img src={banner} alt="banner" className='ml-44' />
                <img src={bar} alt="bar" className='mt-[-550px] ml-[730px]' />
                <button className='bg-[#5F82FF] w-[94px] h-[94px] rounded-full p-6 ml-[780px] mt-[102.38px]' >
                    <img alt='whatsapp' src={whatsapp} className='w-[48px] h-[48px]'/>
                </button>
            </div>
        </div>
        <div className='flex'>
            <div className='ml-[255px] mt-[50px] grid grid-cols-2 '>
                <div className='p-12'>
                    <p className='text-[#5F82FF] font-bold text-5xl'>50+</p>
                    <p className='text-[#00000099]'>Clients Served</p>
                </div>
                <div className='p-12'>
                    <p className='text-[#5F82FF] font-bold text-5xl'>30%</p>
                    <p className='text-[#00000099]'>Qualification Rate</p>
                </div>
                <div className='p-12'>
                    <p className='text-[#5F82FF] font-bold text-5xl'>$100 <span className='text-lg'>Million+</span></p>
                    <p className='text-[#00000099]'>Leads Generated</p>
                </div>
                <div className='p-12'>
                    <p className='text-[#5F82FF] font-bold text-5xl'>130k+</p>
                    <p className='text-[#00000099]'>Revenue Generated</p>
                </div>
            </div>
            <div className='ml-[119.55px] mr-[184px] h-[240px] w-[659px] mt-[100px]'>
                <p className='text-3xl font-display1'>Hitting The Right Numbers</p>
                <p className='pt-6 mr-[180px] text-md text-[#00000099]'>
                    We're here to revolutionize your approach to real estate lead generation. Our cutting-edge automated system and expert services are designed to deliver quality leads that convert into successful sales
                </p>
                <div className='mt-5 text-blue-700'><a href="b">Learn More</a></div>
            </div>
        </div>
    </div>
  )
}

export default Banner