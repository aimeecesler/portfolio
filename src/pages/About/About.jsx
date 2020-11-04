import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import "./About.css";

const About = () => {
  return (
    <Container className="flex-fill about-background" containerType="container-fluid mb-5">
      <Row>
        <div className="col-sm-12">
          <h1>THIS IS MY ABOUT PAGE</h1>
        </div>
      </Row>
    </Container>
  );
};

export default About;
