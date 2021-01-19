import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <div className='home-navbar py-2'>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <Link to='/' className='home-logo'>Dustikdon.uz</Link>
                            <div className="input-group ml-5 rounded">
                                <div className='input-group-prepend'>
                                    <button className='btn bg-white'>
                                        <span className='icon icon-search'/>
                                    </button>
                                </div>
                                <input type="text" className='form-control border-0' placeholder='Saytdan izlash'/>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='dropdown mr-5'>
                                <button type='button' data-toggle='dropdown'>
                                    na russkom
                                </button>
                                <div className='dropdown-menu'>
                                    <Link className='dropdown-item' to='/'>Na Uzbekiskom</Link>
                                    <Link className='dropdown-item' to='/'>Na Angliskom</Link>
                                </div>
                            </div>
                            <Link to='/' className='d-flex align-items-center home-phone text-decoration-none'>
                                <span className='icon icon-phone'/>
                                <div>99872 335-41-16</div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default NavigationBar;