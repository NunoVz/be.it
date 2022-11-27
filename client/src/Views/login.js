import React from 'react';


import "./css/login.css";




const Login = () => {

    return (
        <div className='body'>
            <section id='login'>
                <h1>LOG IN</h1>
                <div className='toggle-container'>
                    <div className='toggleOption login-toggle'>Login</div>
                    <a className='toggleOption register-toggle' href='./register'>Register</a>
                </div>
                <div className='container-round-text'>
                    <form className='form1'>
                        <div>Email</div>
                        <input type="text" id="email" name="email"></input><br/>
                        <div>Password</div>
                        <input type="password" id="password" name="password"></input>
                        <a className='logIn-button' href='./store'>logIn</a>
                    </form>
                </div>
            </section>
        </div>

    );
}



export default Login;