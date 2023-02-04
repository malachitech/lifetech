import React from 'react'
import { Link } from 'react-router-dom'
import eastdaledashboarddesktop from '../../Images/eastdaledashboarddesktop.JPG'
import './Call.css'

function Call() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center leading-10">
                <h2 className="font-extrabold text-white sm:text-4xl leading-10">
                  <span className="block text-5xl sm:text-5xl  leading mb-4">Do You need a Software?</span>
                  <span className="block text-xl leading-8">We can make you thrive in the market space, especially if the media/web is your leverage.</span>
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-200">
                    We are offering you the best services as it suits your budget, with effective results.
                </p>

                <div className='mt-8 flex items-center justify-start'>
                    <Link
                    to="/contact"
                    className="mr-5  bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-100"
                    >
                    Contact Us
                    </Link>

                    <Link
                    to="/careers"
                    className=" bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-100"
                    >
                    Work With Us
                    </Link>
                </div>
                
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="callImg h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={eastdaledashboarddesktop}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default Call