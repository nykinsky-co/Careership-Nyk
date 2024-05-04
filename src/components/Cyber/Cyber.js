import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cyber.css";
import Cert from "../../assets/cert.jpg";
import Cs from "../../assets/cs.jpg";

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

function Cyber() {
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

    

  };

  return (
    <div className="cyberContainer">
      <div className="cyber1">
        <div className="cyber11">
          <div className="hero-text">
            <h3>Cyber Security</h3>
            <p>
              - Learn cybersecurity techniques to protect your company from
              security threats and attacks.
            </p>
            <p>- Hands-on experience with real-world cybersecurity projects.</p>
            <p>
              - Get 1-on-1 mentorship + coaching to fast-track your career in
              cybersecurity.
            </p>
            <p>- Graduate from our cybersecurity course in 6 months, part-time.</p>
          </div>{" "}
          <h2>Apply Now</h2>
          <img src={Cs} alt="" />
        </div>
      </div>
      <div className="cyber2">
        <div className="cyber2-content">
          <p style={{ margin: "0" }}>PROGRAM DOMAIN</p>

          <h4>Cyber Security</h4>
        </div>
        <div className="cyber2-content">
          <p style={{ margin: "0" }}>DURATION</p>
          <h4>6 Months Minimum</h4>
          <p>Depends on project</p>
        </div>
        <div className="cyber2-content">
          <p>PROGRAM FEE</p>
          <h4>Rs 59,999</h4>
          <p>GST will be charged at checkout</p>
        </div>
        <div className="cyber2-content">
          <p>ELIGIBILITY</p>
          <h4>Basic Computer Knowledge </h4>
          <p>
            <strong>Any Graduate/ Diploma holders </strong>
          </p>
        </div>
      </div>
      <div className="cyber3">
        <div className="cyber3-left">
          <h1>Who is this program for?</h1>
          <p style={{ marginT: "10px" }}>
            - IT professionals interested in transitioning to a career in
            cybersecurity, equipping themselves with the necessary skills to
            tackle modern security threats and protect company assets.
          </p>
          <p>
            - Graduates looking to kickstart a career in cybersecurity,
            leveraging their technical background to enter one of the
            fastest-growing and most in-demand sectors in the IT industry.
          </p>
          <p>
            - Career changers seeking to move into a more secure and rewarding
            field, with cybersecurity offering ample opportunities for
            advancement and continuous learning.
          </p>
          <p>
            - Individuals passionate about ethical hacking and cybersecurity,
            looking to turn their hobby into a lucrative and fulfilling career
            securing digital assets and protecting against cyber threats.
          </p>
        </div>

        <div className="cyber3-right">
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
      <div className="cyber4">
        <h1>
          <strong>Program Overview</strong>
        </h1>
        <p>
          As our world becomes more interconnected through technology, the need
          for cybersecurity professionals has never been greater. This program
          provides hands-on training in cybersecurity to prepare you for a
          rewarding career securing digital assets and protecting against
          cyber threats.
        </p>
        <div className="cyber4-card">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <p class="card-text">
                The demand for cybersecurity professionals is expected to grow
                by 31% through 2029, much faster than the average for all
                occupations.
              </p>
              <h1 class="card-title">31%</h1>

              <p>Source: Bureau of Labor Statistics</p>
            </div>
          </div>
          <div className="cyber4-card">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <p class="card-text">
                  The average salary for cybersecurity professionals is in lakhs
                  per year, with opportunities for advancement and career
                  growth. Increments are of-
                </p>
                <h1 class="card-title">25%</h1>

                <p>Source: Bureau of Labor Statistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cyber;
