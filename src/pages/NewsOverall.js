import React, {Component} from 'react';
import NavigationBar from "../components/NavigationBar";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import NewsContent from "../components/NewsContent";
import News from "../components/News";

class NewsOverall extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <HomeHeader/>
                <NewsContent match={this.props.match}/>
                <News title="So'ngi yangililar"/>
                <HomeFooter/>
            </div>
        );
    }
}

export default NewsOverall;