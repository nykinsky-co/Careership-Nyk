import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./De.css";
import Cert from "../../assets/cert.jpg";
import Ds from "../../assets/de.jpg";

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

function De() {
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
    <div className="deContainer">
      <div className="de1">
        <div className="de11">
          <div className="hero-text">
            <h3>Data Engineering</h3>
            <p>
              -Master the tools and techniques needed to build robust data
              pipelines and efficient data workflows
            </p>
            <p>-Get hands-on experience by working on real-world projects</p>
            <p>
              -Receive personalized feedback and mentorship from industry
              experts
            </p>
            <p>-Receive a certificate of completion</p>
          </div>{" "}
          <h2>Apply Now</h2>
          <img src={Ds} alt="" />
        </div>
      </div>
      <div className="de2">
        <div className="de2-content">
          <p style={{ margin: "0" }}>PROGRAM DOMAIN</p>

          <h4>Data Engineering</h4>
        </div>
        <div className="de2-content">
          <p style={{ margin: "0" }}>DURATION</p>
          <h4>6 Months Minimum</h4>
          <p>Depends on the project</p>
        </div>
        <div className="de2-content">
          <p>PROGRAMME FEE</p>
          <h4>Rs 49,999</h4>
          <p>GST will be charged at checkout</p>
        </div>
        <div className="de2-content">
          <p>ELIGIBILITY</p>
          <h4>Maths Necessary </h4>
          <p>
            <strong>Any Graduate/ Diploma holders </strong>
          </p>
        </div>
      </div>
      <div className="de3">
        <div className="de3-left">
          <h1>Who is this programme for?</h1>
          <p style={{ marginT: "10px" }}>
            - Aspiring Data Engineers: Dive deep into the world of data engineering to build a strong foundation for your career in data.
          </p>
          <p>
            - Experienced Data Professionals: Enhance your expertise in data engineering with modern tools and techniques to drive innovation and efficiency in your organization.
          </p>
          <p>
            - Data Scientists transitioning into Data Engineering: Learn the essential skills required to manage and manipulate large datasets, enabling you to take your data science projects to the next level.
          </p>
          <p>
            - IT Professionals: Expand your skill set into the field of data engineering to stay competitive in the rapidly evolving tech industry.
          </p>
        </div>

        <div className="de3-right">
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
                {WorkExperiences.map((experience, index) => (
                  <option key={index} value={experience}>
                    {experience}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="applybutton">
              APPLY NOW
            </button>
          </form>
          <p>{result}</p>
        </div>
      </div>
      <div className="de4">
        <h1>
          <strong>Programme Overview</strong>
        </h1>
       
        <div className="de4-card">
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
                  The Indian data science market is projected to increase 80%
                  by 2028, indicating rapid growth.
                </p>
                <h1 class="card-title">80%</h1>

                <p>Source: Data Science Insight</p>
              </div>
            </div>
          </div>
        </div>
      </div>






      
    </div>
  );
}

export default De;
