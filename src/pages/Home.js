import React, {Component} from 'react';
import NavigationBar from "../components/NavigationBar";
import HomeHeader from "../components/HomeHeader";
import News from "../components/News";
import HomeCarousel from "../components/HomeCarousel";
import CorporationNews from "../components/CorporationNews";
import Complains from "../components/Complains";
import HomeMedia from "../components/HomeMedia";
import Organisations from "../components/Organisations";
import HomeFooter from "../components/HomeFooter";
class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <HomeHeader/>
                <HomeCarousel/>
                <News/>
                <CorporationNews/>
                <Complains/>
                <HomeMedia/>
                <Organisations/>
                <HomeFooter/>
            </div>
        );
    }
}

export default Home;