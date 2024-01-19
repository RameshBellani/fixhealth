const http = require('http');
const url = require('url');

// Sample JSON data for doctors
const doctorsData = [
    { name: 'Dr. John Doe', expertise: 'Physiotherapy', city: 'Chennai' },
    { name: 'Dr. Jane Smith', expertise: 'Orthopedics', city: 'Hyderabad' },
    { name: 'Dr. Michael Johnson', expertise: 'Neurology', city: 'Mumbai' },
    { name: 'Dr. Sarah Williams', expertise: 'Cardiology', city: 'Delhi' },
    { name: 'Dr. Alex Lee', expertise: 'Dermatology', city: 'Bangalore' },
    { name: 'Dr. Emily Davis', expertise: 'Pediatrics', city: 'Kolkata' },
    { name: 'Dr. James Brown', expertise: 'Gynecology', city: 'Pune' },
    { name: 'Dr. Olivia Wilson', expertise: 'Oncology', city: 'Jaipur' },
    { name: 'Dr. Ethan Miller', expertise: 'Psychiatry', city: 'Ahmedabad' },
    { name: 'Dr. Ava Robinson', expertise: 'Endocrinology', city: 'Lucknow' },
    { name: 'Dr. Noah Garcia', expertise: 'Rheumatology', city: 'Surat' },
    { name: 'Dr. Mia Patel', expertise: 'Urology', city: 'Kanpur' },
    { name: 'Dr. Elijah Thomas', expertise: 'Gastroenterology', city: 'Nagpur' },
    { name: 'Dr. Zoe Singh', expertise: 'Ophthalmology', city: 'Indore' },
    { name: 'Dr. William Sharma', expertise: 'Allergy & Immunology', city: 'Visakhapatnam' },
    { name: 'Dr. Sophia Khan', expertise: 'Dentistry', city: 'Chennai' },
    { name: 'Dr. Aiden Gupta', expertise: 'Otolaryngology', city: 'Hyderabad' },
    { name: 'Dr. Lily Patel', expertise: 'Dermatology', city: 'Mumbai' },
    { name: 'Dr. Noah Kumar', expertise: 'Cardiology', city: 'Delhi' },
    { name: 'Dr. Sofia Reddy', expertise: 'Neurology', city: 'Bangalore' },
    // Add more names as needed
  ];

const server = http.createServer((req, res) => {
  // Set CORS headers to allow requests from any origin (for local development)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Parse the URL to get query parameters
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const cityQueryParam = query.city;

  // Serve the doctors data as JSON based on the city query parameter
  if (req.url.startsWith('/doctors') && req.method === 'GET') {
    let filteredDoctorsData = doctorsData;

    if (cityQueryParam) {
      // Filter by city if the city query parameter is present
      filteredDoctorsData = doctorsData.filter(doctor => doctor.city.toLowerCase() === cityQueryParam.toLowerCase());
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(filteredDoctorsData));
  } else {
    // Handle other routes or methods if needed
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
