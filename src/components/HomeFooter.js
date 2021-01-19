import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer text-white'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h4>Dustlikdon.uz</h4>
                            <a href="#" className='mt-4'>
                                Jizzax viloyati Dustlik tumani Sanoatchilar MFY Sanoat ko'chasi 49
                            </a>
                        </Col>
                        <Col md={2}>
                            <h5>Asosiy</h5>
                            <a href="#" className='mt-4'>Jamiyat haqida</a>
                            <a href="#">Struktura</a>
                            <a href="#">Yangiliklar</a>
                        </Col>
                        <Col md={3}>
                            <h5>Xizmatlar</h5>
                            <a href="#" className='mt-4'>Elektron murojaatlar</a>
                            <a href="#">Interaktiv xizmatlar</a>
                            <a href="#">Saytdan izlash</a>
                        </Col>
                        <Col md={3}>
                            <h5>Bog'lanish</h5>
                            <a href="#" className='mt-4'><span className='icon icon-phone'/> 998 71 335 45 16</a>
                            <a href="#"><span className='icon icon-message'/> info@dustlikdon.uz</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeFooter;