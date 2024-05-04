import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Think.css";
import Td from "../../assets/td.jpg";


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

function Think() {
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
      console.error("Failed to apply.");
    }
  };

  return (
    <div className="thinkContainer">
      <div className="think1">
        <div className="think11">
          <div className="hero-text">
            <h3>Think & Design</h3>
            <p>
              -Get creative and innovative thinking methodologies for product
              design.
            </p>
            <p>-Hands-on experience by working on our projects</p>
            <p>
              -Get 1-on-1 mentorship + coaching to fast-track your career as a
              Designer.
            </p>
            <p>-Get an experience letter by working with us.</p>
          </div>{" "}
          <h2>Apply Now</h2>
          <img src={Td} alt="" />
        </div>
      </div>
      <div className="think2">
        <div className="think2-content">
          <p style={{ margin: "0" }}>PROGRAM DOMAIN</p>

          <h4>Design Thinking</h4>
        </div>
        <div className="think2-content">
          <p style={{ margin: "0" }}>DURATION</p>
          <h4>6 Months Minimum</h4>
          <p>Depends on the project</p>
        </div>
        <div className="think2-content">
          <p>PROGRAMME FEE</p>
          <h4>Rs 49,999</h4>
          <p>GST will be charged at checkout</p>
        </div>
        <div className="think2-content">
          <p>ELIGIBILITY</p>
          <h4>No Requirements </h4>
          <p>
            <strong>Anyone Can Apply </strong>
          </p>
        </div>
      </div>
      <div className="think3">
        <div className="think3-left">
          <h1>Who is this programme for?</h1>
          <p style={{ marginT: "10px" }}>
            - Early Professionals: Learn the skills required to become a
            successful designer from scratch.
          </p>
          <p>
            - Mid-Career Professionals: Upgrade your skills to meet the current
            industry standards and get ahead in your career.
          </p>
          <p>
            - Entrepreneurs and Small Business Owners: Learn to design
            user-friendly products and services to enhance customer
            satisfaction and grow your business.
          </p>
        </div>

        <div className="think3-right">
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
      <div className="think4">
        <h1>
          <strong>Programme Overview</strong>
        </h1>
        <p>
          Design thinking is a human-centered approach to innovation that
          integrates the needs of people, the possibilities of technology, and
          the requirements for business success.
        </p>
        <div className="think4-card">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <p class="card-text">
                By 2025, the global design thinking market is expected to reach
                $69.68 billion, with a CAGR of 24.5%.
              </p>
              <h1 class="card-title">24.5%</h1>

              <p>Source: BusinessWire</p>
            </div>
          </div>
          <div className="think4-card">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <p class="card-text">
                  Design thinking improves customer experiences and increases
                  the speed and effectiveness of innovation.
                </p>
                <h1 class="card-title">Rs 5273</h1>

                <p>Source: Forbes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Think;
