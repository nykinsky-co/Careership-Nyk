// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Dsai.css";
// import Cert from "../../assets/cert.jpg";
// import Ds from "../../assets/ds.jpg";

// const countries = ["India", "USA", "UK", "Australia", "Canada"];

// const Qualifications = [
//   "High School",
//   "Bachelor's Degree",
//   "Master's Degree",
//   "PhD",
// ];

// const WorkExperiences = [
//   "Fresher",
//   "1-2 years",
//   "3-5 years",
//   "5-10 years",
//   "10+ years",
// ];

// function Dsai() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "India",
//     qualification: "",
//     workExperience: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Handle form submission here
//   };

//   return (
//     <div className="dsaiContainer">
//       <div className="dsai1">
//         <div className="dsai11">
//           <div className="hero-text">
//             <h3>Data Science</h3>
//             <p>
//               -Build data science skills and master machine learning techniques
//               through our 100% online project-based curriculum
//             </p>
//             <p>-Get hand on experience by working on our project</p>
//             <p>
//               -Get 1-on-1 mentorship + coaching to fast-track your career as a
//               data scientist
//             </p>
//             <p>-Get an experience letter by working with us.</p>
//           </div>{" "}
//           <h2>Apply Now</h2>
//           <img src={Ds} alt="" />
//         </div>
//       </div>
//       <div className="dsai2">
//         <div className="dsai2-content">
//           <p style={{ margin: "0" }}>PROGRAM DOMAIN</p>

//           <h4>Data Science & AI</h4>
//         </div>
//         <div className="dsai2-content">
//           <p style={{ margin: "0" }}>DURATION</p>
//           <h4>6 Months Minimum</h4>
//           <p>Depends on project</p>
//         </div>
//         <div className="dsai2-content">
//           <p>PROGRAMME FEE</p>
//           <h4>Rs 49,999</h4>
//           <p>GST will be charged at checkout</p>
//         </div>
//         <div className="dsai2-content">
//           <p>ELIGIBILITY</p>
//           <h4>Maths Necessary </h4>
//           <p>
//             <strong>Any Graduate/ Diploma holders </strong>
//           </p>
//         </div>
//       </div>
//       <div className="dsai3">
//         <div className="dsai3-left">
//           <h1>Who is this programme for?</h1>
//           <p style={{ marginT: "10px" }}>
//           - Early Professionals: Gain a deep understanding of data analytics to make better business decisions and boost your career.

//           </p>
//           <p>
//             - Mid-Career Professionals: Strengthen your expertise with modern analytical methods to drive impactful business strategies.

//           </p>
//           <p>
//             - Consultants: Elevate your consultancy services by using advanced analytics to provide tailored solutions for clients.

//           </p>
//           <p>
//             - Entrepreneurs and Small Business Owners: Use consumer insights and analytics to refine your products, services, and strategies for sustained growth and a competitive edge.
//           </p>
//         </div>

//         <div className="dsai3-right">
//           <form className="applyform " onSubmit={handleSubmit}>
//             <div>
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Country:</label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//               >
//                 {countries.map((country, index) => (
//                   <option key={index} value={country}>
//                     {country}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label>Qualification:</label>
//               <select
//                 name="qualification"
//                 value={formData.qualification}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Qualification</option>
//                 {Qualifications.map((qualification, index) => (
//                   <option key={index} value={qualification}>
//                     {qualification}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label>Work Experience:</label>
//               <select
//                 name="workExperience"
//                 value={formData.workExperience}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Work Experience</option>
//                 {WorkExperiences.map((exp, index) => (
//                   <option key={index} value={exp}>
//                     {exp}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button className="applybutton" type="submit">
//               Apply Now
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="dsai4">
//         <h1>
//           <strong>Programme Overview</strong>
//         </h1>
//         <p>
//         Data science is the backbone of modern enterprises, fueling breakthrough insights, informed decisions, and exponential growth.
//         </p>
//         <div className="dsai4-card">
//           <div class="card" style={{ width: "18rem" }}>
//             <div class="card-body">
//               <p class="card-text">
//               By 2025, India is expected to have 13,630 new data science jobs, marking a 45% increase from 2020.
//               </p>
//               <h1 class="card-title">45%</h1>

//               <p>Source: Indian Times</p>
//             </div>
//           </div>
//           <div className="dsai4-card">
//             <div class="card" style={{ width: "18rem" }}>
//               <div class="card-body">
//                 <p class="card-text">
//                 The Indian data science market is projected to reach US$182 billion by 2028, indicating rapid growth. 
//                 </p>
//                 <h1 class="card-title">$182</h1>

