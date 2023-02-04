import React from 'react'

import { Link } from 'react-router-dom'


function Careers() {
    const incentives = [
        {
            name: 'Free Growth and Professional Development Plans.',
            imageSrc: "https://media.istockphoto.com/id/1335719673/photo/blue-stair-step-to-growth-success-3d-render-progress-way-and-forward-achievement-creative.jpg?s=612x612&w=0&k=20&c=ssViyMMcOT1M5Jg_zjVQHmvyARe-N6UEDzCTu2p79wo=",
            description:
              "As a part of our team you would develop in the services you offer. While being a part of a team of proffessionals that gives you an exeptional collaborative environment and leverage into scarce opportuunities. Everyone contributes to the growth of the other. And as a result you would engage in life projects assigned to you or contribute in much larger projects and you get paid accordingly.",
        },
        {
          name: 'Physical and Automated Accountability Monitoring Systems',
          imageSrc: "https://media.istockphoto.com/id/1316581457/photo/business-colleagues-putting-their-hands-together-in-office-room-making-piles-of-hands-showing.jpg?s=612x612&w=0&k=20&c=iAQij0rSYJj3Xg4uMIyMWl6CgCe1UL1nVmI4lQBIxcQ=",
          description: "Our aim is to be a team of experts. To achieve this we have to always work on ourselves to develop everyday. To achieve this we commit ourselves to eachother's growth by being accountable of our individual learning process. To become a part of our team you must be commited to growth and development.",
        },
        {
          name: 'Job Opportunities And Paid Remote Collaborations.',
          imageSrc: "https://media.istockphoto.com/id/1034315254/photo/we-have-a-spot-open-for-a-new-team-member.jpg?s=612x612&w=0&k=20&c=BBQvR9yISKAj2VRzX0E1WjElaVp-CvhPMQwbtscVYTU=",
          description:
            "All LifeTechies Have access to job updates. Plus, they get to collaborate in paid live projects given to us as a team and earn money for their services.",
        },
        {
            name: 'Learning Management Services and Free Online Bootcamp.',
            imageSrc: "https://media.istockphoto.com/id/1368145763/photo/hand-holds-wooden-cube-with-lms-symbols-on-beautiful-light-background-with-copy-space-online.jpg?s=612x612&w=0&k=20&c=a6PETnhH9gHdJEQ4r7g3rKm-MoBzY7TClRxnLWH6PVc=",
            description:
              "Access to our learning management system and materials for their professional development.",
        },


        {
            name: 'Physical And Online Training Bootcamp.',
            imageSrc: "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2glMjBib290Y2FtcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            description:
              "LifeTech offers free trainings to all LifeTechies. Access to courses and material for their professional development. ",
        },
      ]
  return (
    <div className='my-24 p-5'>
        <h2 className="text-5xl font-extrabold tracking-tight text-blue-900">
            Careers
        </h2>
        <p className='font-extrabold tracking-tight text-blue-900'>What We Offer Our Techies.</p>
    
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                <img
                    src={incentive.imageSrc}
                    alt="ecommerce"
                    className="w-full h-full" 
                />
                    
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h2 className="text-xl font-medium text-blue-900">{incentive.name}</h2>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
                </div>
            ))}
        </div>

        <div className='my-10 flex justify-center items-center'>
            <Link
                to="/careers"
                className=" bg-blue-900 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-100 hover:bg-blue-800"
                >
                Work With Us
            </Link>
        </div>
        
    </div>
    
  )
}

export default Careers