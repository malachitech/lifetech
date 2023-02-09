import React from "react"

function Contact() {
    return (
      <div className="relative bg-blue-50">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-full w-full object-cover lg:absolute lg:h-1/2 block"
              src="https://media.istockphoto.com/id/1448505771/photo/portrait-of-tired-programer-rubbing-eyes-while-typing-on-laptop-sitting-at-desk-with-multiple.jpg?s=612x612&w=0&k=20&c=BNg1QrXe-CN9_6kS8doCeNv1vltgf7vGIDEItGbZpRY="
              alt="contact lifetech"
            />
            <img
              className="h-full w-full object-cover lg:absolute lg:bottom-0 lg:h-1/2 block"
              src="https://media.istockphoto.com/id/1454434690/photo/black-woman-contact-us-and-call-center-employee-phone-call-for-customer-service-or-tech.jpg?s=612x612&w=0&k=20&c=1vsBm-wRmZ96xVoT_rl1uyX73CPE83fEMI_Sdt0jgew="
              alt="contact lifetech"
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's work together</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Do you need any web product designed for you, or you want to be a lifetechie. We&nbsp;d are ready to delivery the best services to you! Send us a message using the form below, or email us. 
              </p>
              <form action="/" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="col-span-2">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label htmlFor="whatyoudo" className="block text-sm font-medium text-gray-700">
                    What You do
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="whatyoudo"
                      id="whatyoudo"
                      autoComplete="organization"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <span id="how-can-we-help-description" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
                </div>
                
                <div className="col-span-2">
                  <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how-did-you-hear-about-us"
                      id="how-did-you-hear-about-us"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Contact