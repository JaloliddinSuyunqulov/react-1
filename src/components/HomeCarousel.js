import React, {Component} from 'react';
import Slider from "react-slick";
class CustomSlide extends Component {
    render() {
        return (
            <div className='home-carousel-item w-100'>
                <img src={`${this.props.img1}`} alt="Error" className='w-100'/>
                <div className='carousel-layer text-center d-flex flex-column align-items-center justify-content-around'>
                    <img src={`${this.props.img2}`} alt="Error" className=''/>
                    <h3 className='text-white mb-sm-3'>O`ZBEKISTON RESPUBLIKASI <br/> "O`ZDONMAXSULOT" AKSIYADORLIK KOMPANIYASI <br/>
                        "DO`STLIKDONMAXSULOTLARI" AKSIYADORLIK JAMIYATI
                    </h3>
                </div>
            </div>
        );
    }
}
export default class HomeCarousel extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className='home-carousel'>
                <Slider {...settings}>
                    <CustomSlide img1='images/Rectangle 4.png' img2='images/image 8.png'/>
                    <CustomSlide img1='images/Rectangle 4.png' img2='images/image 8.png'/>
                    <CustomSlide img1='images/Rectangle 4.png' img2='images/image 8.png'/>
                </Slider>
            </div>
        );
    }
}