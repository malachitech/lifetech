import React from 'react'
import ServiceTemplate from '../ServiceTemplate/ServiceTemplate'

import web2 from "../../Images/web2.jpg"

function DataScience() {
  return (
    <div>
        <ServiceTemplate 
            title="Data Science Services" 
            desc="Conversion of ideas into real solutions starting with the development of a concept and ending 
                with the creation of a full-fledged web application is always a multi-stage, time-consuming and responsible process. The final result is crucially depends on how competent the work will be organized.
                lifetech professional team provides web development services based on a great expertise in developing 
                web applications of any complexity: corporate solutions, games, instant messenger web clients, 
                entertainment portals, cloud storages, music services. We are always ready to do challenging projects 
                and offer fresh solutions."
            imgOne="https://media.istockphoto.com/id/1188841211/photo/this-computer-is-like-my-second-brain.jpg?s=612x612&w=0&k=20&c=8COmfcV6SyM3J5XUFLvP-wfDItjF9Xpn2zBbuhbDPzU="
            imgTwo={web2} 
        />
    </div>
  )
}

export default DataScience