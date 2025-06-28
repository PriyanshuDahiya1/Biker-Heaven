// HomePage.js
import React from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import CallButton from './CallButton';
import NewsletterForm from '../NewsLetter';
import VideoPage from './VideoPage';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <><div className="content">
        <section className="relative bg-cover bg-center">
          <div className="absolute inset-0  opacity-50">
            <img src="adventure.jpg" alt="" style={{ width: "100%", height: "770px" }} />
          </div>
          <div className="container mx-auto text-center py-24 relative z-10">
            <h1 className="text-4xl font-bold text-black mt-[80px]" style={{ fontFamily: "'Times New Roman', Times, serif", marginTop: '80px' }}>
              BIKERSHEAVEN <h3>WELCOMES YOU</h3>
              
      <div className="p-6 text-center">
      {user ? (
        <>
          <p className="text-lg">Hello, {user.username}!</p>
          {user.role !== 'admin' && (
              <div className="mt-4">
                {/* <Link to="/sell" className="bg-yellow-500 px-4 py-2 rounded mr-2">
                  Sell a Bike
                </Link>
                <Link to="/enquiry" className="bg-green-500 px-4 py-2 rounded">
                  Send Enquiry
                </Link> */}
              </div>
            )}
        </>
      ) : (
        <p className="text-lg">Please login or sign up to buy or sell bikes.</p>
      )}
    </div>
            </h1>

            <Link to="/inventory" className="mt-6 inline-block bg-red-600 text-white py-2 px-4 rounded" style={{ textDecoration: 'none' }}>INVENTORY</Link>
          </div>
        </section>

        {/* <!-- About Us Section --> */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-black" style={{ color: '#111' }}>
              About us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-black" style={{ color: '#111', fontWeight: 600 }}>
              BIKERSHEAVEN is your one-stop destination for all things related to high-performance motorcycles. We offer a wide range of bikes from top brands, ensuring that you find the perfect ride to match your style and needs. Our team of experts is dedicated to providing exceptional service and support to all our customers.
            </p>
          </div>
        </section>

        {/* <!-- Inventory Section --> */}
        <section className="py-16">
          <div className="container mx-auto">

            <VideoPage /><br />
            <h1 className="text-3xl font-bold text-sucess text-center">
              <marquee behavior="" direction="">Life is short, buy the motorcycle, have a ride, live your dreams</marquee>
            </h1>
            {/* <div className="flex flex-wrap mt-8">
     <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
       <img alt="Adventure Bike" className="w-full" height="200" src="adventure.jpg" width="300"/>
       <div className="p-4">
        <h3 className="text-xl font-bold">
          <Link to="/adventure" style={{textDecoration:'none', color:'Black'}}>Adventure</Link>
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
    </div> */}


            <div className="mt-8 flex flex-wrap">
              <div className="w-full md:w-1/2 p-4">
                <img alt="Triumph Tiger" className="w-full rounded-lg shadow-md" height="400" src="H2.jpg" width="600" />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-2xl font-bold">
                  Kawasaki
                </h3>
                <h4 className="text-xl font-semibold mt-2">
                  Ninja H2
                </h4>
                <p className="mt-4 text-gray-700">
                  Engine: 988cc liquid-cooled 4-stroke DOHC valve in-line four cylinder | Power: 228 hp @ 11500 RPM |Torque: 104.9 lb-ft @ 11000 RPM | Wet Weight: 524.8 lbs (238.1 kg) | Seat Height: 32.5 inches (825.5 mm) at lowest point
                </p>
                <p className="mt-4 text-red-600 text-2xl font-bold">
                  34.75 Lakh
                </p>
                <div className="mt-6">
                  <CallButton />

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Brands Section --> */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6 flex justify-center space-x-8">
            <img alt="Aprilia Logo" height="50" src="Aprilia.webp" width="100" />
            <img alt="Indian Motorcycle Logo" height="50" src="Indian.jpg" width="100" />
            <img alt="Triumph Logo" height="50" src="Triumph.jpg" width="120" />
            <img alt="Honda Logo" height="50" src="Honda.png" width="100" />
            <img alt="Benelli Logo" height="50" src="Beneli.jpg" width="100" />
            <img alt="Kawasaki Logo" height="50" src="Kawasaki.png" width="120" />
            <img alt="Suzuki Logo" height="50" src="Suzuki.jpg" width="100" />
            <img alt="Harley Davidson Logo" height="50" src="Harley.jpg" width="100" />
            <img alt="Ducati Logo" height="50" src="Ducati-logo.jpg" width="100" />
          </div>
        </section>

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
                <NewsletterForm />
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
      </div></>

  );
};

export default HomePage;
