import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationComponent } from "../../components/navigation/navigation";

const navigation = (props) => {
    let userInfo = "";
    const { isLogged } = props;
    const user = sessionStorage.getItem("account");
        
    if (user && isLogged) {
        userInfo = JSON.parse(JSON.parse(user).config.data).username;
    }

    const menus = {
        menuItems: [
            {
                title: "Zamówienia",
                link: "/orders"
            },
            {
                title: "Kontakt",
                link: "/contact"
            },
            {
                title: "Polityka bezpieczeństwa",
                link: "/privacy"
            },
            {
                title: "O nas",
                link: "/about"
            },
            {
                title: "Logowanie",
                link: "/login"
            }
        ]
    };

    return (
        <div>
            <NavigationComponent items={menus.menuItems} />
            {isLogged && <h6>Witaj, {userInfo}</h6>}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLogged: state.loginReducer.isLogged
    };
}
const connectedNavigation = connect(mapStateToProps)(navigation);
export { connectedNavigation as Navigation };
