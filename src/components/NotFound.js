import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={4} className='offset-4 my-5 text-center'>
                            <img src="/images/404-error-page-not-found.jpg" alt="Error" className='w-100'/>
                            <h4>Bunday sahifa mavjud emas! </h4>
                            <Link to='/'>Bosh sahifaga o'tish</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NotFound;