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
                    </Col>
                </Row>
            </Container>
        </div>
    );


}



    export default Portfolio;
