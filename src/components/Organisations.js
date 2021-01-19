import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class Organisations extends Component {
    render() {
        return (
            <div className='home-organisations bg-white mt-5'>
                <Container className='d-flex text-center'>
                    <Row>
                        <Col className='border-right py-4'>
                            <div className='text-center'><img src="images/image 10.png" alt="Error"/></div>
                            <div className='mt-3'>O'zbekiston Respublikasi Prezidentining <br/> rasmiy veb sayti</div>
                            <div className='position-absolute'>data.gov.uz</div>
                        </Col>
                        <Col className='border-right py-4'>
                            <div className='text-center'><img src="images/image 10.png" alt="Error"/></div>
                            <div className='mt-3'>O'zbekiston Respublikasi Prezidentining <br/> rasmiy veb sayti</div>
                            <div className='position-absolute'>data.gov.uz</div>
                        </Col>
                        <Col className='border-right py-4'>
                            <div className='text-center'><img src="images/image 10.png" alt="Error"/></div>
                            <div className='mt-3'>O'zbekiston Respublikasi Prezidentining <br/> rasmiy veb sayti</div>
                            <div className='position-absolute'>data.gov.uz</div>
                        </Col>
                        <Col className='border-right py-4'>
                            <div className='text-center'><img src="images/image 10.png" alt="Error"/></div>
                            <div className='mt-3'>O'zbekiston Respublikasi Prezidentining <br/> rasmiy veb sayti</div>
                            <div className='position-absolute'>data.gov.uz</div>
                        </Col>
                        <Col className='py-4'>
                            <div className='text-center'><img src="images/image 10.png" alt="Error"/></div>
                            <div className='mt-3'>O'zbekiston Respublikasi Prezidentining <br/> rasmiy veb sayti</div>
                            <div className='position-absolute'>data.gov.uz</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Organisations;