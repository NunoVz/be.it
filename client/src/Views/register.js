import React from 'react';


import "./css/login.css";
import "./css/register.css";




const register = () => {

    return (
        <div className='body'>
            <section id='login'>
                <h1>REGISTER</h1>
                <div className='toggle-container'>
                    <a className='toggleOption login-toggleR' href='./login'>Login</a>
                    <div className='toggleOption register-toggleR'>Register</div>
                </div>
                <div className='container-round-text'>
                    <form className='form1'>
                        <div>Email</div>
                        <label for="text">First name:</label><br></br>
                        <input type="text" id="email" name="email"></input><br />
                        <div>Password</div>
                        <input type="password" id="password" name="password"></input>
                        <a className='logIn-button' href='./store'>Register</a>
                    </form>
                </div>
            </section>
        </div>
    );
}



export default register;