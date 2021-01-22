import React, {Component} from 'react';

class NewsMediaItem extends Component {
    render() {
        return (
            <div className={`news-media-item ${this.props.border ? 'border-bottom pb-4' : ''}`}>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <div className='news-date'><span className='icon icon-date mr-2'/>16:48 / 12.11.20</div>
                    <div className='news-media-title'>{this.props.title}</div>
                </div>
                <div className='mt-2'>{this.props.header}</div>
            </div>
        );
    }
}

export default NewsMediaItem;