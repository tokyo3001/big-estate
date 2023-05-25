import React from 'react'
import quality from '../images/Mask groupquality.png'
import cpl from '../images/Mask groupcpl.png'
import inhouse from '../images/Mask groupin-house.png'
import sales from '../images/Mask groupsales.png'
import transparent from '../images/Mask grouptransparent.png'

function Choose() {
  return (
    <div className='mt-[126px]'>
        <p className='lg:ml-[770px] ml-[30px] font-display1 w-[511px] h-[45px] text-2xl lg:text-3xl'>
            Why Choose Big Estate?
        </p>
        <div className='lg:flex mt-[38px] lg:ml-[197px]'>
            <div className=''>
                <div className='bg-[#3461FF] lg:ml-[197px] ml-[150px] rounded-full w-[150px] h-[150px]'>
                    <img src={quality} alt="" className='p-4 pt-12 pl-7'/>
                </div>
                <div className='rounded-xl shadow-slate-700 shadow-2xl mt-[-40px] lg:ml-[155px] ml-[110px] w-[230px] h-[170px] pt-16 pl-5'>
                    <p className='text-lg font-display1'>High Quality Leads</p>
                    <p className='pt-2 text-sm w-[196px] h-[54px]'>All Based Targeting For 30% More Qualifies Leads</p>
                </div>
            </div>
            <div className='lg:mt-[100px] mt-[40px]'>
                <div className='bg-[#3461FF] lg:ml-[80px] ml-[150px] rounded-full w-[150px] h-[150px]'>
                    <img src={cpl} alt="" className='p-4 pt-6 pl-7'/>
                </div>
                <div className='rounded-xl shadow-slate-700 shadow-2xl mt-[-40px] ml-[110px] lg:ml-[36px] w-[230px] h-[170px] pt-16 pl-5'>
                    <p className='text-lg font-display1'>Reduced CPL</p>
                    <p className='pt-2 text-sm w-[196px] h-[54px]'>All Based Targeting For 30% More Qualifies Leads</p>
                </div>
            </div>
            <div className='lg:mt-[200px] mt-[40px]'>
                <div className='bg-[#3461FF] lg:ml-[80px] ml-[150px] rounded-full w-[150px] h-[150px]'>
                    <img src={inhouse} alt="" className='p-4 pt-9 pl-8'/>
                </div>
                <div className='rounded-xl shadow-slate-700 shadow-2xl mt-[-40px] ml-[110px] lg:ml-[36px] w-[230px] h-[170px] pt-16 pl-5'>
                    <p className='text-lg font-display1'>In-House Algorithm</p>
                    <p className='pt-2 text-sm w-[196px] h-[54px]'>Proven inhouse algorithms based on geo targeting</p>
                </div>
            </div>
            <div className='lg:mt-[100px] mt-[40px]'>
                <div className='bg-[#3461FF] lg:ml-[80px] ml-[150px] rounded-full w-[150px] h-[150px]'>
                    <img src={sales} alt="" className='p-4 pt-9 pl-9'/>
                </div>
                <div className='rounded-xl shadow-slate-700 shadow-2xl mt-[-40px] ml-[110px] lg:ml-[36px] w-[230px] h-[170px] pt-16 pl-5'>
                    <p className='text-lg font-display1'>Sales Cycle</p>
                    <p className='pt-2 text-sm w-[196px] h-[54px]'>Shorten your sale cycle by 2x with our data driven solutions </p>
                </div>
            </div>
            <div className='lg:mt-[0px] mt-[40px]'>
                <div className='bg-[#3461FF] lg:ml-[80px] ml-[150px] rounded-full w-[150px] h-[150px]'>
                    <img src={transparent} alt="" className='p-4 pt-12 pl-12'/>
                </div>
                <div className='rounded-xl shadow-slate-700 shadow-2xl mt-[-40px] ml-[110px] lg:ml-[36px] w-[230px] h-[170px] pt-16 pl-5'>
                    <p className='text-lg font-display1'>100% Transparency</p>
                    <p className='pt-2 text-sm w-[196px] h-[54px]'>lead security with our bit to bit encryption</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose