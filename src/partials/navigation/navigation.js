import React, { Component } from "react";
import { connect } from "react-redux";

const navigation = (props) => {
    let userInfo = "";
    const { isLogged } = props;
    const user = localStorage.getItem("account");
    
    if (user && isLogged) {
        userInfo = JSON.parse(JSON.parse(user).config.data).username;
    }
    return <div>{ isLogged && <h6>Witaj, {userInfo}</h6> }</div>
}

function mapStateToProps(state) {
    return {
        isLogged: state.loginReducer.isLogged
    };
}
const connectedNavigation = connect(mapStateToProps)(navigation);
export { connectedNavigation as Navigation };
