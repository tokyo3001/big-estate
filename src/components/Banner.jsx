import React from 'react'
import banner from '../images/big-estate.png'
import bar from '../images/bar.png'
import whatsapp from '../images/whatsapp.png'

function Banner() {
  return (
    <div className='grid'>
        <div className='lg:flex '>
            <div className='lg:ml-[193px] ml-4'>
                <p className='lg:mt-[272px] mt-44 font-display font-bold text-[#3461FF] leading-[70px] w-[535px] lg:h-[202px] h-[150px] text-5xl lg:text-7xl'>
                    Scale Beyond <span className='text-black'>Normal!</span>
                </p>
                <p className='text-[#00000099] lg:leading-[32px] lg:mt-[21.43px] w-[400px] lg:w-[456px] h-[65px] font-display'>
                    World’s best <span className='font-bold'>AI-Proptech</span> Solution for real estate Lead Generation
                </p>
                <button className=' mt-[41.57px] border-2 border-solid bg-[#3461FF] border-[#3461FF] text-white rounded-full pt-[14px] pb-[14px] pl-[28px] pr-[28px] '>
                    Get Started
                </button>
            </div>
            <div className='grid lg:mt-[145.4px] mt-[100px]'>
                <img src={banner} alt="banner" className='lg:ml-[104px] ml-4 lg:w-[700px] lg:h-[475.22px] w-[400px] h-[200px]' />
                <img src={bar} alt="bar" className='lg:mt-[-480px] mt-[-250px] lg:ml-[670px] ml-[270px] w-[154px] h-[92.69px]' />
                <button className='bg-[#5F82FF] lg:w-[94px] lg:h-[94px] w-[80px] h-[80px] rounded-full p-6 mt-[60px] lg:mt-[102.38px] ml-[300px] lg:ml-[752px]' >
                    <img alt='whatsapp' src={whatsapp} className='lg:w-[48px] w-[35px] lg:h-[48px] h-[35px]'/>
                </button>
            </div>
        </div>
        <div className='lg:flex lg:w-full w-[450px]'>
            <div className=' lg:mt-[23px] ml-[40px] mt-[50px] grid grid-cols-2 '>
                <div className='lg:ml-[273px] lg:pb-12 pb-[20px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>50+</p>
                    <p className='text-[#00000099]'>Clients Served</p>
                </div>
                <div className='lg:ml-[83px] lg:pb-12 pb-[20px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>30%</p>
                    <p className='text-[#00000099]'>Qualification Rate</p>
                </div>
                <div className='lg:ml-[273px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>$100 M+</p>
                    <p className='text-[#00000099]'>Leads Generated</p>
                </div>
                <div className='lg:ml-[83px] '>
                    <p className='text-[#5F82FF] font-bold lg:text-5xl text-4xl'>130k+</p>
                    <p className='text-[#00000099]'>Revenue Generated</p>
                </div>
            </div>
            <div className='lg:ml-[119.55px] ml-[30px] mr-[184px] h-[240px] w-[659px] lg:mt-[27px]'>
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