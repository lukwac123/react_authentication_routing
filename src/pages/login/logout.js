import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loginActions.logout());
        navigate("/login");
    }, [dispatch, navigate]);

    return <div>Wylogowywanie...</div>;
};

export default LogoutPage;

