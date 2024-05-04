import React from "react";
import "./Home.css";
import Heros from "../../assets/Heros.svg";
import Ds from "../../assets/ds.jpg";
import Da from "../../assets/da.jpg";
import Td from "../../assets/td.jpg";
import Se from "../../assets/se.png";
import Cs from "../../assets/cs.jpg";
import Amazon from "../../assets/amazonlogo.png";
import De from "../../assets/de.jpg";
import Ai from "../../assets/ai.jpg";
import Home41 from "../../assets/home4-1.jpg";
import Home42 from "../../assets/home42.jpg";
import Home43 from "../../assets/home43.png";
import Hand from "../../assets/hand.jpg";
import Emp from "../../assets/emp.jpg";
import Home23 from "../../assets/home23.avif";
import Home24 from "../../assets/home24.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="herocontainer ">
        <div className="hero">
          <h1>Give Wings To Your Imagination</h1>
          <p>
            "Learn by doing, and build your skills for the future job
            market.Join our platform to gain real-world experience through live
            projects! Collaborate with industry professionals and companies on
            cutting-edge initiatives, enhancing your skills while making a
            tangible impact. Elevate your portfolio and career prospects by
            working on projects that matter."
          </p>
        </div>
        <img src={Heros} alt="" />
      </div>

      <div className="home2">
        <div className="home2-left">
          <p>How We Help You?</p>
          <h1>
            Careership Circle: the personalized team behind your success story
          </h1>
          <p>
            Learning on your own isn't always enough. That's why we offer
            personalized mentorship and a supportive community to guide you
            through your learning journey.
          </p>
          <p>
            From curriculum to time management and career guidance, our
            community is here to support you from the moment you enroll.
          </p>
        </div>
        <div className="home2-right">
          <div>
            <div className="home21">
              <img src={Emp} alt="" />
              <div className="home21right">
                <h3>
                  <strong>Your industry mentor</strong>
                </h3>
                <p>
                  This expert works in your field, providing real-world advice
                  to enhance your skills through scheduled video calls where you
                  set the agenda.
                </p>
              </div>
            </div>
            <hr />
            <div className="home21">
              <img src={Hand} alt="" />
              <div className="home21right">
                <h3>
                  <strong>Your career coach</strong>
                </h3>
                <p>
                  This career expert assists you with planning, job searching,
                  interviewing, and successful negotiation.
                </p>
              </div>
            </div>
            <hr />
            <div className="home21">
              <img src={Home23} alt="" />
              <div className="home21right">
                <h3>
                  <strong>Your student advisor</strong>
                </h3>
                <p>
                  These advocates serve as your guides to achieving your goals.
                  They help you develop healthy study habits, stay on track, and
                  overcome obstacles.
                </p>
              </div>
            </div>
            <hr />
            <div className="home21">
              <img src={Home24} alt="" />
              <div className="home21right">
                <h3>
                  <strong>Your online community</strong>
                </h3>
                <p>
                  Meet other students, ask questions, share advice, and get
                  feedback on your projects, all via Slack, accessible 24/7.
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="ex">
        <h1>Explore our Projects</h1>
        <div className="explore">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Ds} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">Data Science</h5>
              <p className="card-text">
                Discover our Data Science and Machine Learning projects. Engage
                in hands-on experiences, solving real-world problems and
                mastering cutting-edge techniques. From predictive modeling to
                neural networks, explore diverse projects and elevate your
                skills in this dynamic fields.
              </p>
              <Link to="/dsai" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Se} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">Software Engineering</h5>
              <p className="card-text">
                Explore our Software Engineering projects. Dive into practical
                experiences, solving real-world challenges and mastering modern
                technologies. From web development to software architecture,
                discover diverse projects and elevate your skills in this
                dynamic field.
              </p>
              <Link to="/Software" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Cs} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">
                Explore our Cyber Security projects. Immerse yourself in
                hands-on experiences, tackling real-world threats and mastering
                the latest defenses. From penetration testing to cryptography,
                discover diverse projects and enhance your expertise in the
                vital field of Cyber Security.
              </p>
              <Link to="/cyber" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Td} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">Think & Design</h5>
              <p className="card-text">
                "Discover our UI/UX Design projects. Engage in creative
                experiences, solving user-centric challenges and refining your
                design skills. From wireframing to user testing, explore diverse
                projects and elevate your expertise in the dynamic field of
                thinking and designing UI/UX Design."
              </p>
              <Link to="/think" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
          <div></div>
          <br />
        </div>
        <div className="explore">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Da} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">Data Analytics</h5>
              <p className="card-text">
                This is a beginner-friendly platform enabling users to learn
                data analysis through interactive tutorials and real-world
                datasets. Dive into data exploration, analysis, and
                visualization using Python and R. Join a community of data
                enthusiasts, share insights, and embark on your journey towards
                becoming a data-driven decision-maker.
              </p>
              <Link to="/da" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={De} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">Data Engineering</h5>
              <p className="card-text">
                DE project focuses on building efficient data pipelines for
                collecting, processing, and analyzing large datasets. Utilizing
                Apache Spark, Hadoop, and Python, it ensures data quality and
                reliability. Targeting data engineers, scientists, and analysts,
                it empowers data-driven decision-making through robust data
                infrastructure.
              </p>
              <Link to="/de" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Ai} className="card-img-top" alt=".." />
            <div className="card-body">
              <h5 className="card-title">AI & ML</h5>
              <p className="card-text">
                The AI & ML project employs ML algorithms to analyze and predict
                trends from large datasets. Using TensorFlow and Scikit-learn,
                it develops models for tasks like image recognition, NLP, and
                predictive analytics. By leveraging AI, it enhances
                decision-making, automates processes, and drives innovation
                across various domains.
              </p>
              <Link to="/aiml" className="btn btn-primary">
                Know more
              </Link>
            </div>
          </div>

          <br />
        </div>
      </div>

      <div className="home4">
        <div className="home4-upper">
          <p>THE CAREERSHIP DIFFERENCE</p>
          <h1>Take the guesswork out of getting ahead</h1>
          <h4>
            Build skills. Learn by doing. Get the support you need. Land the job
            you want.
          </h4>
        </div>

        <div className="home4-lower">
          <div className="home4l1">
            <h2>Make your move in 3 to 9 months</h2>
            <h4>An online, flexible program to fit your life</h4>
            <p>
              Careership programs help you grow and evolve at your own pace. No
              need to quit your job or put your life on hold.
            </p>
          </div>
          <img src={Home41} alt="" />
        </div>
        <div className="home4-lower">
          <img src={Home42} alt="" />
          <div className="home4l1">
            <h2>Learn deeper with hands-on projects</h2>
            <h4>Practice the skills you’ll use in the real world</h4>
            <p>
              Unlike other online courses, here you'll build a portfolio that
              will give you an edge with employers.
            </p>
          </div>
        </div>
        {/* <div className="home4-lower">
          <div className="home4l1">
            <h2>Land a job or your money back</h2>
            <h4>Invest in yourself with confidence</h4>
            <p>Get a job or you'll receive a full refund. Terms apply.</p>
          </div>
          <img src={Home43} alt="" />
        </div> */}
      </div>
      <div className="home5">
        <div className="home5-upper">
          <h1>
            <strong>
              NyKinSky Careership grads have achieved life-changing growth. You
              can too.
            </strong>
          </h1>
        </div>
        <div className="home5-lower">
          <div class="card home5-card" style={{ width: "18rem" }}>
            <div class="card-body ">
              <h5 class="card-title">NUMBER OF ENROLLED STUDENTS</h5>
              <h1 class="card-subtitle mb-2 text">18,394</h1>
              <p class="card-text">
                The Number of students enrolled in Careership Career Tracks
                since our launch in 2016.
              </p>
            </div>
          </div>
          <div class="card home5-card" style={{ width: "18rem" }}>
            <div class="card-body ">
              <h5 class="card-title">12 MONTH JOB PLACEMENT RATE</h5>
              <h1 class="card-subtitle mb-2 text"> 85.6%</h1>
              <p class="card-text">
                Of job-qualified individuals who reported an offer, received it
                within 12 months of graduation.
              </p>
            </div>
          </div>
          <div class="card home5-card" style={{ width: "18rem" }}>
            <div class="card-body ">
              <h5 class="card-title">AVERAGE SALARY INCREASE</h5>
              <h1 class="card-subtitle mb-2 text ">Rs 1,74,500</h1>
              <p class="card-text">
                Average salary increase of Career Track graduates who provided
                pre- and post-course salaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
