import React from "react";
import { connect } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";

class LoginPage extends React {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userNameError: false,
            passwordError: false
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { username, password } = this.state;
        if (!username) {
            this.setState({ userNameError: true });
        }
        if (!password) {
            this.setState({ passwordError: true});
        }
        if (username && password) {
            await this.props.dispatch(loginActions.login(username, password));
        }
    };

    render() {
        const { loginPending, isLogged } = this.state;
        const { username, password, userNameError, passwordError} = this.state;

        return (
            <Container>
                <Row>
                    <Col md={{ offset: 4, span: 4 }}>
                        { isLogged && (
                            <div>
                                <h2>Logowanie</h2>
                                {loginPending && "Logowanie w trakcie..."}
                                {userNameError && (
                                    <div className="small alert alert-danger">Nazwa użytkownika jest wymagana</div>
                                )}
                                {passwordError && (
                                    <div className="small alert alert-danger">Hasło jest wymagane</div>
                                )}
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={"form-group"}>
                                        <label htmlFor="username">Nazwa użytkownika</label>
                                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                    </div>
                                    <div className={"form-group"}>
                                        <label htmlFor="password">Hasło</label>
                                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary">Zaloguj</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
    static propTypes = {
        dispatch: PropTypes.func,
        attrbutesUpdate: PropTypes.func,
        loginPending: PropTypes.bool,
        isLogged: PropTypes.bool
    };
}

function mapStateToProps(state) {
    return {
        loginPending: state.loginReducer.loginPending,
        isLogged: state.loginReducer.isLogged
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }
