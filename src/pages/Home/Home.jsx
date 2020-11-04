import Container from "../../components/Container/Container";
import HomeImages from "../../components/HomeImages/HomeImages";
import HomeVines from "../../components/HomeVines/HomeVines";
import Row from "../../components/Row/Row";
import "./Home.css";

const Home = () => {
  return (
    <Container className="flex-fill home-background" containerType="container-fluid mb-5">
      <Row>
        <div className="col-sm-12">
        <h1 className="text-white home-header text-center">Welcome.</h1>
        <p className="text-white text-center home-intro">I am a full stack web developer with a passion for a beautiful and clean user experience.</p>
        </div>
      </Row>
      <Row>
        <HomeVines />
      </Row>
      <Row>
        <HomeImages />
      </Row>
    </Container>
  );
};

export default Home;
