import Container from "../../components/Container/Container";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Row from "../../components/Row/Row";
import cultourist from "../../images/portfolio/cultourist.PNG";
import dinnerDecider from "../../images/portfolio/dinner.PNG";
import employee from "../../images/portfolio/employee.PNG";
import cultouristBW from "../../images/portfolio/cultouristBW.png";
import dinnerDeciderBW from "../../images/portfolio/dinnerBW.png";
import employeeBW from "../../images/portfolio/employeeBW.png";
import gameKnight from "../../images/portfolio/gameknight.PNG";
import gameKnightBW from "../../images/portfolio/gameknightBW.png";
import bookBadger from "../../images/portfolio/bookbadger.PNG";
import bookBadgerBW from "../../images/portfolio/bookbadgerBW.png";
import screaltor from "../../images/portfolio/screaltor.PNG";
import screaltorBW from "../../images/portfolio/screaltorBW.png";

import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      color: gameKnight,
      bw: gameKnightBW,
      alt: "game knight screenshot",
      name: "Game Knight",
      github: "https://github.com/aimeecesler/gameknight",
      deployed: "https://gameknight-app.herokuapp.com/",
      body: "An online game scheduling app that brings people together to play various games (board games, RPGs, card games, video games, puzzles, etc.). Stuck at home and bored? Don’t make it a lame night, make it a Game Knight!",
    },
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
      color: screaltor,
      bw: screaltorBW,
      alt: "realtor screenshot",
      name: "Steve Corbin - Realtor\u00AE",
      github: "https://github.com/aimeecesler/steve-corbin-realtor",
      deployed: "http://www.stevecorbinrealtor.com/",
      body: "Designed for a real estate agent with both old and new customers in mind! This site not only provides a beautiful experience for clients to search properties and learn more about their agent but it also allows the agent to add, edit and delete properties they have available.",
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
      color: bookBadger,
      bw: bookBadgerBW,
      alt: "book badger screenshot",
      name: "Book Badger",
      github: "https://github.com/aimeecesler/react-book-app",
      deployed: "https://ace-google-books.herokuapp.com/",
      body: "Are you a bookworm who has trouble squirreling away your favorite books? Look no further than book badger! Search through the Google Books library and save your favorites for future reading or just a reminder of your love for them!",
    },
    {
      color: employee,
      bw: employeeBW,
      alt: "employee screenshot",
      name: "Employee Directory",
      github: "https://github.com/aimeecesler/react-employee-directory",
      deployed: "https://aimeecesler.github.io/react-employee-directory/",
      body:
        "Do you need a way to view all of your employee data quickly and easily? Need to find all the October birthdays? Can't remember Steve's last name? Not a problem! This employee directory is built for easy and accurate results.",
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
