import { FaTerminal } from "react-icons/fa"
import { Link } from "react-router-dom";


function About() {
    return (
        <div>
            <div>
            <h3 style={{margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 30}}>Hello,</h3>
            <h3 style={{margin: '0 auto', alignContent: 'center', textAlign: 'center', fontSize: 30}} className='sm:p-3'>my name is Joseph Jepson</h3>
            </div>
            <div className='flex flex-col sm:px-12 mx-auto bg-gray-100 items-center justify-center sm:items-between sm:p-8 sm:flex-row'>
                <div>
                <img className='mx-auto mb-4 sm:mb-0 flex-shrink' src="/Profile_Photo.jpg"/>
                </div>
                <div className='flex-grow sm:p-8'>
                    <p className='sm:text-4xl md:text-6xl text-2xl font-bold'> I am a Full-Stack Web Developer.</p>
                    <p>Currently working in the healthcare industry for Donor Network of Arizona, a federally designated, nonprofit organ procurement organization.</p>
                    <p>Checkout my <Link to="/portfolio">portfolio</Link> to see recent projects that I have worked on.</p>
                    <p>Take a look at my <a rel="noreferrer" href="https://docs.google.com/document/d/17X40IT-DeJSXVyl3ppgvui5OrA4x0iaQct5hN7rWVHA/edit?usp=sharing" target="_blank">resume</a> and <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank">GitHub</a> for a more comprehensive overview of my experience.
                </p>
                    <p>If you would like to say hi, you can get in <Link to="/contact">contact</Link>  with me by phone or email!</p>
                </div>

            </div>
            {/* <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        
                    </Col>
                </Row>
                <Container fluid style={{backgroundColor: 'hotpink', padding: '1rem'}}>
                <Row>
                    <Col sm={3} lg={6} >
                        <Hero></Hero>
                    </Col>
                    <Col className='centeredOnMobile' sm={12} lg={6} >
                        <div style={{fontSize: 20}}>
                        <p> I am a Full-Stack Web Developer.</p>
                        <p>Currently working in the healthcare industry for Donor Network of Arizona, a federally designated, nonprofit organ procurement organization.</p>
                        <p>Checkout my <Link to="/portfolio">portfolio</Link> to see recent projects that I have worked on.</p>
                        <p>Take a look at my <a rel="noreferrer" href="https://docs.google.com/document/d/17X40IT-DeJSXVyl3ppgvui5OrA4x0iaQct5hN7rWVHA/edit?usp=sharing" target="_blank">resume</a> and <a href="https://github.com/alligatormonday" rel="noreferrer" target="_blank">GitHub</a> for a more comprehensive overview of my experience.
                </p>
                        <p>If you would like to say hi, you can get in <Link to="/contact">contact</Link>  with me by phone or email!</p>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Container> */}
        </div>
    );
}

export default About;