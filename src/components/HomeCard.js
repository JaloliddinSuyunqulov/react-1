import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {API_PATH} from "../tools/constants";

class HomeCard extends Component {
    render() {
        return (
            <div className='home-card'>
                <div className="card">
                    <div className="card-image">
                        <img src={API_PATH + "file/get/" + this.props.img} className="w-100" alt="Error"/>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center icon-info">
                            <div><span className="icon icon-date mr-2"/>{this.props.createdAt}</div>
                            {/*<div><span className="icon icon-date mr-2"/>{this.props.createdAt.substring(0, this.props.createdAt.length - 3)}</div>*/}
                            <div><span className="icon icon-eye mr-2"/>{this.props.count}</div>
                            <div><span className="icon icon-chat mr-2"/>100</div>
                        </div>
                        <div className="font-weight-bold mt-3">{this.props.title}</div>
                        <p className="mt-3">{this.props.content}</p>
                        <Link to={'/category/' + this.props.url + '/news/' + this.props.newsUrl} className="btn btn-outline-success text-decoration-none">Batafsil</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCard;