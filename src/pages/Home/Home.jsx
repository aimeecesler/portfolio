import Container from "../../components/Container/Container";
import HomeImages from "../../components/HomeImages/HomeImages";
import Row from "../../components/Row/Row";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <HomeImages />
      </Row>
    </Container>
  );
};

export default Home;
