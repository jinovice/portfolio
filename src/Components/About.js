import './About.scss';

function About() {
  return (
    <section id="about">
      <div className="sectionHeader _basicW">
        <h2>About</h2>
        <p>Expertise and Proficiencies: A Closer Look at My Skill Set and Tools</p>
      </div>
      <div className="aboutLayout">
        <div className="profileContainer">
          <p>
            I have a solid career background with 4 years of experience as a graphic designer, utilizing software such as Photoshop and Illustrator. During this time, I successfully delivered various design projects. I then transitioned to the role of a UX/UI designer for 3 years, where I honed my skills in using MS Office tools to create engaging user experiences.
          </p>
          <p>
            For the past 4 years, I have been actively involved as a front-end web developer, specializing in HTML, CSS, and JavaScript. I possess expertise in building complex websites from scratch and ensuring high standards of accessibility and usability.
          </p>
          <p>
            As a consultant team leader in web accessibility improvement projects, I have demonstrated my ability to lead and guide teams towards successful outcomes. I have gained a deep understanding of collaboration and effective communication across different teams and roles.
          </p>
          <p>
            Having immigrated to Australia and obtained permanent residency, I am currently seeking a React front-end developer position to further enhance my skillset. With my diverse experience and strong understanding of team dynamics, I am well-equipped to contribute to your organization's success.
          </p>
          <p>
            Feel free to contact me to discuss opportunities or view my comprehensive portfolio showcasing my work.
          </p>
        </div>
        <div className="graphContainer">
          <h3>EXPERT IN</h3>
          <div className="mySkills">

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>HTML5/CSS3</h4>
              <div className="grade">EXPERT</div>
              <div className="bar">
                <div className="fill g100"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>WCAG</h4>
              <div className="grade">EXPERT</div>
              <div className="bar">
                <div className="fill g100"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>JAVASCRIPT</h4>
              <div className="grade">ADVANCED</div>
              <div className="bar">
                <div className="fill g85"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>REACT</h4>
              <div className="grade">INTERMEDIATE</div>
              <div className="bar">
                <div className="fill g65"></div>
              </div>
            </div>

            {/*<div className="graph scroll-element eff-scroll fade-in-bottom">*/}
            {/*  <h4>TYPESCRIPT</h4>*/}
            {/*  <div className="grade">INTERMEDIATE</div>*/}
            {/*  <div className="bar">*/}
            {/*    <div className="fill g50"></div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>PHOTOSHOP</h4>
              <div className="grade">EXPERT</div>
              <div className="bar">
                <div className="fill g100"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>ILLUSTRATOR</h4>
              <div className="grade">EXPERT</div>
              <div className="bar">
                <div className="fill g90"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>MSOFFICE</h4>
              <div className="grade">EXPERT</div>
              <div className="bar">
                <div className="fill g90"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>FIGMA</h4>
              <div className="grade">ADVANCED</div>
              <div className="bar">
                <div className="fill g70"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>SASS</h4>
              <div className="grade">INTERMEDIATE</div>
              <div className="bar">
                <div className="fill g60"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>WORDPRESS</h4>
              <div className="grade">INTERMEDIATE</div>
              <div className="bar">
                <div className="fill g60"></div>
              </div>
            </div>

            <div className="graph scroll-element eff-scroll fade-in-bottom">
              <h4>PREMIERE PRO</h4>
              <div className="grade">INTERMEDIATE</div>
              <div className="bar">
                <div className="fill g50"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