//                 <p>Source: Data Science Insight</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dsai;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dsai.css";
import Cert from "../../assets/cert.jpg";
import Ds from "../../assets/ds.jpg";

const countries = ["India", "USA", "UK", "Australia", "Canada"];

const Qualifications = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
];

const WorkExperiences = [
  "Fresher",
  "1-2 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

function Dsai() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    qualification: "",
    workExperience: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", "b44d7f06-33e2-492d-ac28-920e4b66f6b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (response.success) {
      console.log("Success", response);
      setResult(response.message);
      e.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }

    // Additional code to send email to your email address
    const emailData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      country: formData.get("country"),
      qualification: formData.get("qualification"),
      workExperience: formData.get("workExperience"),
    };

    const emailResponse = await fetch("b44d7f06-33e2-492d-ac28-920e4b66f6b0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (emailResponse.ok) {
      console.log("Applied successfully!");
    } else {
      console.error("Failed to apply");
    }
  };

  return (
    <div className="dsaiContainer">
      <div className="dsai1">
        <div className="dsai11">
          <div className="hero-text">
            <h3>Data Science</h3>
            <p>
              -Build data science skills and master machine learning techniques
              through our 100% online project-based curriculum
            </p>
            <p>-Get hands-on experience by working on our projects</p>
            <p>
              -Get 1-on-1 mentorship + coaching to fast-track your career as a
              data scientist
            </p>
            <p>-Get an experience letter by working with us.</p>
          </div>{" "}
          <h2>Apply Now</h2>
          <img src={Ds} alt="" />
        </div>
      </div>
      <div className="dsai2">
        <div className="dsai2-content">
          <p style={{ margin: "0" }}>PROGRAM DOMAIN</p>

          <h4>Data Science & AI</h4>
        </div>
        <div className="dsai2-content">
          <p style={{ margin: "0" }}>DURATION</p>
          <h4>6 Months Minimum</h4>
          <p>Depends on the project</p>
        </div>
        <div className="dsai2-content">
          <p>PROGRAMME FEE</p>
          <h4>Rs 49,999</h4>
          <p>GST will be charged at checkout</p>
        </div>
        <div className="dsai2-content">
          <p>ELIGIBILITY</p>
          <h4>Maths Necessary </h4>
          <p>
            <strong>Any Graduate/ Diploma holders </strong>
          </p>
        </div>
      </div>
      <div className="dsai3">
        <div className="dsai3-left">
          <h1>Who is this programme for?</h1>
          <p style={{ marginT: "10px" }}>
            - Early Professionals: Gain a deep understanding of data analytics
            to make better business decisions and boost your career.
          </p>
          <p>
            - Mid-Career Professionals: Strengthen your expertise with modern
            analytical methods to drive impactful business strategies.
          </p>
          <p>
            - Consultants: Elevate your consultancy services by using advanced
            analytics to provide tailored solutions for clients.
          </p>
          <p>
            - Entrepreneurs and Small Business Owners: Use consumer insights
            and analytics to refine your products, services, and strategies for
            sustained growth and a competitive edge.
          </p>
        </div>

        <div className="dsai3-right">
          <form className="applyform " onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Country:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Qualification:</label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              >
                <option value="">Select Qualification</option>
                {Qualifications.map((qualification, index) => (
                  <option key={index} value={qualification}>
                    {qualification}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Work Experience:</label>
              <select
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                required
              >
                <option value="">Select Work Experience</option>
                {WorkExperiences.map((exp, index) => (
                  <option key={index} value={exp}>
                    {exp}
                  </option>
                ))}
              </select>
            </div>
            <button className="applybutton" type="submit">
              Apply Now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="dsai4">
        <h1>
          <strong>Programme Overview</strong>
        </h1>
        <p>
          Data science is the backbone of modern enterprises, fueling
          breakthrough insights, informed decisions, and exponential growth.
        </p>
        <div className="dsai4-card">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <p class="card-text">
                By 2025, India is expected to have 13,630 new data science
                jobs, marking a 45% increase from 2020.
              </p>
              <h1 class="card-title">45%</h1>

              <p>Source: Indian Times</p>
            </div>
          </div>
          <div className="dsai4-card">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <p class="card-text">
                  The Indian data science market is projected to increase
                   by 2028, indicating rapid growth.
                </p>
                <h1 class="card-title">70%</h1>

                <p>Source: Data Science Insight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dsai;
