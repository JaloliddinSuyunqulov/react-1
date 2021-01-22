import React, {Component} from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/adminNewsAction";

class AdminNews extends Component {
    render() {
        const changeModal = () => {
            this.props.updateState({modalOpen: !this.props.modalOpen})
        };

        return (
            <AdminLayout>
                <div className='admin-news'>
                    <div className='d-flex justify-content-between'>
                        <h4>News</h4>
                        <Button type='button' color='success' onClick={changeModal}>Qo'shish</Button>
                    </div>
                    <Modal isOpen={this.props.modalOpen} toggle={changeModal}>
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </Modal>
                </div>
            </AdminLayout>
        );
    }
}

const mapStateToPropr = (state) => {
    return {
        modalOpen: state.news.modalOpen
    }
};

export default connect(mapStateToPropr, {updateState})(AdminNews);