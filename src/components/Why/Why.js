import React from "react";
import "./Why.css";
import Three from "../../assets/three.jpg";
import Arrow from "../../assets/arrow.webp";

import Office from "../../assets/office.jpeg";

const Why = () => {
  return (
    <>
      <div className="whycontainer">
        <div className="why11">
          <p style={{ color:"white" ,textAlign:"center"}}>WELLCOME TO NYKINSKY CAREERSHIP</p>
          <h1  style={{ marginTop: "50px",marginBottom:"50px" }}> <strong>How It Works</strong></h1>
          <h3>
            Combine technical skill-building, human support, and project-based
            learning to set your career in motion.
          </h3>
        </div>
        {/* <img src={Work} alt="" /> */}
      </div>

      <div className="why2 ">
        <div className="why2-left">
          <p>WHAT WE DO</p>
          <h1 style={{ marginTop: "50px",marginBottom:"50px" }}>
            <strong>Take the guesswork out of getting ahead</strong>
          </h1>
          <p><strong>
            Most online courses are designed for the classroom, not the
            workforce. NyKinSky Careership is different.</strong>
          </p>
        </div>
        <div className="why2-right">
          <div>
            <div className="why21">
              <img src={Arrow} alt="" />
              <div className="why2-right1">
                <h5>
                  <strong>Project-based to turn learning into action</strong>
                </h5>
                <p>
                Build skills and put them to work through real-world projects. You’ll be ahead of the game before you’re in the field.


                </p>
              </div>
            </div>
            <hr/>
            <div className="why21">
              <img src={Arrow} alt="" />
              <div className="why2-right1">
                <h5>
                  <strong>Human support from day one</strong>
                </h5>
                <p>
                Get expert one-on-one support from a mentor, career coach, and student advisor. They’ll help you define your path, knock down obstacles, and meet your goals.


                </p>
              </div>
            </div>

            <hr/>
            <div className="why21">
              <img src={Arrow} alt="" />
              <div className="why2-right1">
                <h5>
                  <strong>Backed by our job guarantee</strong>
                </h5>
                <p>
                Have the confidence to invest in yourself. The Careership Job Guarantee means if don’t land a job, we’ll give you a full refund (terms apply). 
                </p>
              </div>
            </div>
            <hr/>
            <div className="why21">
              <img src={Arrow}  alt="" />
              <div className="why2-right1">
                <h5>
                  <strong>Online, flexible, and fast</strong>
                </h5>
                <p>
                  Most online courses are designed for the classroom, not the
                  workforce. Careership is different.
                </p>
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </div>

 <div className="why3">
  <div>
    <h1>
      <strong>
      Our curriculum is different
      </strong>
    </h1>
    <p>
    Our courses are 100% online and always accessible.
    </p>
    <p>
    Full-time workers, undergrads, stay-at-home parents, and veterans are all taking NyKinSky Careership classes right now.
    </p>
    <p>
    
Our subject matter experts continually update each course to make sure you’re getting your chosen field’s latest tools, frameworks, and best practices.
    </p>
  </div>
 </div>
      <div class="why3container ">
        <img src={Office} alt="" />
        <div class="why3-text">
          <h1>What we Offer</h1>
          <p>
            At Nykinsky & Company, we offer customized project solutions
            tailored to meet your specific needs and requirements. Whether
            you're looking to develop a website, application, or software
            solution, we provide personalized services to ensure your project's
            success.NyKinSky CareerShip Institute is world's first Practice
            based organization to perform, Plan, Practice and Produce product
            for Clients and Business need. Our Concept & Mantra for Career :
            Think | Design | Plan | Practice | Product | Product.
          </p>
        </div>
      </div>
    </>
  );
};

export default Why;
