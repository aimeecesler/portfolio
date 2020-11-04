import Container from "../../components/Container/Container";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Row from "../../components/Row/Row";
import cultourist from "../../images/portfolio/cultourist.PNG";
import dinnerDecider from "../../images/portfolio/dinner.PNG";
import password from "../../images/portfolio/password.PNG";
import quiz from "../../images/portfolio/quiz.PNG";
import scheduler from "../../images/portfolio/scheduler.PNG";
import weather from "../../images/portfolio/weather.PNG";
import cultouristBW from "../../images/portfolio/cultouristBW.png";
import dinnerDeciderBW from "../../images/portfolio/dinnerBW.png";
import passwordBW from "../../images/portfolio/passwordBW.png";
import quizBW from "../../images/portfolio/quizBW.png";
import schedulerBW from "../../images/portfolio/schedulerBW.png";
import weatherBW from "../../images/portfolio/weatherBW.png";

import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      color: cultourist,
      bw: cultouristBW,
      alt: "cultourist screenshot",
      name: "CulTourist",
      github: "https://github.com/aimeecesler/cultourist_app",
      deployed: "https://cultouristapp.herokuapp.com/",
    },
    {
      color: dinnerDecider,
      bw: dinnerDeciderBW,
      alt: "dinner decider screenshot",
      name: "Dinner Decider",
      github: "https://github.com/aimeecesler/dinner-decider",
      deployed: "https://aimeecesler.github.io/dinner-decider/",
    },
    {
      color: password,
      bw: passwordBW,
      alt: "password screenshot",
      name: "Password Generator",
      github: "https://github.com/aimeecesler/password-generator",
      deployed: "https://aimeecesler.github.io/password-generator/",
    },
    {
      color: quiz,
      bw: quizBW,
      alt: "quiz screenshot",
      name: "Super Fun Code Quiz",
      github: "https://github.com/aimeecesler/super-fun-code-quiz",
      deployed: "https://aimeecesler.github.io/super-fun-code-quiz/",
      
    },
    {
      color: scheduler,
      bw: schedulerBW,
      alt: "scheduler screenshot",
      name: "Workday Scheduler",
      github: "https://github.com/aimeecesler/work-day-scheduler",
      deployed: "https://aimeecesler.github.io/work-day-scheduler/",
    },
    {
      color: weather,
      bw: weatherBW,
      alt: "weather screenshot",
      name: "Weather Dashboard",
      github: "https://github.com/aimeecesler/weather-dashboard",
      deployed: "https://aimeecesler.github.io/weather-dashboard/",
    },
  ];

  return (
    <Container
      className="flex-fill portfolio-background"
      containerType="container-fluid my-5"
    >
      <Row>
        <div className="col-sm-12 text-center mb-5">
          <h1 className="text-white portfolio-header">PORTFOLIO</h1>
          <h3 className="text-white portfolio-text">
            Click on a project for more information.
          </h3>
        </div>
      </Row>
      <Row>
        {projects.map((project) => (
          <PortfolioCard {...project} />
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
