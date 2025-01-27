import React from 'react';
import './FormModal.css';



function FormModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://script.google.com/macros/s/AKfycbzGN1hcc4s36rqWytWj9LYrnCNrGqsYBmwYYtiobx8RU95L7peQy5TGUnhi4lAf0NR2/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&State=${e.target.state.value}&City=${e.target.city.value}&Phone=${e.target.phone.value}&Enquiry=${e.target.enquiry.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        // alert(data); // Show success message
        e.target.reset(); // Reset the form here
      })
      .catch((error) => console.log(error)); // Log any errors
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">Fill in your details</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select id="state" name="state" required>
              <option value="">Select your state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="enquiry">Enquiry:</label>
            <input
              type="text"
              id="enquiry"
              name="enquiry"
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormModal;



// import React, { useState } from 'react';
// import './FormModal.css';

// function FormModal({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     state: '',
//     city: '',
//     phone: '',
//     enquiry: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         'https://script.google.com/macros/s/AKfycbwZLMFvyyK9m9ewI0JQK6mft4xXnImHPU9KmwguSEvrGCmt2Q3M1nKLY7iB0af08REG/exec',
//         {
//           method: 'POST',
//           body: JSON.stringify(formData),
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const result = await response.json();
//       console.log('Server response:', result);
  
//       if (result.status === 'success') {
//         alert('Form submitted successfully!');
//         setFormData({
//           name: '',
//           state: '',
//           city: '',
//           phone: '',
//           enquiry: '',
//         });
//       } else {
//         alert('Form submission failed: ' + (result.message || 'Unexpected error'));
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//       alert('An error occurred: ' + error.message);
//     }
//   };
  
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-btn" onClick={onClose}>
//           ✖
//         </button>
//         <h2 className="modal-title">Fill in your details</h2>
//         <form className="form-container" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State:</label>
//             <select
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select your state</option>
//               <option value="Andhra Pradesh">Andhra Pradesh</option>
//               <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//               <option value="Assam">Assam</option>
//               <option value="Bihar">Bihar</option>
//               <option value="Chhattisgarh">Chhattisgarh</option>
//               <option value="Goa">Goa</option>
//               <option value="Gujarat">Gujarat</option>
//               <option value="Haryana">Haryana</option>
//               <option value="Himachal Pradesh">Himachal Pradesh</option>
//               <option value="Jharkhand">Jharkhand</option>
//               <option value="Karnataka">Karnataka</option>
//               <option value="Kerala">Kerala</option>
//               <option value="Madhya Pradesh">Madhya Pradesh</option>
//               <option value="Maharashtra">Maharashtra</option>
//               <option value="Manipur">Manipur</option>
//               <option value="Meghalaya">Meghalaya</option>
//               <option value="Mizoram">Mizoram</option>
//               <option value="Nagaland">Nagaland</option>
//               <option value="Odisha">Odisha</option>
//               <option value="Punjab">Punjab</option>
//               <option value="Rajasthan">Rajasthan</option>
//               <option value="Sikkim">Sikkim</option>
//               <option value="Tamil Nadu">Tamil Nadu</option>
//               <option value="Telangana">Telangana</option>
//               <option value="Tripura">Tripura</option>
//               <option value="Uttar Pradesh">Uttar Pradesh</option>
//               <option value="Uttarakhand">Uttarakhand</option>
//               <option value="West Bengal">West Bengal</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City:</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="Enter your city"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="enquiry">Enquiry:</label>
//             <input
//               type="text"
//               id="enquiry"
//               name="enquiry"
//               value={formData.enquiry}
//               onChange={handleChange}
//               placeholder="Enter your message"
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormModal;
