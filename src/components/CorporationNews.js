import React, {Component} from 'react';
import Slider from "react-slick/lib";
import HomeCard from "./HomeCard";
import {Container} from "reactstrap";

class CorporationNews extends Component {
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
                    <h3>Korxonamiz yangiliklari</h3>
                    <Slider {...settings}>
                        <div className='mt-3'><HomeCard
                            img='images/Rectangle 11.png'
                            title="E'LON !!!"
                            content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                        /></div>
                        <div className='mt-3'><HomeCard
                            img='images/Rectangle 11.png'
                            title="E'LON !!!"
                            content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                        /></div>
                        <div className='mt-3'><HomeCard
                            img='images/Rectangle 11.png'
                            title="E'LON !!!"
                            content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                        /></div>
                        <div className='mt-3'><HomeCard
                            img='images/Rectangle 11.png'
                            title="E'LON !!!"
                            content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                        /></div>
                        <div className='mt-3'><HomeCard
                            img='images/Rectangle 11.png'
                            title="E'LON !!!"
                            content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                        /></div>
                        <div className='mt-3'><HomeCard
                            img='images/Rectangle 11.png'
                            title="E'LON !!!"
                            content='"DO`STLIKDON MAXSULOTLARI" AJ ning aksiyadorlari diqqatiga! 2020-yil 27-mart kun soat 9:00 dan...'
                        /></div>
                    </Slider>
                </Container>
            </div>
        );
    }
}

export default CorporationNews;