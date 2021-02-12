import React, {Component} from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions/authAction';
class Login extends Component {
    render() {
        const login = (event, values) => {
            this.props.loginUser(values, this.props.history);
        };

        return (
            <div>
                <Container>
                    <Row className='vh-100 align-items-center'>
                        <Col sm='4' className='offset-sm-4'>
                            <Card>
                                <CardBody>
                                    <AvForm onValidSubmit={login}>
                                        <AvField
                                            name='phoneNumber'
                                            placeholder='Phone Number'
                                            type='text'
                                            required
                                        />
                                        <AvField
                                            name='password'
                                            placeholder='Password'
                                            type='password'
                                            required
                                        />
                                        <Button type='submit' disabled={this.props.isLoading} color='success' className='btn-block'>
                                            {this.props.isLoading ? <span className='spinner-border spinner-border-sm'/> : ""}
                                            Login
                                        </Button>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        isLoading: state.login.isLoading,
    }
};

export default connect(mapStateToProps, {loginUser})(Login);