import React from 'react'
import NewsletterForm from '../NewsLetter';


const teamMembers = [
  {
    name: 'Priyanshu Dahiya',
    role: 'Founder & Bike Aficionado',
    description: 'A lifelong cyclist with a vision to make quality bikes accessible to everyone.',
    image: '/public/owner1.png' // Replace with real image URLs
  },
  {
    name: 'Mia',
    role: 'Founder & Bike Aficionado',
    description: 'Restores every pre-owned bike with care, precision, and a bit of grease magic.',
    image: '/public/owner 2.jpeg' // Replace with real image URLs
  },
  {
    name: 'Sam',
    role: 'Customer Care Lead',
    description: 'Your go-to for questions, support, and a friendly chat about all things cycling.',
    image: '/public/emp1.jpeg' // Replace with real image URLs
  },
  {
    name: 'Leo',
    role: 'Logistics Hero',
    description: 'Makes sure your bike gets to you safe, fast, and ready to ride.',
    image: '/public/emp 2.jpeg' // Replace with real image URLs
  }
];

function OurFamily() {
  return (
    <>
 <div class="content">


  <section class="relative">
   <img alt="Motorcycles in a showroom" class="w-full h-90 object-cover" src="fam.jpg" style={{height:"300px", width:"100%"}} />
   <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-white text-4xl font-bold" style={{  fontFamily:"'Times New Roman', Times, serif"}}>
     OUR FAMILY
    </h1>
   </div>
  
  </section>
   <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={member.image} className="card-img-top" alt={`${member.name}`} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  {/* <!-- Our Clients Section --> */}
  {/* <section class="py-16">
   <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-2">
     Our Clients
    </h2>
    <p class="text-lg mb-8">
     WELCOME TO THE BIKERHEAVEN
    </p><br />
    <p class="text-lg mb-8">
     Coming Soon.......
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    </div>
   </div>
  </section> */}
 {/* <!-- Brands Section --> */}
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
      Kharkhoda, 13402, Haryana      </p>
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

export default OurFamily
