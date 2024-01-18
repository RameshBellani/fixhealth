// Dummy API function to fetch doctors
export const fetchDoctors = async (city) => {
  // Simulating an asynchronous API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Replace this with actual API logic
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
      
      

      // Filter doctors based on the provided city
      const filteredDoctors = doctorsData.filter((doctor) => doctor.city.toLowerCase().trim() === city.toLowerCase().trim());


      resolve(filteredDoctors);
    }, 1000); 
  });
};
