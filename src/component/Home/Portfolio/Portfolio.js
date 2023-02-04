import React from "react"
import DataPortfolio from "./DataSciencePortfolio"
import WebDevPortfolio from "./WebDevPortfolio"

/* This example requires Tailwind CSS v2.0+ */
function Portfolio() {
    return (
        <div className="px-4">
            <h2 className="text-5xl font-extrabold tracking-tight text-blue-900">
                Portfolio
            </h2>
            <p className="mt-4 text-gray-500  text-lg font-extrabold">
                Check out these projects we have worked on, for either monetary or learning purposes. They are grouped in the different tech services that we offer.  
            </p>
            
            <WebDevPortfolio />
            <DataPortfolio />
        </div>
        
    )
  }

export default Portfolio