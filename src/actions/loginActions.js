import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./loginActionsTypes";
import { loginService } from "../services/http/loginService";
import { messageBagActions } from "./messageBagActions";

const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

const loginRequest = user => {
    return {
        type: LOGIN_REQUEST,
        user
    };
};

const login = (username, password) => {
    return async dispatch => {
        dispatch(loginRequest());
        await loginService.login(username, password).then(
            user => {
                localStorage.setItem("account", JSON.stringify(user));
                dispatch(loginSuccess(user));
                dispatch(messageBagActions.success("Zalogowano"));
            },
            error => {
                dispatch(loginFailure(error));
                dispatch(messageBagActions.error("Zły login lub hasło"));
            }
        );
    };
};

const logout = () => {
    loginService.logout();
    return { type: LOGOUT };
}

export const loginActions = {
    login,
    logout
};
