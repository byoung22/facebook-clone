import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../../services/firebase';
import { actionTypes } from '../../Reducer';
import { useStateValue } from '../../StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
                    alt=""
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/archive/8/89/20200731035726%21Facebook_Logo_%282019%29.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
        </div>
    );
}

export default Login;
