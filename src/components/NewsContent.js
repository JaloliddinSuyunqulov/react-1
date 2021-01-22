import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import NewsBody from "./NewsBody";
import NewsMedia from "./NewsMedia";
import NewsComplains from "./NewsComplains";

class NewsContent extends Component {
    render() {
        return (
            <div className='news-content mt-4'>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <NewsBody/>
                        </Col>
                        <Col xs={4}>
                            <NewsMedia/>
                            <NewsComplains/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NewsContent;