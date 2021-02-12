import React, {Component} from 'react';
import AdminLayout from "./AdminLayout";
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {addNews, deleteNews, getNews, saveFile, updateState} from "../redux/actions/adminNewsAction";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {API_PATH} from "../tools/constants";
import {getSubMenus} from "../redux/actions/adminMenusAction";

class AdminNews extends Component {

    componentDidMount() {
        this.props.getSubMenus();
        this.props.getNews();
    }

    render() {
        const changeModal = () => {
            this.props.updateState({modalOpen: !this.props.modalOpen})
        };

        const savePhoto = (e) => {
            console.log(e.target.files[0]);
            this.props.saveFile(e.target.files[0]);
        };

        const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        const changeUrl = (e) => {
            this.props.updateState({generatedUrl: generateUrl(e.target.value)});
        };

        const saveNews = (event, values) => {
            this.props.addNews({...values, photo: this.props.selectedImage})
        };

        const editNews = (data) => {
            this.props.updateState({selectedNews: data, selectedImage: data.photo.id});
            changeModal();
        };

        const changeDeleteModal = () => {
            this.props.updateState({deleteModalOpen: !this.props.deleteModalOpen})
        };

        const deleteItem = (data) => {
            this.props.updateState({selectedIdForDelete: data.id});
            changeDeleteModal()
        };

        return (
            <AdminLayout>
                <div className='admin-news'>
                    <div className='d-flex justify-content-between'>
                        <h4>News</h4>
                        <Button type='button' color='success' onClick={changeModal}>Qo'shish</Button>
                    </div>

                    <table className='table table-hover table-striped mt-4 table-bordered'>
                        <thead>
                            <tr>
                                <th>Title (uz)</th>
                                <th>Description (uz)</th>
                                <th>Url</th>
                                <th>Menu</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.news.map((item) => (
                            <tr>
                                <td>{item.titleUz}</td>
                                <td>{item.descriptionUz}</td>
                                <td>{item.url}</td>
                                <td>{item.menu.nameUz}</td>
                                <td>
                                    <Button type='button' color='primary' className='mr-2' onClick={() => editNews(item)}>E</Button>
                                    <Button type='button' color='danger' onClick={() => deleteItem(item)}>D</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <Modal isOpen={this.props.modalOpen} toggle={() => {this.props.updateState({selectedImage: "", selectedNews: {}}); changeModal()}}>
                        <AvForm onValidSubmit={saveNews} model={this.props.selectedNews}>
                            <ModalBody>
                                {this.props.selectedNews.id ?
                                    <AvField name='id' value={this.props.selectedNews.id} className='d-none'/>
                                    : ""
                                }
                                <AvField
                                    name='titleUz'
                                    type='text'
                                    label='News title (uz)'
                                    onChange={changeUrl}
                                    required
                                />
                                <AvField
                                    name='titleRu'
                                    type='text'
                                    label='News title (ru)'
                                    required
                                />
                                <AvField
                                    name='titleEn'
                                    type='text'
                                    label='News title (en)'
                                    required
                                />

                                <AvField
                                    name='descriptionUz'
                                    type='textarea'
                                    label='Description (uz)'
                                    required
                                />
                                <AvField
                                    name='descriptionRu'
                                    type='textarea'
                                    label='Description (ru)'
                                    required
                                />
                                <AvField
                                    name='descriptionEn'
                                    type='textarea'
                                    label='Description (en)'
                                    required
                                />

                                <AvField type='select' name='menu' label='Menu'>
                                    {this.props.subMenus.map((item) => (
                                        <option value={item.id}>{item.nameUz}</option>
                                    ))}
                                </AvField>
                                <AvField name='url' label='Url' value={this.props.generatedUrl}/>
                                <label htmlFor="file">Yangilik uchun rasm</label>
                                <input type="file" className='form-control' id='file' onChange={savePhoto}/>
                                {this.props.selectedImage.length > 0 ?
                                    <div className='position-relative'>
                                        <img src={API_PATH + "file/get/" + this.props.selectedImage} alt="Error" className='w-100 mt-3'/>
                                        <Button type='button' className='close delete-image' onClick={() => this.props.updateState({selectedImage: ""})}>&times;</Button>
                                    </div> : ""
                                }
                            </ModalBody>
                            <ModalFooter>
                                <Button type='submit' color='success'>Add</Button>
                                <Button type='button' onClick={() => {this.props.updateState({selectedImage: "", selectedNews: {}}); changeModal()}}>Cancel</Button>
                            </ModalFooter>
                        </AvForm>
                    </Modal>

                    <Modal isOpen={this.props.deleteModalOpen} toggle={changeDeleteModal}>
                        <ModalBody>
                            <h5>Rostdan ham o'chirmoqchimisiz?</h5>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='button' color='danger' onClick={() => {this.props.deleteNews(this.propsselectedIdForDelete)}}>Ha</Button>
                            <Button type='button' onClick={changeDeleteModal}>Yo'q</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </AdminLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalOpen: state.news.modalOpen,
        selectedImage: state.news.selectedImage,
        generatedUrl: state.news.generatedUrl,
        subMenus: state.news.subMenus,
        news: state.news.news,
        selectedNews: state.news.selectedNews,
        selectedIdForDelete: state.news.selectedIdForDelete,
        deleteModalOpen: state.news.deleteModalOpen
    }
};

export default connect(mapStateToProps, {updateState, saveFile, getSubMenus, addNews, getNews, deleteNews})(AdminNews);