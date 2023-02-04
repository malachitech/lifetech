import React from 'react'
// import {application} from 'react-icons/cg'
// import {SiAzuredevops} from 'react-icons/si'

import training from '../../Images/training.png'
import clientdevelopment from '../../Images/clientdevelopment.png'
import development from '../../Images/development.png'
import security from '../../Images/security.png'
import data from '../../Images/data.png'
import view from '../../Images/view.png'
import application from '../../Images/application.png'
import devops from '../../Images/devops.png'
import web from '../../Images/web.png'
const incentives = [
    {
      name: 'Web Development',
      imageSrc: web,
      description: "LifeTech professional team provides web development services based on a great expertise in developing web applications of any complexity: e-commerce website, management portals, startups web app development and custom web app development.",
    },
    {
      name: 'Devops Consulting Services',
      imageSrc: devops,
      description: "Extract the real value by uniting development, operations, and quality assurance in one service. Take advantage of our DevOps expertise to get scalable and secure end-to-end solutions in the shortest time, at the very best price.",
    },
    {
      name: 'Mobile App Development With Any Of Your Desired Stack.',
      imageSrc: application,
      description:
        "We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices.",
    },
    {
        name: 'UI/UX Design And Consulting Services.',
        imageSrc: view,
        description:
          "With our vast experience designing both B2B solutions and consumer apps, we will design a systems that your end-users will love. Turn to a top-notch design agency if you need digital solutions that drive your business forward and open new markets.",
    },
    {
        name: 'Data Analysis Solutions.',
        imageSrc: data,
        description:
          "Unlock powerful insights by tapping into data you didn't even know you had. Imagine a steady stream of insights to help you make better business decisions. Data, analytics and AI have opened the door to entirely new possibilities.",
    },
    {
        name: 'Information Security Development.',
        imageSrc: security,
        description:
          "We organizations develop a formal, documented process for managing InfoSec (ISMS). Secure your informational assets against threats and vulnerabilities. Simply, a Business Lifesaver.",
    },
    {
        name: 'Free Growth and Professional Development Plan For All LifeTechies.',
        imageSrc: development,
        description:
          "As a part of our team you would develop in the services you offer. While being a part of a team of proffessionals that gives you an exeptional collaborative environment and leverage into scarce opportuunities. Everyone contributes to the growth of the other. And as a result you would engage in life projects assigned to you or contribute in much larger projects and you get paid accordingly.",
    },
    {
        name: 'Growth And Development Services For Clients.',
        imageSrc: clientdevelopment,
        description:
          "If you are not eligible to join our team for any reason, and you just want to improve your skills, but you don't have the drive or luxury or consistency to follow up you can enroll in our paid online bootcamp which provides exceptional accountabiility services, advise on how to go about learning your desired tech skill(s) and a great learning experience that motivates you to do more. ",
    },
    {
        name: 'Online Bootcamp.',
        imageSrc: training,
        description:
          "LifeTech is also a global online bootcamp. Join in our growth journey and be a part of this tech giant. ",
    },
  ]
  
function About() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-5xl font-extrabold tracking-tight text-blue-900">
                  What We Do At LifeTech
                </h2>
                <p className="mt-4 text-gray-500">
                  We are a team of experienced and growing techies, dedicated and determined to always bring out the best in out of
                  your product ideas. Contact us for a seamless and impactful journey to building your dream product.
                </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                  alt="ecommerce"
                  className="object-center object-cover"
                />
              </div>
            </div>

            <div className='my-24'>
                <h2 className="text-5xl font-extrabold tracking-tight text-blue-900">
                    Services We Offer Clients
                </h2>
            
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                    {incentives.map((incentive) => (
                        <div key={incentive.name} className="sm:flex lg:block">
                        <div className="sm:flex-shrink-0">
                        <img
                            src={incentive.imageSrc}
                            alt="ecommerce"
                            className="w-16 h-16" 
                        />
                            
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                            <h2 className="text-xl font-medium text-blue-900">{incentive.name}</h2>
                            <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

  export default About