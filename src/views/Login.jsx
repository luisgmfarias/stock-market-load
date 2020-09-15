import React, { useState } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const userArray = {
        userList:[],
        passwordList:[]
    };

    function validateLogin() {
        return user.length > 0 && password.length > 0;
    }

    function verify(text,pass) {
        console.log(userArray.userList[0])
        return userArray.userList.includes(text) && userArray.passwordList.includes(pass);
    }

    const handleLogin = (user, password) => {
        console.log(userArray);
        verify(user,password) ? console.log('foi') : console.log('nao foi');
    }

    const handleRegister = (user, password) => {
        if (!verify(user)) {
            userArray.userList.push(user);
            userArray.passwordList.push(password);
        } else { console.log('nao foi')}
    }


    return (
        <div className="login-container">
            <h1>OVERSTOCKS</h1>
            <div>
                <input placeholder='Usuario' value={user} onChange={() => setUser(user)} />
                <input placeholder='Senha' type={'password'} value={password} onChange={() => setPassword(password)} />
                <a text={'Entrar'} className="button" onClick={handleLogin}> Entrar</a>
                <a text={'Registrar'} className='button registration'  onClick={handleRegister} > Registrar</a>
            </div>
            <a className="github-link" href="http://github.com/luisgmfarias"><img src={require('../assets/github-logo.svg')} alt="..." /></a>

        </div>

    )

}

export default Login;

