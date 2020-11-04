import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <Container className="flex-fill portfolio-background">
      <Row>
        <div className="col-sm-12">
          <h1>THIS IS MY PORTFOLIO PAGE</h1>
        </div>
      </Row>
    </Container>
  );
};

export default Portfolio;
