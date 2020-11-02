import Container from "../../components/Container/Container";
import HomeImages from "../../components/HomeImages/HomeImages";
import Row from "../../components/Row/Row";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <div className="col-sm-12">
        <h1 className="text-white home-header">Welcome. My name is Aimee Esler.</h1>
        </div>
      </Row>
      <Row>
        <HomeImages />
      </Row>
    </Container>
  );
};

export default Home;
