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
          <div className="card about-card">
            <div className="card-body text-center">
              <p className="mt-3">
                Full stack web developer with diversified work experience that
                allows for a wide knowledge of various industries and their
                consumers. Recently earned a certificate in full stack
                web development from the Georgia Institute of Technology with strong
                skills in Javascript and responsive web design and a passion for
                creating a beautiful and enjoyable UX. Independent and
                self-motivated professional, strong planner and problem solver
                who readily adapts to change and challenges. Proficient
                multi-tasker who is able to meet tight deadlines in an organized
                and efficient manner. I recently applied my love for UX and
                clean design in a project to design a virtual travel community
                where users can exchange culture-based travel tips to improve
                their visit. Innovation has always been a part of my work
                mentality and I am always looking for ways to improve upon
                projects and processes to make them more efficient and user
                friendly.
              </p>
              <h2 className="skills-header">Languages and Skills</h2>
              <Row>
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                  <ul className="skills-list">
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Materialize</li>
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
              <Row>
                <div className="col-sm-12">
                  <a
                    href="https://drive.google.com/file/d/1M6rpd9JO_bZ7uk1hIPFxEqbHpHD5XtMq/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-link"
                  >
                    View My Resume
                  </a>
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
