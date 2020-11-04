import { useState } from "react";
import CarouselSlide from "../../components/CarouselSlide/CarouselSlide";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import cultourist from "../../images/portfolio/cultourist.PNG";
import dinnerDecider from "../../images/portfolio/dinner.PNG";
import password from "../../images/portfolio/password.PNG";
import quiz from "../../images/portfolio/quiz.PNG";
import scheduler from "../../images/portfolio/scheduler.PNG";
import weather from "../../images/portfolio/weather.PNG";

import "./Portfolio.css";

const Portfolio = () => {
  const [state, setState] = useState([
    {
      src: cultourist,
      alt: "cultourist screenshot",
      name: "CulTourist",
      github: "https://github.com/aimeecesler/cultourist_app",
      deployed: "https://cultouristapp.herokuapp.com/",
      class: "carousel-item active",
    },
    {
      src: dinnerDecider,
      alt: "dinner decider screenshot",
      name: "Dinner Decider",
      github: "https://github.com/aimeecesler/dinner-decider",
      deployed: "https://aimeecesler.github.io/dinner-decider/",
      class: "carousel-item",
    },
    {
      src: password,
      alt: "password screenshot",
      name: "Password Generator",
      github: "https://github.com/aimeecesler/password-generator",
      deployed: "https://aimeecesler.github.io/password-generator/",
      class: "carousel-item",
    },
    {
      src: quiz,
      alt: "quiz screenshot",
      name: "Super Fun Code Quiz",
      github: "https://github.com/aimeecesler/super-fun-code-quiz",
      deployed: "https://aimeecesler.github.io/super-fun-code-quiz/",
      class: "carousel-item",
    },
    {
      src: scheduler,
      alt: "scheduler screenshot",
      name: "Workday Scheduler",
      github: "https://github.com/aimeecesler/work-day-scheduler",
      deployed: "https://aimeecesler.github.io/work-day-scheduler/",
      class: "carousel-item",
    },
    {
      src: weather,
      alt: "weather screenshot",
      name: "Weather Dashboard",
      github: "https://github.com/aimeecesler/weather-dashboard",
      deployed: "https://aimeecesler.github.io/weather-dashboard/",
      class: "carousel-item",
    },
  ]);

  return (
    <Container
      className="flex-fill portfolio-background"
      containerType="container-fluid my-5"
    >
      <Row>
        <div className="col-sm-3"></div>
        <div className="col-sm-6 px-5">

          <div
            id="portfolioCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#portfolioCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#portfolioCarousel" data-slide-to="1"></li>
              <li data-target="#portfolioCarousel" data-slide-to="2"></li>
              <li data-target="#portfolioCarousel" data-slide-to="3"></li>
              <li data-target="#portfolioCarousel" data-slide-to="4"></li>
              <li data-target="#portfolioCarousel" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              {state.map((project, index) => (
                <CarouselSlide {...project} key={index}/>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#portfolioCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#portfolioCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Portfolio;
