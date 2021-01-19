import React, {Component} from 'react';

class HomeMiniCard extends Component {
    render() {
        return (
            <div className='home-mini-card'>
                <div className="card">
                    <div className="card-image">
                        <img src={`${this.props.img}`} className="w-100" alt="Error"/>
                        <div className='position-absolute'><span className={`${this.props.type}`}/></div>
                    </div>
                    <div className="card-body">
                        <div className="font-weight-bold">{this.props.title}</div>
                        <div className="d-flex justify-content-between align-items-center icon-info mt-3">
                            <div><span className="icon icon-date mr-2"/>16:48 / 12.11.20</div>
                            <div><span className="icon icon-eye mr-2"/>321</div>
                            <div><span className="icon icon-chat mr-2"/>100</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeMiniCard;