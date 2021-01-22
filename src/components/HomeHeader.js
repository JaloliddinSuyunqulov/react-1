import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

class HomeHeader extends Component {
    render() {
        return (
            <div className='home-header bg-white'>
                <Container className='h-100'>
                    <div className='d-flex align-items-center h-100'>
                        <Link to='/' className='home-logo'><span className='icon icon-home'/></Link>
                        <div className='d-flex h-100'>
                            <Link to='/news' className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                Jamiyat haqida
                                <div className='home-header-sub-menus'>
                                    <div className='sub-menu-item'>Korxona yangiliklari</div>
                                    <div className='sub-menu-item'>Tadbirlar</div>
                                    <div className='sub-menu-item'>Mamlakat xabarlari</div>
                                    <div className='sub-menu-item'>Axborot</div>
                                </div>
                            </Link>
                            <Link to='/news' className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                Struktura
                                <div className='home-header-sub-menus'>
                                    <div className='sub-menu-item'>Korxona yangiliklari</div>
                                    <div className='sub-menu-item'>Tadbirlar</div>
                                    <div className='sub-menu-item'>Mamlakat xabarlari</div>
                                    <div className='sub-menu-item'>Axborot</div>
                                </div>
                            </Link>
                            <Link to='/news' className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                Yangiliklar
                                <div className='home-header-sub-menus'>
                                    <div className='sub-menu-item'>Korxona yangiliklari</div>
                                    <div className='sub-menu-item'>Tadbirlar</div>
                                    <div className='sub-menu-item'>Mamlakat xabarlari</div>
                                    <div className='sub-menu-item'>Axborot</div>
                                </div>
                            </Link>
                            <Link to='/news' className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                Elektron murojaatlar
                                <div className='home-header-sub-menus'>
                                    <div className='sub-menu-item'>Korxona yangiliklari</div>
                                    <div className='sub-menu-item'>Tadbirlar</div>
                                    <div className='sub-menu-item'>Mamlakat xabarlari</div>
                                    <div className='sub-menu-item'>Axborot</div>
                                </div>
                            </Link>
                            <Link to='/news' className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                Interaktiv xizmatlar
                                <div className='home-header-sub-menus'>
                                    <div className='sub-menu-item'>Korxona yangiliklari</div>
                                    <div className='sub-menu-item'>Tadbirlar</div>
                                    <div className='sub-menu-item'>Mamlakat xabarlari</div>
                                    <div className='sub-menu-item'>Axborot</div>
                                </div>
                            </Link>
                            <Link to='/news' className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                Aloqa
                                <div className='home-header-sub-menus'>
                                    <div className='sub-menu-item'>Korxona yangiliklari</div>
                                    <div className='sub-menu-item'>Tadbirlar</div>
                                    <div className='sub-menu-item'>Mamlakat xabarlari</div>
                                    <div className='sub-menu-item'>Axborot</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default HomeHeader;