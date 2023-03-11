import Container from "../../components/Container/Container";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Row from "../../components/Row/Row";
import cultourist from "../../images/portfolio/cultourist.PNG";
import cultouristBW from "../../images/portfolio/cultouristBW.png";
import gameKnight from "../../images/portfolio/gameknight.PNG";
import gameKnightBW from "../../images/portfolio/gameknightBW.png";
import screaltor from "../../images/portfolio/screaltor.PNG";
import screaltorBW from "../../images/portfolio/screaltorBW.png";
import leg from "../../images/portfolio/LEG.gif";

import "./Portfolio.css";

const Portfolio = () => {
  const webProjects = [
    {
      color: gameKnight,
      bw: gameKnightBW,
      alt: "game knight screenshot",
      name: "Game Knight",
      github: "https://github.com/aimeecesler/gameknight",
      deployed: "https://gameknight.onrender.com",
      body: "An online game scheduling app that brings people together to play various games (board games, RPGs, card games, video games, puzzles, etc.). Stuck at home and bored? Don’t make it a lame night, make it a Game Knight!",
    },
    {
      color: cultourist,
      bw: cultouristBW,
      alt: "cultourist screenshot",
      name: "CulTourist",
      github: "https://github.com/aimeecesler/cultourist_app",
      deployed: "https://cultourist.onrender.com/",
      body:
        "CulTourist is the perfect resource to know local customs, slang and scams while abroad. Get trusted advice from fellow travelers to blend in with the locals at your next destination!",
    },
    {
      color: screaltor,
      bw: screaltorBW,
      alt: "realtor screenshot",
      name: "Steve Corbin - Realtor\u00AE",
      github: "https://github.com/aimeecesler/steve-corbin-realtor",
      deployed: "https://steve-corbin-realtor.onrender.com/",
      body: "Designed for a real estate agent with both old and new customers in mind! This site not only provides a beautiful experience for clients to search properties and learn more about their agent but it also allows the agent to add, edit and delete properties they have available.",
    },
  ];

  const iOSProjects = [
    {
      color: leg,
      bw: leg,
      alt: "golf app screenshot",
      name: "L.E.G.",
      github: "https://github.com/aimeecesler/legs",
      deployed: "",
      body: "Prepare for a season long golf league battle made easy with the LEG app! Track your group's stats with Stableford scoring, live score tracking and realtime leaderboard standings. Find out who truly is the <b>L</b>east <b>E</b>rratic <b>G</b>olfer!",
    },
  ]

  return (
    <Container
      className="flex-fill portfolio-background"
      containerType="container-fluid my-5"
    >
      <Row>
        <div className="col-sm-12 text-center mb-5">
          <h1 className="text-white portfolio-header">PORTFOLIO</h1>
          <h3 className="text-white portfolio-text">
            iOS Projects
          </h3>
        </div>
      </Row>
      <Row>
        {iOSProjects.map((project, index) => (
          <PortfolioCard {...project} key={index} />
        ))}
      </Row>
      <Row>
      <div className="col-sm-12 text-center mb-5">
          <h3 className="text-white portfolio-text">
            Web Projects
          </h3>
        </div>
      </Row>
      <Row>
        {webProjects.map((project, index) => (
          <PortfolioCard {...project} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
