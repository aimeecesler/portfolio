import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import "./About.css";

const About = () => {
  return (
    <Container
      className="flex-fill about-background"
      containerType="container-fluid mb-5"
    >
      <Row>
        <div className="col-sm-12">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Fluid jumbotron</h1>
              <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default About;
