import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const InventoryPage = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/bikes') // your local API
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch bikes');
        }
        return response.json();
      })
      .then(data => {
        setBikes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bikes:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredBikes = bikes.filter(bike =>
    bike.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="text-center my-5">Loading bikes...</div>;
  if (error) return <div className="text-center text-danger my-5">Error: {error}</div>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"></h1>

      {/* Search Box */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            placeholder="Search bikes..."
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Bike Cards */}
      <div className="row">
        {filteredBikes.map(bike => (
          <div key={bike.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={bike.image}
                className="card-img-top"
                alt={bike.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{bike.name}</h5>
                <p className="card-text">Year: {bike.year}</p>
                <p className="card-text">Owner: {bike.owner}</p>
                <p className="card-text text-success fw-bold">Rs-{bike.price}</p>
            
                <Link to={`/bikes/${bike.id}`} className="btn btn-primary mt-auto" style={{textDecoration:"none"}}> View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBikes.length === 0 && (
        <div className="text-center mt-5">
          <h5>No bikes match your search.</h5>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;