import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AdminLayout extends Component {
    render() {
        return (
            <div className='admin-layout'>
                <div className='admin-navbar'>

                </div>
                <div className='admin-content'>
                    <div className='admin-content-left'>
                        <div className='d-flex align-items-center'>
                            <div className="user-image">
                                <span className='icon icon-user'/>
                            </div>
                            <div>
                                <h5 className='mb-0'>Suyunqulov Jaloliddin</h5>
                                <p className='mb-0'>Administrator</p>
                            </div>
                        </div>
                        <ul className='nav flex-column mt-4'>
                            <li className='nav-item'><Link className='nav-link' to="/admin">Yangiliklar</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/admin">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/admin">Biz haqimizda</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/admin">Sport</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/admin">Foydalanuvchilar</Link></li>
                        </ul>
                    </div>
                    <div className='admin-content-right'>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;