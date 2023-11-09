import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="navbar">
          <div className="profile">
            <h1>PROFILE</h1>
            <span>I'm a student</span>
          </div>
        </div>
        <div className="container">
          <div className="Menu">
            <div className="firstbox">
              <div className="aboutme">
                <h2>About me</h2>
                <span>I have passion in IT and I want to become a professional developer.</span>
              </div>
              <img src="data:image/jpeg;base64,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" alt="" />
              <div className="details">
                <h2>Details</h2>
                <span className="title">Name:</span>
                <span> Tran Nhan Duc</span>
                <span className="title">Age:</span>
                <span> 21 years</span>
                <span className="title">Location:</span>
                <span> UIT, VNU-HCM</span>
              </div>
            </div>
            <div className="secondbox">
              <div className="title">
                <h1>Experience</h1>
              </div>
              <div className="content">
                <hr />
                <h2>Educations</h2>
                <div className="box">
                  <div className="ct">
                    <h3>UIT, VNU-HCM</h3>
                    <p>Apr 2020 - June 2025</p>
                  </div>
                  <div className="text">
                    <h4>Information System</h4>
                    <p>My primary focus during my education was on a foundational System Design course. However, I also gained insights into various other fields such as Web Development and Data Analysis. During my college years, I honed my skills in Object-Oriented Programming (OOP) and delved into the realm of data science. Currently, I am expanding my knowledge in web development..</p>
                  </div>
                </div>
                <hr />
                <h2>Working Experiences</h2>
                <div className="box">
                  <div className="ct">
                    <h3>Facebook | Fresher Engineer</h3>
                    <p>Sep 2021 - current</p>
                  </div>
                  <div className="text">
                    <h4>Part - Fresher Web Developer</h4>
                    <p>I am working as a junior developer on the development of a dating feature for a Facebook page. This dating feature functions similarly to apps like Tinder.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="thirdbox">
              <section className="content">
                <h2>Skills</h2>
                <hr className="light" />

                <ul>
                  <div className="po">
                    <p>Html, Css</p>
                    <div className="cool">
                      <div style={{ width: '80%' }} className="inner" />
                    </div>
                  </div>
                  <div className="po">
                    <p>SQL</p>
                    <div className="cool">
                      <div style={{ width: '75%' }} className="inner"> </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>JQuery</p>
                    <div className="cool">
                      <div style={{ width: '71%' }} className="inner"> </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>JavaScript</p>
                    <div className="cool">
                      <div style={{ width: '40%' }} className="inner"> </div>
                    </div>
                  </div>
                </ul>
                <ul>
                  <div className="po">
                    <p>Object Oriented Programming</p>
                    <div className="cool">
                      <div style={{ width: '50%' }} className="inner" />
                    </div>
                  </div>
                  <div className="po">
                    <p>SEO</p>
                    <div className="cool">
                      <div style={{ width: '35%' }} className="inner"> </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>React</p>
                    <div className="cool">
                      <div style={{ width: '71%' }} className="inner"> </div>
                    </div>
                  </div>
                </ul>

                <div className="profile">
                  <span>See my project on github</span>
                </div>
                <br />
                <button onclick="document.location='https://github.com/chetung2808'" className="button">See</button>
              </section>
              <br />
            </div>
          </div>
        </div></div>

    </div>
  );
}

export default App;
