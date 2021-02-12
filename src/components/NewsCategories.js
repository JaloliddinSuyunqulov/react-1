import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Container, Row} from "reactstrap";
import HomeCard from "./HomeCard";
import {getNewsByMenu} from "../redux/actions/adminNewsAction";

class NewsCategories extends Component {
    componentDidMount() {
        this.props.getNewsByMenu(this.props.match.params.url);
    };

    render() {
        return (
            <div className='news-categories mt-4'>
                <Container>
                    <Row>
                        {this.props.newsByMenu.map(item => (
                            <Col xs={4}>
                                <HomeCard
                                    img={item.photo}
                                    newsUrl={item.url}
                                    url={this.props.url}
                                    title={item.titleUz}
                                    content={item.descriptionUz}
                                    createdAt={item.createdAt}
                                    count={item.viewCount}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        newsByMenu: state.news.newsByMenu
    }
};

export default connect(mapStateToProps, {getNewsByMenu})(NewsCategories);