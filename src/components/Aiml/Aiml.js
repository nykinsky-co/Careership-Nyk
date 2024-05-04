import React, { useState } from "react";
import "./Aiml.css";
import Cert from "../../assets/cert.jpg";
import ML from "../../assets/ai.jpg";

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

function Aiml() {
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
      console.error("Failed to Apply");
    }
  };

  return (
    <div className="aimlContainer">
      <div className="aiml1">
        <div className="aiml11">
          <div className="hero-text">
            <h3>Artificial Intelligence & Machine Learning</h3>
            <p>
              -Gain expertise in AI and ML to develop intelligent systems and
              applications
            </p>
            <p>
              -Learn to build and deploy machine learning models for real-world
              applications
            </p>
            <p>
              -Get hands-on experience by working on AI and ML projects
            </p>
            <p>
              -Get 1-on-1 mentorship + coaching to fast-track your career in AI
              and ML
            </p>
          </div>{" "}
          <h2>Apply Now</h2>
          <img src={ML} alt="" />
        </div>
      </div>
      <div className="aiml2">
        <div className="aiml2-content">
          <p style={{ margin: "0" }}>PROGRAM DOMAIN</p>

          <h4>AI & ML</h4>
        </div>
        <div className="aiml2-content">
          <p style={{ margin: "0" }}>DURATION</p>
          <h4>6 Months Minimum</h4>
          <p>Depends on the project</p>
        </div>
        <div className="aiml2-content">
          <p>PROGRAMME FEE</p>
          <h4>Rs 49,999</h4>
          <p>GST will be charged at checkout</p>
        </div>
        <div className="aiml2-content">
          <p>ELIGIBILITY</p>
          <h4>Basic Programming </h4>
          <p>
            <strong>Any Graduate/ Diploma holders </strong>
          </p>
        </div>
      </div>
      <div className="aiml3">
        <div className="aiml3-left">
          <h1>Who is this programme for?</h1>
          <p style={{ marginT: "10px" }}>
            - Early Professionals: Gain expertise in AI and ML to start your
            career in cutting-edge technologies
          </p>
          <p>
            - Mid-Career Professionals: Enhance your skills in AI and ML to
            stay ahead in the rapidly evolving tech industry
          </p>
          <p>
            - Data Scientists and Analysts: Deepen your understanding of AI and
            ML to build more sophisticated models and solutions
          </p>
          <p>
            - Developers and Programmers: Learn AI and ML to integrate
            intelligent features into your applications and systems
          </p>
        </div>

        <div className="aiml3-right">
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
      <div className="aiml4">
        <h1>
          <strong>Programme Overview</strong>
        </h1>
        <p>
          Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries
          and driving innovation. With our comprehensive programme, you will gain
          the skills and knowledge needed to excel in this exciting field.
        </p>
        <div className="aiml4-card">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <p class="card-text">
                By 2025, AI and ML will create 58 million new jobs worldwide.
              </p>
              <h1 class="card-title">58M</h1>

              <p>Source: World Economic Forum</p>
            </div>
          </div>
          <div className="aiml4-card">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <p class="card-text">
                  The global AI market is projected to reach  billions by
                  2027.
                </p>
                <h1 class="card-title">35%</h1>

                <p>Source: Fortune Business Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aiml;
