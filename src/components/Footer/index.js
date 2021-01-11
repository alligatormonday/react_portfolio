
import "./style.css";
import Row from "../Row"
import Col from "../Col"
import Container from "../Container"

function Footer() {
  return (
    <Container fluid>
      <footer className="footer">
        <Row className="justify-content-md-center">
          <Col className="social-media" size="md-12">
            <a href="https://www.instagram.com/alligatormonday/" rel="noreferrer" target="_blank"><i
              class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/josephjepson/" rel="noreferrer" target="_blank"><i
              class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank"><i class="fab fa-github"></i></a>
          </Col>
          <span >Joseph Jepson 2021</span>
        </Row>
      </footer>
    </Container>

  );
}

export default Footer;
