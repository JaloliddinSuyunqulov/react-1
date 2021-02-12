import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {TOKEN_NAME} from "../tools/constants";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";

class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    render() {
        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen})
        };
        return (
            <div className='admin-layout'>
                <div className='admin-navbar'>

                </div>
                <div className='admin-content d-flex'>
                    <div className='admin-content-left'>
                        <div className='d-flex align-items-center'>
                            <div className="user-image">
                                <span className='icon icon-user'/>
                            </div>
                            <div>
                                <h5 className='mb-0'>Suyunqulov Jaloliddin</h5>
                                <Link to='/' className='mb-0'>Administrator</Link>
                            </div>
                        </div>
                        <ul className='nav flex-column mt-4'>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin/news">Yangiliklar</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin/menus">Menyular</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Biz haqimizda</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Sport</Link></li>
                            <li className='nav-item'><Link className='nav-link text-white' to="/admin">Foydalanuvchilar</Link></li>
                            <li className='nav-item'><span className='nav-link text-white mt-4' onClick={changeModal}>Chiqish</span></li>
                        </ul>
                        <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                            <ModalBody>
                                <h5>Rostdan ham chiqmoqchimisiz?</h5>
                            </ModalBody>
                            <ModalFooter>
                                <Button type='button' color='success' onClick={() => {localStorage.removeItem(TOKEN_NAME); changeModal()}}>Yo'q</Button>
                                <Link type='button' className='btn btn-danger' to='/'>Ha</Link>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div className='admin-content-right'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;