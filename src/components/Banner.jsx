import React from 'react'
import banner from '../images/big-estate.png'
import whatsapp from '../images/whatsapp.png'

function Banner() {
  return (
    <div className='grid'>
        <div className='lg:flex '>
            <div className='ml-4'>
                <p className='lg:mt-[142px] mt-44 font-display font-bold text-[#3461FF] leading-[70px] h-[150px] text-5xl lg:text-6xl'>
                    Scale Beyond <span className='text-black'>Normal!</span>
                </p>
                <p className='text-[#00000099] lg:leading-[32px] w-[400px] lg:w-[456px] h-[65px] font-display'>
                    World’s best <span className='font-bold'>AI-Proptech</span> Solution for real estate Lead Generation
                </p>
                <button className=' mt-[41.57px] border-2 border-solid bg-[#3461FF] border-[#3461FF] text-white rounded-full pt-[14px] pb-[14px] pl-[28px] pr-[28px] '>
                    Get Started
                </button>
            </div>
            <div className='grid lg:mt-[90px] mt-[100px]'>
                <img src={banner} alt="banner" className='lg:ml-[30px] ml-4 lg:w-[600px] lg:h-[405px] w-[400px] h-[200px]' />
                <button className='bg-[#5F82FF] lg:w-[94px] lg:h-[94px] w-[80px] h-[80px] rounded-full p-6 mt-[60px] lg:mt-[102.38px] ml-[300px] lg:ml-[472px]' >
                    <img alt='whatsapp' src={whatsapp} className='lg:w-[48px] w-[35px] lg:h-[48px] h-[35px]'/>
                </button>
            </div>
        </div>
        <div className='lg:flex lg:w-full w-[450px] ml-3'>
            <div className=' lg:mt-[23px] mt-[50px] grid grid-cols-2 '>
                <div className='lg:pb-12 pb-[20px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>50+</p>
                    <p className='text-[#00000099]'>Clients Served</p>
                </div>
                <div className='lg:ml-[60px] lg:pb-12 pb-[20px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>30%</p>
                    <p className='text-[#00000099]'>Qualification Rate</p>
                </div>
                <div className=' '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>$100 M+</p>
                    <p className='text-[#00000099]'>Leads Generated</p>
                </div>
                <div className='lg:ml-[60px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>130k+</p>
                    <p className='text-[#00000099]'>Revenue Generated</p>
                </div>
            </div>
            <div className='lg:ml-[100px] ml-[30px] lg:mt-[57px]'>
                <p className='lg:mt-[0px] mt-[80px] lg:text-3xl text-2xl font-display1'>Hitting The Right Numbers</p>
                <p className='w-[400px] pt-6 mr-[180px] text-md text-[#00000099]'>
                    We're here to revolutionize your approach to real estate lead generation. Our cutting-edge automated system and expert services are designed to deliver quality leads that convert into successful sales
                </p>
                <div className='mt-5 text-blue-700'><a href="b">Learn More</a></div>
            </div>
        </div>
    </div>
  )
}

export default Banner