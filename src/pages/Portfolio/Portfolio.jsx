import Container from "../../components/Container/Container";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Row from "../../components/Row/Row";
import cultourist from "../../images/portfolio/cultourist.PNG";
import dinnerDecider from "../../images/portfolio/dinner.PNG";
import employee from "../../images/portfolio/employee.PNG";
import quiz from "../../images/portfolio/quiz.PNG";
import scheduler from "../../images/portfolio/scheduler.PNG";
import weather from "../../images/portfolio/weather.PNG";
import cultouristBW from "../../images/portfolio/cultouristBW.png";
import dinnerDeciderBW from "../../images/portfolio/dinnerBW.png";
import employeeBW from "../../images/portfolio/employeeBW.png";
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
      body:
        "CulTourist is the perfect resource to know local customs, slang and scams while abroad. Get trusted advice from fellow travelers to blend in with the locals at your next destination!",
    },
    {
      color: dinnerDecider,
      bw: dinnerDeciderBW,
      alt: "dinner decider screenshot",
      name: "Dinner Decider",
      github: "https://github.com/aimeecesler/dinner-decider",
      deployed: "https://aimeecesler.github.io/dinner-decider/",
      body:
        "Dinner Decider is finally the answer to the age old question, “What do you want for dinner?” Singles, couples and families everywhere rejoice because they finally have something else to make the decision for them!",
    },
    {
      color: employee,
      bw: employeeBW,
      alt: "employee screenshot",
      name: "Employee Directory",
      github: "https://github.com/aimeecesler/react-employee-directory",
      deployed: "https://aimeecesler.github.io/react-employee-directory/",
      body: "Do you need a way to view all of your employee data quickly and easily? Need to find all the October birthdays? Can't remember Steve's last name? Not a problem! This employee directory is built for easy and accurate results.",
    },
    {
      color: quiz,
      bw: quizBW,
      alt: "quiz screenshot",
      name: "Super Fun Code Quiz",
      github: "https://github.com/aimeecesler/super-fun-code-quiz",
      deployed: "https://aimeecesler.github.io/super-fun-code-quiz/",
      body:
        "Are you a coding genius or totally lost? Test it out with this super fun coding quiz, but be careful a wrong answer will lose seconds on the clock! Save your high scores and try to beat the clock!",
    },
    {
      color: scheduler,
      bw: schedulerBW,
      alt: "scheduler screenshot",
      name: "Workday Scheduler",
      github: "https://github.com/aimeecesler/work-day-scheduler",
      deployed: "https://aimeecesler.github.io/work-day-scheduler/",
      body: "Do you struggle to keep track of your daily tasks at work? This is the tool for you! Track all of your tasks and appointments throughout the day and get color coded reminders of the time throughout the day.",
    },
    {
      color: weather,
      bw: weatherBW,
      alt: "weather screenshot",
      name: "Weather Dashboard",
      github: "https://github.com/aimeecesler/weather-dashboard",
      deployed: "https://aimeecesler.github.io/weather-dashboard/",
      body:
        "Have a trip planned or just need to check out the weather near you? This application is just what you need with current weather conditions and a five day forecast for all your new searches or saved cities.",
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
        {projects.map((project, index) => (
          <PortfolioCard {...project} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
