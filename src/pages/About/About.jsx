import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import aimee from "../../images/about/aimeeaboutvanilla.png";
import "./About.css";

const About = () => {
  return (
    <Container
      className="flex-fill about-background"
      containerType="container-fluid mb-5"
    >
      <Row>
        <div className="col-sm-12">
          <div className="jumbotron jumbotron-fluid"></div>
        </div>
      </Row>
      <Row>
        <h1 className="about-header text-white mx-5 mb-5">
          Hello, my name is Aimee Esler.
        </h1>
      </Row>
      <Row>
        <div className="col-sm-3">
          <img className="about-image" src={aimee} alt="Aimee" />
        </div>
        <div className="col-sm-9">
          <div className="card">
            <div className="card-body text-center">
              <p className="mt-3">
                My name is Aimee Esler and I am currently a student in the
                Georgia Tech Coding Boot Camp program. I was born and raised in
                Bonita Springs, a tiny town in southwest Florida. I went to the
                University of Florida (Go Gators!) and graduated with Bachelors
                degree in Wildlife Ecology and Conservation. After graduation I
                also attended the Santa Fe College Teaching Zoo and went on to
                work in my dream job as a lead mammals Zookeeper at Naples Zoo
                in Naples, FL. Unfortunately, as we all learn at some point in
                life, even our "dream jobs" come with their issues and I made
                the difficult decision six years ago to change careers and move
                to Atlanta, GA. For the last six years I have been working as a
                data analyst/administrative assistant and I felt like I had
                reached my maximum potential in this field. I wanted to start a
                new challenge in a field I knew I could learn and grow in for
                the rest of my career... enter web development!
              </p>
              <h2 className="skills-header">Languages and Skills</h2>
              <Row>
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                  <ul className="skills-list">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Bootstrap CSS Framework</li>
                    <li>Bulma CSS Framework</li>
                    <li>Materialize CSS Framework</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="skills-list">
                    <li>Handlebars</li>
                    <li>Sequelize</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose.js</li>
                    <li>Git</li>
                    <li>React</li>
                  </ul>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default About;
