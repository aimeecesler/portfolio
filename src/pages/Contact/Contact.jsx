import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="flex-fill contact-background">
      <Row>
        <div className="col-sm-6 text-center">
          <div className="card mt-5 ml-5">
            <div className="card-body">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdDjQpmAFFYlCGbM_SgHbXT3wQ8mZTG8kF0qMnwWDVxwXszRQ/viewform?embedded=true"
                title="contact"
                width="100%"
                height="750"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
              <h2>Direct Contact Information</h2>
              <h6 className="card-title text-muted">Email: </h6>
              <p className="card-text">
                <a href="MAILTO:aimeecesler@gmail.com">aimeecesler@gmail.com</a>
              </p>
              <h6 className="car-subtitle text-muted">Phone: </h6>
              <p className="card-text">
                <a href="tel:2392897678">(239) 289-7678</a>
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
