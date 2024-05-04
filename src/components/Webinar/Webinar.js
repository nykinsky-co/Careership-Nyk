import React, { useState } from "react";
import "./Webinar.css";
import WebinarImage from "../../assets/webinar2.webp";
import Webinar5 from "../../assets/webinar5.jpg";
import WebinarImage4 from "../../assets/webinar4.jpg";
import WebinarImage5 from "../../assets/webinar5.png";
const Webinar = () => {
  const countries = ["India", "USA", "UK", "Australia", "Canada"];

  const Domains = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Data Analytics",
    "Data Engineering",
    "Software Engineering",
    "Cyber Security",
    "Think & Design",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    mobileNo: "",
    email: "",
    country: "India",
    domain: "",
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
    <div>
      <div className="webinarcontainer">
        <div className="webinar1-left">
          <img src={WebinarImage} alt="" />
        </div>
        <div className="webinar1-right">
          <h1>
            <strong>Webinar</strong>
          </h1>
          <br />
          <p>
            At Careership, we're excited to present a series of webinars
            designed to explore and illuminate the diverse landscape of
            technology careers. Whether you're considering a career in AI & DS,
            data analytics, software engineering, cyber security, or design, our
            webinars offer valuable insights and guidance from industry experts.
          </p>
        </div>
      </div>

      <div className="webinar2">
        <h1>
          <strong>What to Expect?</strong>
        </h1>
        <p>
          Welcome to our webinar on AI & Data Science, Software Engineering,
          Cyber Security, and Design! Here's what you can expect from this
          insightful session.
          <br />
          Each webinar session dives deep into a specific domain, covering
          essential topics, trends, and career paths. Whether you're a seasoned
          professional or just starting your journey, there's something for
          everyone.
        </p>

        <h1>
          <strong>What You'll Gain</strong>
        </h1>
        <p>
          Insightful presentations from industry experts
          <br />
          <br />
          Practical knowledge and skills applicable to your career
          <br />
          <br />
          Networking opportunities with professionals in the AI & Data Science
          community
          <br />
          <br />
          Access to resources and tools shared during the webinar
          <br />
          <br />
          Inspiration to innovate and succeed in the rapidly evolving tech
          landscape
        </p>
      </div>

      <div className="webinar3">
        <div className="webinar3-left">
          <img src={Webinar5} alt="" />
        </div>
        <div className="se3-right">
          <h1>
            <strong>Register here</strong>
          </h1>
          <form className="applyform" onSubmit={handleSubmit}>
            <div>
              <label>Full Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mobile No.:</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
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
              <label>Webinar Domain:</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
              >
                <option value="">Select Domain</option>
                {Domains.map((domain, index) => (
                  <option key={index} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>
            <button className="applybutton" type="submit">
              Register Now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      <div className="webinar4">
        <h1>
          <strong>Book your slot now</strong>
        </h1>
        <p>
          Join us as we unravel these domains and gain valuable insights from
          industry experts. Whether you're looking to embark on a new career
          path or enhance your existing skills, our webinars offer a unique
          opportunity to learn and grow in the rapidly evolving world of
          technology.
        </p>
        <p>
          Feel free to adapt this content to suit your webinar's tone and
          audience. You can also include specific details about session topics,
          guest speakers, and registration information to engage potential
          attendees. This approach provides a comprehensive overview of each
          domain, highlighting their significance in today's tech-driven
          society.
        </p>
      </div>

      <div className="webinar5">
      {/* <img src={WebinarImage5} alt="" /> */}
      </div>
    </div>
  );
};

export default Webinar;
