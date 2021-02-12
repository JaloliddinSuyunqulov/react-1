import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import NewsBody from "./NewsBody";
import NewsMedia from "./NewsMedia";
import NewsComplains from "./NewsComplains";
import {connect} from "react-redux";
import {getOneNews} from "../redux/actions/adminNewsAction";

class NewsContent extends Component {

    componentDidMount() {
        this.props.getOneNews(this.props.match.params.newsUrl);
    }

    render() {
        return (
            <div className='news-content mt-4'>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <NewsBody item={this.props.oneNews}/>
                        </Col>
                        <Col xs={4}>
                            <NewsMedia/>
                            <NewsComplains/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        oneNews: state.news.oneNews
    }
};

export default connect(mapStateToProps, {getOneNews})(NewsContent);