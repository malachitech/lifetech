import React from "react"
import { Link } from "react-router-dom"
import eastdaleloadedui from '../../Images/eastdaleloadedui.JPG'
import staffappcta from '../../Images/staffappcta.JPG'
/* This example requires Tailwind CSS v2.0+ */
function DataPortfolio() {
    return (
        <div className="overflow-hidden bg-white py-10 sm:py-20">
            <h2 className="uppercase text-center text-xl sm:text-2xl py-20 font-extrabold text-blue-900">
                Data Science Portfolio
            </h2>
            <div>
                <div className="mx-auto max-w-7xl ">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 uppercase">BANKING WEB APP</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Eastdale Microfinance Bank</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">This is full stack banking app. It has frontend to engaged users in the best ways. It also has dashboard for users with account.  The backend consists of different roles like customer, admin, and staffs. It also has routes they can access individually.  Users account can be filled with points that represent actual money. </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                {/* <!-- Heroicon name: mini/cloud-arrow-up --> */}
                                <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                </svg>
                                Stacks and Technologies Used: 
                                </dt>
                                <dd className="inline">&nbsp;React, Nodejs, express, javascript, mongodb, redux, react-router, tailwindcss.</dd>
                            </div>
                
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                {/* <!-- Heroicon name: mini/lock-closed --> */}
                                <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                                Link:
                                </dt>
                                <Link className="inline" to="http://eastdalefinance.onrender.com">&nbsp;eastdalefinance.onrender.com</Link>
                                
                            </div>
                
                            
                            </dl>
                        </div>
                        </div>
                        <img src={eastdaleloadedui} alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                    </div>
                </div>
            </div>

            {/* project two */}

            <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl ">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 uppercase">STAFF WORKFLOW MANAGEMENT</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Staff App</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">This is full stack staff management appliccation. Staffs can register and log in, receive task(s) that has been assigned to them, submit, get a review and go again and again. </p>
                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                            {/* <!-- Heroicon name: mini/cloud-arrow-up --> */}
                            <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                            </svg>
                            Stacks and Technologies Used: 
                            </dt>
                            <dd className="inline">&nbsp;React, mysql, express, javascript, mongodb, redux, react-router, tailwindcss.</dd>
                        </div>
            
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                            {/* <!-- Heroicon name: mini/lock-closed --> */}
                            <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                            </svg>
                            Further Possible Integrations:
                            </dt>
                            <dd className="inline">&nbsp;Advanced payroll system.</dd>
                            <dd className="inline">&nbsp;Connecting Debit Cards.</dd>
                            <dd className="inline">&nbsp;Collaborative Task Execution.</dd>
                        </div>
                        <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                {/* <!-- Heroicon name: mini/lock-closed --> */}
                                <svg className="absolute top-1 left-1 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                                Link:
                                </dt>
                                <Link className="inline" to="https://staffapp-frontend.onrender.com/">&nbsp;https://staffapp-frontend.onrender.com/</Link>
                                
                            </div>
                        
                        </dl>
                    </div>
                    </div>
                    <img src={staffappcta} alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                </div>
            </div>
        </div>
        

        {/* project two ends */}
        </div>
       
    )
  }

export default DataPortfolio