import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from 'react-bootstrap/Jumbotron'


function Contact() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h4>Give me a buzz</h4>
                    </Col>
                </Row>
                <Jumbotron>
                    <Row>
                        <Col size="md-12">
                            <p class="lead social">Email: <a href="mailto:joey@joeyjepson.com" rel="noreferrer" target="_blank" type="btn">joey@joeyjepson.com</a>
                            </p>

                            <p class="lead social">Cell: <a href="tel:480-643-0778" rel="noreferrer" target="_blank" type="btn">(480) 643-0778</a>
                            </p>

                            <p class="lead social">LinkedIn: <a href="https://www.linkedin.com/in/josephjepson/" rel="noreferrer" target="_blank" type="btn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            </p>

                            <p class="lead social">GitHub: <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank" type="btn">
                                <i class="fab fa-github"></i>
                            </a>
                            </p>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>


    )
}

export default Contact