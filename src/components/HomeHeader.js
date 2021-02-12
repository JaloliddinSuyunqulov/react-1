import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getMenus} from "../redux/actions/adminMenusAction";

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideDropdown: false
        }
    }
    componentDidMount() {
        this.props.getMenus();
    }

    render() {
        return (
            <div className='home-header bg-white'>
                <Container className='h-100'>
                    <div className='d-flex align-items-center h-100'>
                        <Link to='/' className='home-logo mr-4'><span className='icon icon-home'/></Link>
                        <div className='d-flex h-100'>
                            {this.props.menus.map((item) => (
                                <div className='mx-4 home-header-menu h-100 d-flex align-items-center'>
                                    {item.nameUz}
                                    {item.submenus.length > 0 ?
                                        <div className={`home-header-sub-menus ${this.state.hideDropdown ? 'hideDropdown' : "home-header-sub-menus"}`}>
                                            {item.submenus.map((item2) => (
                                                <Link to={"/category/" + item2.url} className='sub-menu-item' onClick={() => this.setState({hideDropdown: true})}>{item2.nameUz}</Link>
                                            ))}
                                        </div>
                                        : ""
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menu.menus
    }
};

export default connect(mapStateToProps, {getMenus})(HomeHeader);