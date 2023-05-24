import React from 'react'
import insta from '../images/ri_instagram-fillinsta.png'
import fb from '../images/ic_baseline-facebookfb.png'
import twitter from '../images/bi_twittertwitter.png'
import ln from '../images/Vectorln.png'
import logo from '../images/logo.png'

function Footer() {
  return (
    <div className='grid'>
        <div className='flex mt-[105px] ml-[258px]'>
            <div>
                <p className='pt-[32px] pb-[32px]'>What is the leads I receive are junk? 
                <span className='rounded-full bg-blue-700 text-white float-right ml-56 w-6 h-6 pl-2'>+</span>
                </p>
                <hr />
                <p className='pt-[32px] pb-[32px]'>What is the leads I receive are junk? 
                <span className='rounded-full bg-blue-700 text-white float-right ml-56 w-6 h-6 pl-2'>+</span>
                </p>
                <hr />
                <p className='pt-[32px] pb-[32px]'>What is the leads I receive are junk? 
                <span className='rounded-full bg-blue-700 text-white float-right ml-56 w-6 h-6 pl-2'>+</span>
                </p>
                <hr />
                <a href="jh" className='text-blue-800'>More FAQ</a>
            </div>
            <div className='ml-[350px] w-[506px] h-[55px] '>
                <p className='font-display1 text-3xl'>How We Can Help You?</p>
                <p className='font-light mt-5'>Want to learn more about our properties and virtual tours?</p>
                <p className='font-light'>Get in touch with us today.</p>
                <input type="text" placeholder='Enter Your Email' className='mt-[76.06px]'/>
            </div>
        </div>
        <div className='grid ml-[234px] grid-cols-5 gap-4'>
            <div className=''>
                <ul className='mt-[111px] border-r-black border-2 border-l-white border-t-white border-b-white'>
                    <li className='p-3'>Work with us</li>
                    <li className='p-3'>Advertise With Us</li>
                    <li className='p-3'>Report a Bug</li>
                </ul>
            </div>
            <div className=''>
                <ul className='mt-[111px] border-r-black border-2 border-l-white border-t-white border-b-white'>
                    <li className='p-3'>Private Coaching</li>
                    <li className='p-3'>Our Work</li>
                </ul>
            </div>
            <div className=''>
                <ul className='mt-[111px] border-r-black border-2 border-l-white border-t-white border-b-white'>
                    <li className='p-3'>About Us</li>
                    <li className='p-3'>FAQs</li>
                </ul>
            </div>
            <div className=''>
                <ul className='mt-[111px] border-r-black border-2 border-l-white border-t-white border-b-white'>
                    <li className='p-3'>Support Us</li>
                    <li className='p-3'>Business Advices</li>
                </ul>
            </div>
            <div className=''>
                <ul className='mt-[111px]'>
                    <li className='p-3'>Our Commitment</li>
                    <li className='p-3'>Our Team</li>
                </ul>
            </div>
        </div>
        <hr className='mt-[33px] ml-[233px] mr-[1100px] '/>
        <div className='ml-[782px] mt-[-28px] flex align-middle'>
            <img src={insta} className='p-3' alt="" />
            <img src={twitter} className='p-3' alt="" />
            <img src={fb} className='p-3' alt="" />
            <img src={ln} className='p-3' alt="" />
        </div>
        <hr className='ml-[1040px] mr-[235px] mt-[-25px]'/>
        <div className='flex justify-center mt-[35px]'>
            <img src={logo}  alt="" />
        </div>
        <p className='flex justify-center mt-4'>copyright @ 2023 bigestate.inc</p>
        <ul className='flex mt-4 justify-center'>
            <li className='pl-8'>Legal stuff</li>
            <li className='pl-8'>Privacy Policy</li>
            <li className='pl-8'>Security</li>
        </ul>
    </div> 
  )
}

export default Footer