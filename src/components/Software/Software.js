

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Software.css";
import Cert from "../../assets/cert.jpg";
import Se from "../../assets/se.png";

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

function Software() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    qualification: "",
    workExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [result, setResult] = useState("");
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
  };

  return (
    <div className="softwarecontainer">
      <div className="software1">
        <div className="software11">
          <div className="hero-text">
            <h3>Software Engineering</h3>
            <p>
              -Build AI skills and master machine learning techniques
              through our 100% online project-based curriculum
            </p>
            <p>-Get hand on experience by working on our project</p>
            <p>
              -Get 1-on-1 mentorship + coaching to fast-track your career as a
              data scientist
            </p>
            <p>-Graduate from our AI & ML course in 6 months, part-time</p>
          </div>{" "}
          <h2>Apply Now</h2>
          <img src={Se} alt="" />
        </div>
      </div>
      <div className="se2">
        <div className="se2-content">
          <p style={{ margin: "0" }}>PROGRAME DOMAIN</p>

          <h4>Software Engineering</h4>
        </div>
        <div className="se2-content">
          <p style={{ margin: "0" }}>DURATION</p>
          <h4>7 Months Minimum</h4>
          <p>Depends on project</p>
        </div>
        <div className="se2-content">
          <p>PROGRAMME FEE</p>
          <h4>Rs 49,999</h4>
          <p>GST will be charged at checkout</p>
        </div>
        <div className="se2-content">
          <p>ELIGIBILITY</p>
          <h4>Maths Necessary </h4>
          <p>
            <strong>Any Graduate/ Diploma holders </strong>
          </p>
        </div>
      </div>
      <div className="se3">
        <div className="se3-left">
          <h1>Who is this programme for?</h1>
          <p style={{ marginT: "10px" }}>
            - Early Professionals: Perfect for those new to the field, this program helps you become a skilled software developer.
          </p>
          <p>
            - Mid-Career Professionals: Stay ahead with the latest software engineering methodologies and technologies, whether you're a developer, engineer, or project manager.
          </p>
          <p>
            - Consultants: Elevate your services by offering tailored software solutions for clients, optimizing their operational efficiency and strategic outcomes.
          </p>
          <p>
            - Entrepreneurs and Small Business Owners: Refine your products and services through strategic software engineering, fostering sustained growth and a competitive edge in the market.
          </p>
        </div>

        <div className="se3-right">
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
      <div className="se4">
        <h1>
          <strong>Programme Overview</strong>
        </h1>
        <p>
        Software engineering is the backbone of modern enterprises, driving breakthrough innovations, informed decisions, and exponential growth.
        </p>
        <div className="se4-card">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <p class="card-text">
              By 2025, India is expected to open up around 13,630 new software engineering positions, marking a 45% increase from 2020.Source: Indian Times!
              </p>
              <h1 class="card-title">45%</h1>

              <p>Source:Indian Times</p>
            </div>
          </div>
          <div className="se4-card">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <p class="card-text">
                The Indian software engineering market is projected to increase 60%  by 2028, indicating rapid expansion and increasing demand.
                </p>
                <h1 class="card-title">60%</h1>

                <p>Source:Analytics Insight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Software;
