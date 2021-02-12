import HomeCard from "../components/HomeCard";
import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Slider from 'react-slick';
class News extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            padding: "60px",
        };
        return (
            <div>
                <Container className='mt-5 home-news'>
                    <h3>{this.props.title}</h3>
                    <Row>
                        <Col className='p-0'>
                            <Slider {...settings}>
                                <div className='my-3'><HomeCard
                                    img='/images/Rectangle 11.png'
                                    title="E'LON2 !!!"
                                    content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                                /></div>
                                <div className='my-3'><HomeCard
                                    img='/images/Rectangle 11.png'
                                    title="E'LON !!!"
                                    content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                                /></div>
                                <div className='my-3'><HomeCard
                                    img='/images/Rectangle 11.png'
                                    title="E'LON !!!"
                                    content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                                /></div>
                                <div className='my-3'><HomeCard
                                    img='/images/Rectangle 11.png'
                                    title="E'LON !!!"
                                    content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                                /></div>
                                <div className='my-3'><HomeCard
                                    img='/images/Rectangle 11.png'
                                    title="E'LON !!!"
                                    content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                                /></div>
                                <div className='my-3'><HomeCard
                                    img='/images/Rectangle 11.png'
                                    title="E'LON !!!"
                                    content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                                /></div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default News;