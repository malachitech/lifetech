import React from 'react'
import './Testimonials.css'
import { BsAlarm } from "react-icons/bs";
import { MdPermDeviceInformation } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import TestimoniesSlider from './TestimonialSlider';
function Testimonials() {
    return (
      <div className="bg-white pt-16 lg:py-18">
        <div className="pb-16 bg-blue-900 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8 bg-blue-100 ">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white hidden " />
              <div className="mx-auto max-w-md sm:max-w-3xl p-0  lg:h-full bg-blue-100">
                <div className=" mb-6 aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full p-4  bg-blue-100">
                
                    <div className="testimonialtitle">
                        <h2 className="card_title">Why People Join Our Team</h2>
                        
                    </div>
                  
                    <div className='reasons'>
                        <div className='flex  items-center justify-center p-2 m-2'>
                            <div className='text-5xl px-4 text-blue-900'>
                                <BsAlarm />
                            </div>

                            <div className='text-blue-900'>
                                <h2 className='text-l  text-blue-700 font-extrabold mb-2'>
                                    24 Hours Support
                                </h2>
                                <p>
                                    We offer a 24hours support to all lifetechies. Your team will always be there to help.
                                </p>
                            </div>
                            
                        </div>

                        <div className="brline"/>

                        <div className='flex  items-center justify-center p-2 m-2'>
                            <div className='text-5xl px-4 text-blue-900'>
                                <RiSecurePaymentFill />
                            </div>

                            <div className='text-blue-900'>
                                <h2 className='text-l  text-blue-700 font-extrabold mb-2'>
                                    Uncompromisable, Collaborative Growth System
                                </h2>
                                <p>
                                    Your growth is a priority, our achievements are your achievements.
                                </p>
                            </div>
                            
                        </div>

                        <div className="brline"/>

                        <div className='flex  items-center justify-center p-2 m-2'>
                            <div className='text-5xl px-4 text-blue-900'>
                                <MdPermDeviceInformation />
                            </div>

                            <div className='text-blue-900'>
                                <h2 className='text-l  text-blue-700 font-extrabold mb-2'>
                                    Jobs Outsourcing and Refferals
                                </h2>
                                <p>
                                    As a team we offer tech solutions for various platforms both large scale and small scale. 
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12  lg:m-0 lg:col-span-2 lg:pl-8">
              <TestimoniesSlider />
            </div>
          </div>
        </div>
      </div>
    )
  }


  export default Testimonials