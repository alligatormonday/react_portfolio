import Hero from "../components/Hero/index";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h4>Hello!</h4>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h4>My name is Joseph Jepson</h4>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Hero></Hero>
                    </Col>
                    <Col size="md-12">
                        <p> I am a Full-Stack Web Developer.</p>
                        <p>Currently working in the healthcare industry for Donor Network of Arizona, a federally designated, nonprofit organ procurement organization.</p>
                        <p>Checkout my <a href="/portfolio">portfolio</a> to see recent projects that I have worked on.</p>
                        <p>Take a look at my <a href="assets/DEVELOPER_RESUME_2020.pdf" target="_blank">resume</a> and <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank">GitHub</a> for a more comprehensive overview of my experience.
                </p>
                        <p>If you would like to say hi, you can get in <a href="contact.html">contact</a>  with me by phone or email!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;