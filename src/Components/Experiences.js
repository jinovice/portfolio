
import './Experiences.scss';

function Portfolios() {
  return (

    <section id="experience">
      <div className="sectionHeader">
        <h2>Experience</h2>
        <p>Gaining valuable skills and expertise through professional experience</p>
      </div>
      <div className="career">
        <dl>
          <dt className="scroll-element eff-scroll slide-left">
            <div className="eff">
              <h3 className="company">Freelancer</h3>
              {/*<div className="role">UI/UX Designer</div>*/}
              <div className="role">Front-end developer</div>
              <div className="role">Graphic designer</div>
              <div className="when">2017 - 2021</div>
            </div>
          </dt>
          <dd className="scroll-element eff-scroll slide-right">
            <div className="description">
              Front-end web development and web accessibility consulting services for large corporations, universities, and e-commerce companies.
            </div>
            <div className="_group">
              <ul className="tags roles dark">
                <li>FRONT-END</li>
                <li>GRAPHIC</li>
              </ul>
              <ul className="tags tools">
                <li>HTML/CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>PHOTOSHOP</li>
                <li>ILLUSTRATOR</li>
                <li>FIGMA</li>
              </ul>
            </div>
            <ul className="works">
              <li>Front-end web development for an application that automatically calculates materials for prefabricated buildings.</li>
              <li>Front-end web development and web accessibility consulting services for the Hyundai Motor website and its subdomains BlueMembers and CSR, focusing on web accessibility and responsive design.</li>
              <li>Created logos for various companies including Samil technology Thailand, Ji & Mi plastic surgery, Olta Academy, and more.</li>
              <li>SNS Instagram marketing for my own characters and cartoons.</li>
              {/*<li>Designed the UI/UX for an automated solution for construction materials and estimation.</li>*/}
              <li>And more.</li>
            </ul>
          </dd>
          <dt className="scroll-element eff-scroll slide-left">
            <div className="eff">
              <h3 className="company">Incloud Inc.</h3>
              <div className="role">Web Publisher</div>
              <div className="when">2015 - 2017</div>
            </div>
          </dt>
          <dd className="scroll-element eff-scroll slide-right">
            <div className="description">
              Overall Front-end web development, UI/UX design, enhancement, and maintenance for online border systems using electronic blackboard on a web platform basis.
            </div>
            <div className="_group">
              <ul className="tags roles dark">
                <li>UI/UX</li>
                <li>front-end</li>
              </ul>
              <ul className="tags tools">
                <li>Photoshop</li>
                <li>html/css</li>
                <li>slack</li>
                <li>Git</li>
              </ul>
            </div>
            <ul className="works">
              <li>Front-end web development for web-based e-learning solutions, training material management solutions, and interactive video lesson solutions, with a focus on web accessibility and responsive design.</li>
            </ul>
          </dd>
          <dt className="scroll-element eff-scroll slide-left">
            <div className="eff">
              <h3 className="company">Denovation</h3>
              <div className="role">Web Publisher</div>
              <div className="when">2013 - 2015</div>
            </div>
          </dt>
          <dd className="scroll-element eff-scroll slide-right">
            <div className="description">
              Front-end web development with a focus on web accessibility for local government, large corporations, and universities.
            </div>
            <div className="_group">
              <ul className="tags roles dark">
                <li>UI/UX</li>
                <li>front-end</li>
                <li>accessibility</li>
              </ul>
              <ul className="tags tools">
                <li>Photoshop</li>
                <li>html/css</li>
                <li>js</li>
              </ul>
            </div>
            <ul className="works">
              <li>Designed the UI/UX for Giordano and BSX shopping mall websites.</li>
              <li>Front-end web development for Korea Scholarship Foundation, Daekyo, ImTcast, StampBack, Insuko, and more.</li>
              <li>Korea Water Resources Corporation web portal.</li>
              <li>And more.</li>
            </ul>
          </dd>
          <dt className="scroll-element eff-scroll slide-left">
            <div className="eff">
              {/*<div className="url"><a href="http://www.k3i.co.kr/" target="_blank">Website</a></div>*/}
              <h3 className="company">K3I Co., Ltd.</h3>
              <div className="role">Graphic & Web Designer</div>
              <div className="role">Front-end developer</div>
              <div className="when">2011 - 2013</div>
            </div>
          </dt>
          <dd className="scroll-element eff-scroll slide-right">
            <div className="description">
              Web & Graphic design and front-end web development for local government and public agency portal sites.
            </div>
            <div className="_group">
              <ul className="tags roles dark">
                <li>UI/UX</li>
                <li>front-end</li>
              </ul>
              <ul className="tags tools">
                <li>Photoshop</li>
                <li>html/css</li>
                <li>js</li>
              </ul>
            </div>
            <ul className="works">
              <li>Daejeon City Hall, Daejeon ITS, Seosan City Hall, Nonsan City Hall, and Dangjin City Hall.</li>
              <li>Jinan, Wanju, Muju, Imsil, Sunchang Country Office Web portals.</li>
              <li>Boryeong Tourist web portal, and Boryeong Mud Festival website.</li>
              <li>And more.</li>
            </ul>
          </dd>
        </dl>
      </div>
    </section>
  );
}

export default Portfolios;
