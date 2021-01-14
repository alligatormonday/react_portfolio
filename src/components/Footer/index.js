
import "./style.css";
import Row from "../Row"
import Col from "../Col"
import Container from "../Container"

function Footer() {
  return (
    <Container fluid>
      <footer style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>
        <Row>
          <Col className="social-media" size="md-12">
            <a href="https://www.instagram.com/alligatormonday/" rel="noreferrer" target="_blank"><i
              class="fab fa-instagram social-icon"></i></a>
            <a href="https://www.linkedin.com/in/josephjepson/" rel="noreferrer" target="_blank"><i
              class="fab fa-linkedin-in social-icon"></i></a>
            <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank"><i class="fab fa-github social-icon"></i></a>
          </Col>
          <span style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>Handcrafted by Joseph Jepson &#169; 2021 All Rights Reserved</span>
        </Row>
      </footer>
    </Container>

  );
}

export default Footer;
