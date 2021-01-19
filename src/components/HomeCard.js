import React, {Component} from 'react';

class HomeCard extends Component {
    render() {
        return (
            <div className='home-card'>
                <div className="card">
                    <div className="card-image">
                        <img src={`${this.props.img}`} className="w-100" alt="Error"/>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center icon-info">
                            <div><span className="icon icon-date mr-2"/>16:48 / 12.11.20</div>
                            <div><span className="icon icon-eye mr-2"/>321</div>
                            <div><span className="icon icon-chat mr-2"/>100</div>
                        </div>
                        <div className="font-weight-bold mt-3">{this.props.title}</div>
                        <p className="mt-3">{this.props.content}</p>
                        <button type="button" className="btn btn-outline-success">Batafsil</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard;