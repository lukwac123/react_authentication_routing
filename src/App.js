import React from "react";
import { connect } from "react-redux";
import { LoginPage } from "./pages/login/login";
import { Navigation } from "./partials/navigation/navigation";
import PropTypes from "prop-types";
import {Row, Col, Container } from "react-bootstrap"

class App extends React.Component {
  render() {
    const { message, type } = this.props;
    return (
      <div className="mt-3">
        <Container>
          <Row>
            <Col md={12}>
              <Navigation />
              <div>
                {message !== undefined && (
                  <div role="alert" className={`message ${type}`}>{message}</div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <LoginPage />
      </div>
    );
  }
  static propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string,
  type: PropTypes.string
  };
}

function mapStateToProps(state) {
  return {
    message: state.messageBagReducer.message,
    type: state.messageBagReducer.type
  };
}

export default connect(mapStateToProps, null)(App);

