import React from "react"
import { Link } from "react-router-dom"

function ServiceTemplate({title,  desc, imgOne, imgTwo}) {
    return (
      <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Serverless</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              {title}
            </p>
            <p className="mt-5 text-left text-xl text-gray-500">
              {desc}
            </p>
          </div>

          <div className="my-10 sm:flex sm:justify-center ">
            <div className="w-full sm:w-1/2 sm:h-full my-20 sm:m-20">

              <img
                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src={imgOne}
                alt={title}
              />
              <h3>Project Name</h3>
            </div>

            <div  className="w-full sm:w-1/2 sm:h-full my-20 sm:m-20">

              <img
                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 h-full"
                src={imgTwo}
                alt={title}
              />
              <h3>Project Name</h3>
            </div>
            
          </div>
        </div>
        
        
            <dl className=" w-full mx-auto  space-y-8 text-base leading-7 text-gray-600 lg:max-w-xl">
            <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                {/* <!-- Heroicon name: mini/cloud-arrow-up --> */}
                <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                </svg>
                Stacks and Technologies Used: 
                </dt>
                <dd className="inline">&nbsp;React, Nodejs, express, javascript, mongodb, redux, react-router, tailwindcss.</dd>
            </div>

            <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                {/* <!-- Heroicon name: mini/lock-closed --> */}
                <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
                Further Possible Integrations:
                </dt>
                <dd className="inline">&nbsp;Paystack api for actual debit and credit of real money.</dd>
                <dd className="inline">&nbsp;Getting A Debit Card.</dd>
            </div>

            <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                {/* <!-- Heroicon name: mini/lock-closed --> */}
                <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
                Link:
                </dt>
                <Link className="inline" to="http://eastdalefinance.onrender.com">&nbsp;eastdalefinance.onrender.com</Link>
                
            </div>

            
            </dl>
        
      </div>
    )
  }

export default ServiceTemplate