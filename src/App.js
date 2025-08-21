import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LoginPage } from "./pages/login/login";
import { Navigation } from "./partials/navigation/navigation";
import PropTypes from "prop-types";
import {Row, Col, Container } from "react-bootstrap"

import { OrdersPage } from "./pages/orders/orders";
import { OrderPage } from "./pages/orders/order";
import { LogoutPage } from "./pages/login/logout";
import { PrivacyPage } from "./pages/privacy/privacy";
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { NotFoundPage } from "./pages/notFound/notFound"
import "./assets/_all.scss";

class App extends React.Component {
  render() {
    const { message, type } = this.props;
    return (
      <div className="mt-3">
        <BrowserRouter>
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
            <Routes>
              <Route path="/" element={<OrdersPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/order/:id" element={<OrderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
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

