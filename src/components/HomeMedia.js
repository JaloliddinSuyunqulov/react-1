import React, {useState} from 'react';
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import HomeMiniCard from "./HomeMiniCard";
import classNames from 'classnames';

const HomeMedia = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className='home-media mt-5'>
            <Container>
                <h3>Media</h3>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classNames({active: activeTab === '1'})}
                            onClick={() => {toggle('1');}}
                        >
                            Barchasi
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classNames({active: activeTab === '2'})}
                            onClick={() => {toggle('2');}}
                        >
                            Foto galareya
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classNames({active: activeTab === '3'})}
                            onClick={() => {toggle('3');}}
                        >
                            Video galareya
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId='1'>
                        <Row className='mt-5'>
                            <Col sm={4}><HomeMiniCard
                                        img='images/Rectangle 26.png'
                                        title='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi'
                                    /></Col>
                            <Col sm={4}><HomeMiniCard
                                        img='images/Rectangle 26.png'
                                        title='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi'
                                        type='icon icon-photo'
                                    /></Col>
                            <Col sm={4}><HomeMiniCard
                                        img='images/Rectangle 27.png'
                                        title='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi'
                                        type='icon icon-video'
                                    /></Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='2'>
                        <Row className='mt-5'>
                            <Col sm={4}><HomeMiniCard
                                img='images/Rectangle 26.png'
                                title='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi'
                                type='icon icon-photo'
                            /></Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='3'>
                        <Row className='mt-5'>
                            <Col sm={4}><HomeMiniCard
                                img='images/Rectangle 27.png'
                                title='"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi'
                                type='icon icon-video'
                            /></Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Container>
        </div>
    );
};

export default HomeMedia;