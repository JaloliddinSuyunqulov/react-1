import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

class HomeHeader extends Component {
    render() {
        return (
            <div className='home-header py-2 bg-white'>
                <Container>
                    <div className='d-flex align-items-center'>
                        <Link to='/' className='home-logo'><span className='icon icon-home'/></Link>
                        <div className='d-flex'>
                            <div className='mx-4'>Jamiyat haqida</div>
                            <div className='mx-4'>Struktura</div>
                            <div className='mx-4'>Yangiliklar</div>
                            <div className='mx-4'>Elektron murojaatlar</div>
                            <div className='mx-4'>Interaktiv xizmatlar</div>
                            <div className='mx-4'>Aloqa</div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default HomeHeader;