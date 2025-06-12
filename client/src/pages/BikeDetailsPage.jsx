import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CallButton from './CallButton'

const BikeDetailsPage = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/bikes/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Bike not found');
        }
        return response.json();
      })
      .then(data => {
        setBike(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bike:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // useEffect(() => {
  //   const fetchBikeDetails = async () => {
  //     const res = await fetch('http://localhost:5000/bikes/${id}');
  //     const data = await res.json();
  //     console.log("Fetched bike:", data);  // ✅ See this in browser console
  //     setBike(data);
  //   };
  //   fetchBikeDetails();
  // }, [id]);

  if (loading) return <div className="text-center my-5">Loading bike details...</div>;
  if (error) return <div className="text-center text-danger my-5">Error: {error}</div>;

  return (
    <div className="container my-20">
      <Link to="/inventory" className=""><button>← Back to Inventory</button></Link>

      <div className="card mx-auto" style={{ maxWidth: '800px' }}>
        <img
          src={bike.image}
          className="card-img-top"
          alt={bike.name}
          style={{ height: '400px', objectFit: 'cover' }}
        />
         {/* <img
                src={bike.image}
                className="card-img-top"
                alt={bike.name}
                style={{ height: '250px', objectFit: 'cover' }}
              /> */}
        <div className="card-body">
          <h2 className="card-title">{bike.name}</h2>
          <p className="card-text"><strong>Year:</strong> {bike.year}</p>
          <h4 className="text-success">Rs-{bike.price}</h4>

          <h5 className="mt-4">Description:</h5>
          <p>{bike.description}</p>

          <h5 className="mt-4">More Photos:</h5>
          <div className="row">
            {bike.morePhotos && bike.morePhotos.map((photoUrl, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img
                  src={photoUrl}
                  alt={`Bike photo ${index + 1}`}
                  className="img-fluid rounded"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
           <CallButton/>
        </div>
      </div>
    </div>
  );
};

export default BikeDetailsPage;