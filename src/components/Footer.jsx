import React from 'react'
import insta from '../images/ri_instagram-fillinsta.png'
import fb from '../images/ic_baseline-facebookfb.png'
import twitter from '../images/bi_twittertwitter.png'
import ln from '../images/Vectorln.png'
import logo from '../images/logo.png'

function Footer() {
  return (
    <div className='grid'>
        <div className='lg:flex lg:mt-[105px] mt-[180px] ml-[20px] lg:ml-[258px]'>
            <div className='w-[350px] lg:w-[550px]'>
                <hr />
                <p className='pt-[32px] pb-[32px]'>What is the leads I receive are junk? 
                <span className='rounded-full bg-blue-700 text-white float-right ml-56 w-6 h-6 pl-2'>+</span>
                </p>
                <hr />
                <p className='pt-[32px] pb-[32px]'>What platforms do you use to generate leads? 
                <span className='rounded-full bg-blue-700 text-white float-right ml-56 w-6 h-6 pl-2 mt-[-20px]'>+</span>
                </p>
                <hr />
                <p className='pt-[32px] pb-[32px]'>Who can I contact for assistance? 
                <span className='rounded-full bg-blue-700 text-white float-right ml-56 w-6 h-6 pl-2'>+</span>
                </p>
                <hr />
                <a href="jh" className='text-blue-800'>More FAQ</a>
            </div>
            <div className='lg:ml-[350px] w-[506px] lg:mt-0 mt-[70px] h-[55px] '>
                <p className='font-display1 text-3xl'>How We Can Help You?</p>
                <p className='font-light mt-5 lg:w-full w-[350px]'>Want to learn more about our properties and virtual tours?</p>
                <p className='font-light'>Get in touch with us today.</p>
                <input type="text" placeholder='Enter Your Email' className='mt-[76.06px]'/>
            </div>
        </div>
        <div className='grid lg:ml-[234px] ml-[50px] mt-[120px] lg:grid-cols-5 lg:gap-4 '>
            <div className=''>
                <ul className='lg:mt-[111px] mt-[120px] lg:border-r-black lg:border-2 lg:border-l-white lg:border-t-white lg:border-b-white'>
                    <li className='p-3'>Work with us</li>
                    <li className='p-3'>Advertise With Us</li>
                    <li className='p-3'>Report a Bug</li>
                </ul>
            </div>
            <div className=''>
                <ul className='lg:mt-[111px] mt-[20px] lg:border-r-black lg:border-2 lg:border-l-white lg:border-t-white lg:border-b-white'>
                    <li className='p-3'>Private Coaching</li>
                    <li className='p-3'>Our Work</li>
                </ul>
            </div>
            <div className=''>
                <ul className='lg:mt-[111px] mt-[20px] lg:border-r-black lg:border-2 lg:border-l-white lg:border-t-white lg:border-b-white'>
                    <li className='p-3'>About Us</li>
                    <li className='p-3'>FAQs</li>
                </ul>
            </div>
            <div className=''>
                <ul className='lg:mt-[111px] mt-[20px] lg:border-r-black lg:border-2 lg:border-l-white lg:border-t-white lg:border-b-white'>
                    <li className='p-3'>Support Us</li>
                    <li className='p-3'>Business Advices</li>
                </ul>
            </div>
            <div className=''>
                <ul className='lg:mt-[111px] mt-[20px]'>
                    <li className='p-3'>Our Commitment</li>
                    <li className='p-3'>Our Team</li>
                </ul>
            </div>
        </div>
        <hr className='mt-[33px] ml-[233px] mr-[1100px] '/>
        <div className='lg:ml-[782px] ml-[90px] lg:mt-[-28px] mt-[30px] flex align-middle'>
            <img src={insta} className='p-3' alt="" />
            <img src={twitter} className='p-3' alt="" />
            <img src={fb} className='p-3' alt="" />
            <img src={ln} className='p-3' alt="" />
        </div>
        <hr className='lg:ml-[1040px] lg:mr-[235px] lg:mt-[-25px]'/>
        <div className='lg:flex lg:justify-center lg:ml-0 ml-[130px] mt-[35px]'>
            <img src={logo}  alt="" />
        </div>
        <p className='lg:flex lg:justify-center mt-4 lg:ml-0 ml-[80px]'>copyright @ 2023 bigestate.inc</p>
        <ul className='flex mt-4 lg:justify-center'>
            <li className='pl-8'>Legal stuff</li>
            <li className='pl-8'>Privacy Policy</li>
            <li className='pl-8'>Security</li>
        </ul>
    </div> 
  )
}

export default Footer