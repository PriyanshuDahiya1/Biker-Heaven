import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InventoryPage from './InventoryPage';
import NewsletterForm from '../NewsLetter';

function Inventory() {
  return (
    <>
 <div class="content">
  {/* <!-- Hero Section --> */}
  <section class="relative">
   <img alt="Motorcycles" class="w-full h-90 object-cover"  src="inventory.jpg" style={{height:"300px", width:"100%"}}/>
   <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-5xl font-bold text-white " style={{  fontFamily:"'Times New Roman', Times, serif"}}>
     INVENTORY
    </h1>
   </div>
  </section>
  {/* <!-- Categories -->
  <section class="bg-gray-100 py-6">
  <div className="flex flex-wrap mt-8">
     <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
       <img alt="Adventure Bike" className="w-full" height="200" src="adventure.jpg" width="300"/>
       <div className="p-4">
        <h3 className="text-xl font-bold">
          <Link to="/adventure" style={{textDecoration:'none', color:'Black'}}>Adventure</Link>
        <a href="Adventure.jsx" style={{textDecoration:'none', color:'Black'}} > Adventure</a>
        </h3>
       </div>
      </div>
     </div>
     <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
       <img alt="Cafe Racer/classNameic Bike" className="w-full" height="200" src="cafe.jpg" width="300"/>
       <div className="p-4">
        <h3 className="text-xl font-bold">
        <Link to="/caferacer" style={{textDecoration:'none', color:'Black'}}>Cafe Racer</Link> 
        </h3>
       </div>
      </div>
     </div>
     <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
       <img alt="Cruiser Bike" className="w-full" height="200" src="cruiser.jpg" width="300"/>
       <div className="p-4">
        <h3 className="text-xl font-bold">
        <Link to="/cruiser" style={{textDecoration:'none', color:'Black'}}>Cruiser</Link>
        </h3>
       </div>
      </div>
     </div>
     <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
       <img alt="Sports Bike" className="w-full" height="200" src="sports.avif" width="300"/>
       <div className="p-4">
        <h3 className="text-xl font-bold">
         <Link to="/sports" style={{textDecoration:'none', color:'Black'}}>sports</Link> 
        </h3>
       </div>
      </div>
     </div>
    </div>
  </section> */}
  {/* <!-- Main Content --> */}
  <div class="container mx-auto flex py-8">
   {/* <!-- Main Section --> */}
   <main class="w-3/4">
    <h2 class="text-2xl font-bold mb-6">
     Bikes On Sale
    </h2>
    <div class="grid grid-cols-1 gap-6">
      <InventoryPage/>
    {/* <BikeData name="Hayabusa 2024" img="sports.avif"   />
    <BikeData name="BMW 1250" img="adventure.jpg" />
    <BikeData name="Harley Davidson" img="cruiser.jpg" />
    <BikeData name="BMW" img="cafe.jpg" />
    <BikeData  name="H2" img="ninja h2.jpg" />
    <BikeData name="BMW m1000rr" img="m1000rr.jpg"/>
    <BikeData name="H2" img="ninja h2.jpg"/>
    <BikeData name="H2" img="ninja h2.jpg" />
    <BikeData name="H2" img="ninja h2.jpg"/>
    <BikeData name="H2" img="ninja h2.jpg"/>
    <BikeData name="H2" img="ninja h2.jpg"/> */}
    </div>
   </main>
  </div>
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
      914, Bichpadi, near Dyal Singh Public School, Panipat, 132103, Haryana      </p>
      <p className="mt-2">
      Phone: +91 9350370846
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

export default Inventory
