import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Project from "../components/Project/index"

function Portfolio() {
    return(
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h4>Recent Projects</h4>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <Project></Project>
                        <p>If you would like to say hi, you can get in <a href="contact.html">contact</a>  with me by phone or email!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}



    export default Portfolio;
