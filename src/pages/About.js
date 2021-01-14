import Hero from "../components/Hero/index";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {FaTerminal} from "react-icons/fa"


function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h3 style={{margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 50}}><FaTerminal/>Hello!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h3 style={{margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 50}}>My name is Joseph Jepson</h3>
                    </Col>
                </Row>
                <Jumbotron>
                <Row>
                    <Col size="6">
                        <Hero></Hero>
                    </Col>
                    <Col size="6" >
                        <div style={{fontSize: 20, marginRight: 30, paddingRight: 20}}>
                        <p> I am a Full-Stack Web Developer.</p>
                        <p>Currently working in the healthcare industry for Donor Network of Arizona, a federally designated, nonprofit organ procurement organization.</p>
                        <p>Checkout my <a href="/portfolio">portfolio</a> to see recent projects that I have worked on.</p>
                        <p>Take a look at my <a rel="noreferrer" href="https://docs.google.com/document/d/17X40IT-DeJSXVyl3ppgvui5OrA4x0iaQct5hN7rWVHA/edit?usp=sharing" target="_blank">resume</a> and <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank">GitHub</a> for a more comprehensive overview of my experience.
                </p>
                        <p>If you would like to say hi, you can get in <a href="/contact">contact</a>  with me by phone or email!</p>
                        </div>
                    </Col>
                </Row>
                </Jumbotron>
            </Container>
        </div>
    );
}

export default About;