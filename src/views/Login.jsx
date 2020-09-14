import React from 'react';
import Input from '../components/Input'
import Button from '../components/Button'

function Login() {
    return (
        <div className="login-container">
            <h1>OVERSTOCKS</h1>
            <div>
                <Input placeholder={'Usuario'} />
                <Input placeholder={'Senha'} />
                <Button text={'Entrar'} />
            </div>
            <a className="github-link" href="http://github.com/luisgmfarias"><img src={require('../assets/github-logo.svg')} alt="..." /></a>

        </div>

    )

}

export default Login;

