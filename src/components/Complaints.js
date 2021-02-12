import React, {Component} from 'react';

class Complaints extends Component {
    render() {
        return (
            <div className='home-complains mt-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <img src="/images/image 18.png" alt="Error"/>
                    <h2>Shikoyatlar mavjudmi? <br/> onlayn tarzda yuboring</h2>
                    <button className='btn btn-outline-success'>Murojaat yuborish</button>
                    <img src="/images/image 17.png" alt="Error"/>
                </div>
            </div>
        );
    }
}

export default Complaints;