require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

// Register Endpoint (Optional for testing)
app.post('/api/register', async (req, res) => {
  const { username, password, role } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword, role });
  await newUser.save();
  res.json({ message: 'User registered' });
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user._id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});


// Schema
const MotorcycleForSaleSchema = new mongoose.Schema({
  sellerName: String,
  contactInfo: String,
  model: String,
  year: Number,
  price: Number,
  description: String,
  listedAt: { type: Date, default: Date.now },
});

const MotorcycleForSale = mongoose.model('MotorcycleForSale', MotorcycleForSaleSchema);

// POST endpoint
app.post('/api/sell', async (req, res) => {
  try {
    const newListing = new MotorcycleForSale(req.body);
    await newListing.save();
    res.status(201).send('Motorcycle listing created!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// Mongoose Schema
const bikeSellSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  bikeModel: String,
  date: String,
});

const BikeSell = mongoose.model('BikeSell', bikeSellSchema);

// POST route
app.post('/api/sell-bike', async (req, res) => {
  try {
    const newListing = new BikeSell(req.body);
    await newListing.save();
    res.status(201).send('Bike listing saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});


// Sample bike data
const bikes = [
  {
    id: 1,
    name: "Kawasaki Versys 1000",
    price: 1219000,
    image: "/public/1000.jpg",
    year: 2022,
    owner: "second",
    morePhotos: [
      "/public/1000.jpg",
      "/public/1000.jpg",
      "/public/1000.jpg"
    ],
    description: "Engine: 1043cc in-line four-cylinder engine Power: 120 HP @ 9,000 rpm Torque: 75.2 ft-lbs of torque @ 7,500 rpm Curb Weight: 567 lbs (257 kg) Seat Height: 33.1 in (840mm)"
  }, 
  {
    id: 2,
    name: "Ducati Panigale V4",
    price: 3358000,
    image: "/public/panigale.jpg",
    year: 2023,
    owner: "second",
    morePhotos: [
      "/public/panigale.jpg",
      "/public/panigale.jpg",
      "/public/panigale.jpg"
    ],
    description: "Engine: 1,103cc Desmosedici Stradale V4 engine Power: 210 HP (215.5 HP for US spec) Torque: 90.6 lbs-ft (123.6 Nm for Euro 5 spec) Dry Weight: 384 lbs (175 kg) Seat Height: 33.5 in (850 mm)"
  },
  {
    id: 3,
    name: "BMW S1000RR",
    price: 2110000,
    image: "/public/BMWs1000rr.jpg",
    year: 2021,
    owner: "second",
    morePhotos: [
      "/public/BMWs1000rr.jpg",
      "/public/BMWs1000rr.jpg",
      "/public/BMWs1000rr.jpg"
    ],
    description: "Engine: 999cc liquid-cooled four-cylinder inline engine with BMW ShiftCam technology. Power: 205 hp at 13,000 rpm. Torque: 83 lb-ft at 11,000 rpm. Wet Weight: 434 lbs. Seat Height: 32.4 inches."
  },
  {
    id: 4,
    name: "BMW M1000RR",
    price: 4900000,
    image: "/public/BMWM1000rr.jpg",
    year: 2021,
    owner: "second",
    morePhotos: [
      "/public/BMWM1000rr.jpg",
      "/public/BMWM1000rr.jpg",
      "/public/BMWM1000rr.jpg"
    ],
    description: "Engine: 999 cc Inline 4 Cyl Power: 205-212 hp Torque: 83 lb-ft (113 Nm) Wet Weight: 375-423 lbs (170-192 kg) Seat Height: 32.8 inches (832-833 mm)"
  },
  {
    id: 5,
    name: "Duacti Street Fighter ",
    price: 2462000,
    image: "/public/Duacti Street Fighter.jpg",
    year: 2021,
    owner: "second",
    morePhotos: [
      "/public/Duacti Street Fighter.jpg",
      "/public/Duacti Street Fighter.jpg"
    ],
    description: "Engine: 1,103 cc Desmosedici Stradale V4 engine Power: 208 HP Torque: 90.4 lbs-ft Wet Weight: 441 lbs (200 kg) Seat Height: 33.3 in (845 mm) at lowest point " 
  },
  {
    id: 6,
    name: "Kawasaki Ninja 650",
    price: 627261,
    image: "/public/Kawasaki Ninja 650.jpeg",
    year: 2021,
    owner: "second",
    morePhotos: [
      "/public/Kawasaki Ninja 650.jpeg",
      "/public/Kawasaki Ninja 650.jpeg",
      "/public/Kawasaki Ninja 650.jpeg"
    ],
    description: "Engine: 649cc liquid-cooled parallel twin with dual 36mm Keihin throttle bodies. Power: 67 hp @ 8,000 rpm. Torque: 47 lb-ft of torque at 6,700 rpm. Dry Weight: 423 lbs (192kg). Seat Height: 31.1 inches (790 mm)"
  },
  {
    id: 7,
    name: "Duacti Monster",
    price: 1462000,
    image: "/public/Duacti Monster.jpg",
    year: 2021,
    owner: "second",
    morePhotos: [
     "/public/Duacti Monster.jpg",
     "/public/Duacti Monster.jpg",
     "/public/Duacti Monster.jpg"
    ],
    description: "Engine: 937cc L-Twin Power: 111 hp Torque: 69 lbs-ft at the crank Wet Weight: 414 lbs (188 kg) Seat Height: 32.2 inches (820 mm) at lowest point"
  },
  {
    id: 8,
    name: "Ducati Super Sport",
    price: 1811000,
    image: "/public/Ducati Super Sport.jpg",
    year: 2021,
    owner: "second",
    morePhotos: [
    "/public/Ducati Super Sport.jpg",
    "/public/Ducati Super Sport.jpg",
    "/public/Ducati Super Sport.jpg"
    ],
    description: "The BMW S1000RR is a liter-class superbike known for its agility and technological innovations."
  },
  {
    id: 9,
    name: "Honda Gold Wing",
    price: 4133000 ,
    image: "/public/Honda Gold Wing.avif",
    year: 2021,
    owner: "second",
    morePhotos: [
     "/public/Honda Gold Wing.avif",
     "/public/Honda Gold Wing.avif"
    ],
    description: "Displacement 1833 cc Maximum Power 125.3 hp Fuel Tank Capacity 21 L Engine Type 6 Cylinder, 4-Stroke, 24-Valve, SOHC Liquid-cooled Engine Maximum Torque 171 Nm Bore X Stroke 73 mm x 73 mm Clutch Type Wet, Multi-Plate Cooling System Liquid Cooled"
  },
  {
    id: 10,
    name: "Kawasaki Ninja 1100 sx",
    price: 1349000,
    image: "/public/Kawasaki Ninja 1100 sx.avif",
    year: 2021,
    owner:"second",
    morePhotos: [
      "/public/Kawasaki Ninja 1100 sx.avif",
      "/public/Kawasaki Ninja 1100 sx.avif",
      "/public/Kawasaki Ninja 1100 sx.avif"
    ],
    description: "Engine: 1,043cc in-line four Power: 124.3 hp @ 9,500 rpm Torque: 75.4 lb-ft of torque @ 8,000 rpm Curb Weight: 514 lbs (233 kg) Seat Height: 32.3 inches (820mm)"
  },
  {
    id: 11,
    name: "Kawasaki ZH2",
    price: 2635000 ,
    image: "/public/Kawasaki ZH2.jpg",
    year: 2021,
    owner:"second",
    morePhotos: [
      "/public/Kawasaki ZH2.jpg",
      "/public/Kawasaki ZH2.jpg"
    ],
    description: "Engine: 998cc, liquid-cooled, 4-stroke, DOHC 16-valve in-line four Power: 194.4 hp @ 11,000 rpm Torque: 101.1 lb-ft of torque @ 8,500 rpm Curb Weight: 527 lbs (239 kg) Seat Height: 32.7 in (830mm)"
  },
  {
    id: 12,
    name: "Kawasaki z900 ",
    price: 738000,
    image: "/public/Kawasaki z900.jpg",
    year: 2021,
    owner:"second",
    morePhotos: [
     "/public/Kawasaki z900.jpg",
     "/public/Kawasaki z900.jpg",
     "/public/Kawasaki z900.jpg"
    ],
    description: "Engine: 948 cc 4-stroke, 4-cylinder, DOHC, 16-valve, liquid-cooled Power: 113 horsepower Torque: 72 lb-ft Weight: 467 lbs (211 kgs) Seat Height: 31.5 inches (800 mm)"
  }
];

// Get all bikes
app.get('/bikes', (req, res) => {
  res.json(bikes);
});

// Get single bike by ID
app.get('/bikes/:id', (req, res) => {
  const { id } = req.params;
  const bike = bikes.find(b => b.id === parseInt(id));

  if (bike) {
    res.json(bike);
  } else {
    res.status(404).json({ error: "Bike not found" });
  }
});

// Schema and model
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// Route to handle subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).send('Email already subscribed');
    }
    const subscription = new Newsletter({ email });
    await subscription.save();
    res.status(201).send('Subscription successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
