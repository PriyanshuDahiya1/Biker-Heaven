import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "tailwindcss";
import NewsletterForm from '../NewsLetter';

function About() {
  return (
    <>
       
 <div class="content">
  {/* <!-- Header --> */}
  <header class="relative">
   <img alt="Motorcycles in a showroom" class="w-full h-96 object-cover"  src="about.jpg" style={{height:"300px", width:"100%"}}/>
   <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
   <h1 class="text-5xl font-bold text-white"style={{  fontFamily:"'Times New Roman', Times, serif"}}>
     About Us
    </h1>
  </div>
  </header>
  {/* <!-- Company Story --> */}
  <section class="bg-white py-16">
   <div class="container mx-auto px-4">
    <h2 class="text-red-600 text-xl font-bold mb-4">
     WELCOME TO THE BIKERSHEAVEN
    </h2>
    <h3 class="text-4xl font-bold mb-6">
     Company Story
    </h3>
    <p class="text-gray-700 mb-6">
    BikersHeaven is the luxury marketplace for pre owned luxury, exotic and imported Bikes for sale in India. With a collection of over 100+ rare exotic superbikes; searching for your dream luxury Bike has never been easier. Have a luxury Bike in mind or simply browsing through our vast inventory of used exotic bikes. Your dream motor pre owned exotic bike is simply a click away.
    </p>
    <p class="text-gray-700 mb-6">
     Irrespective of which luxury bike brand you choose, every pre owned exotic bike in our inventory goes through our highest level of scrutiny, assuring you the best in quality standards. So what are you waiting for, join the exclusive group of exotic bike owners in Delhi and all over India, by driving away with one of your own.
    </p>
   </div>
  </section>
  {/* <!-- Core Values --> */}
  <section class="bg-red-600 text-white py-16">
   <div class="container mx-auto px-4">
    <h3 class="text-4xl font-bold mb-6">
     CORE VALUES
    </h3>
    <ul class="list-disc list-inside space-y-4">
     <li>
      We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your lifestyle.
     </li>
     <li>
      Stress-free finance department.
     </li>
     <li>
      Robust selection of popular vehicles.
     </li>
     <li>
      350 offers on site, trusted by a community.
     </li>
     <li>
      Maintain your Motorcycle to stay safe on the road
     </li>
     <li>
      We know how to handle a wide range of Motorcycle services.
     </li>
    </ul>
   </div>
  </section>
  {/* <!-- Our Advantages --> */}
  <section class="bg-gray-100 py-16">
   <div class="container mx-auto px-4">
    <h2 class="text-red-600 text-xl font-bold mb-4">
     All The Above
    </h2>
    <h3 class="text-4xl font-bold mb-6">
     OUR ADVANTAGES
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
     <div>
      <p class="text-gray-700 mb-4">
       Do you want to sell a Motorcycle?
      </p>
      <p class="text-gray-700 mb-4">
       What's your Motorcycle worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!
      </p>
      <p class="text-gray-700 mb-4">
       Are You looking for a Used Motorcycle?
      </p>
      <p class="text-gray-700">
       Our Motorcycles are delivered fully-registered with all requirements completed. We'll deliver your Motorcycle wherever you are.
      </p>
     </div>
    </div>
   </div>
  </section>
{/* <!-- Brands Section --> */}
<section className="py-12 bg-gray-100">
   <div className="container mx-auto px-6 flex justify-center space-x-8">
    <img alt="Aprilia Logo" height="50" src="Aprilia.webp" width="100"/>
    <img alt="Indian Motorcycle Logo" height="50" src="Indian.jpg" width="100"/>
    <img alt="Triumph Logo" height="50" src="Triumph.jpg" width="120"/>
    <img alt="Honda Logo" height="50" src="Honda.png" width="100"/>
    <img alt="Benelli Logo" height="50" src="Beneli.jpg" width="100"/>
    <img alt="Kawasaki Logo" height="50" src="Kawasaki.png" width="120"/>
    <img alt="Suzuki Logo" height="50" src="Suzuki.jpg" width="100"/>
    <img alt="Harley Davidson Logo" height="50" src="Harley.jpg" width="100"/>
    <img alt="Ducati Logo" height="50" src="Ducati-logo.jpg" width="100"/>
   </div>
  </section>
  {/* <!-- Newsletter Section --> */}
  <section className="py-16 bg-gray-800 text-white">
   <div className="container mx-auto">
    <div className="flex flex-wrap">
     <div className="w-full md:w-1/3 p-4">
      <h3 className="text-xl font-bold">
       Newsletter
      </h3>
      <p className="mt-2">
       Subscribe to our newsletter to get the latest updates and offers.
      </p>
     <NewsletterForm/>
     </div>
     
     <div className="w-full md:w-1/3 p-4">
      <h3 className="text-xl font-bold">
       Contact Us
      </h3>
      <p className="mt-4">
      Kharkhoda, 131402, Haryana      </p>
      <p className="mt-2">
      Phone: +91 7015652437
            </p>
      <p className="mt-2">
      Sales@bikerheaven.com
      </p>
     </div>
    </div>
   </div>
  </section>
  {/* <!-- Footer --> */}
  <footer className="bg-gray-900  text-center text-white py-4">
  <div className="container">
        <div className="mb-3">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-4">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-4">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-4">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
        <p className="mb-0">&copy; 2025 Bikers Heaven. All rights reserved.</p>
      </div>

  </footer>
 </div>
      
    </>
  )
}

export default About
