import React, {Component} from 'react';
import NavigationBar from "../components/NavigationBar";
import HomeHeader from "../components/HomeHeader";
import Complaints from "../components/Complaints";
import HomeFooter from "../components/HomeFooter";
import Organisations from "../components/Organisations";
import NewsCategories from "../components/NewsCategories";

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <HomeHeader/>
                <NewsCategories url={this.props.match.params.url} match={this.props.match}/>
                <Complaints/>
                <Organisations/>
                <HomeFooter/>
            </div>
        );
    }
}


export default CategoryPage;