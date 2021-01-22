import React, {Component} from 'react';
import NewsMediaItem from "./NewsMediaItem";

class NewsMedia extends Component {
    render() {
        return (
            <div className='news-media'>
                <h4>Media</h4>
                <NewsMediaItem
                    title='Foto galareya'
                    header='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi...'
                    border
                />
                <NewsMediaItem
                    title='Foto galareya'
                    header='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi...'
                    border
                />
                <NewsMediaItem
                    title='Video galareya'
                    header='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi...'
                    border
                />
                <NewsMediaItem
                    title='Foto galareya'
                    header='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi...'
                />
            </div>
        );
    }
}

export default NewsMedia;