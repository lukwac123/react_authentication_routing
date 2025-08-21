import React from "react";
import NavigationItem from "../../components/navigation/navigationItem";
import PropTypes from "prop-types";

const Navigation = props => {
    let items = [];

    if (props.items !== undefined) {
        items = props.items.map((item, key) => (
            <NavigationItem key={key} item={item} />
        ));
    }
    return (
        <nav className="navigation">
            <ul className="navigation__elements">{ items }</ul>
        </nav>
    );
};

Navigation.propTypes = {
    items: PropTypes.array
};

export { Navigation as NavigationComponent };
