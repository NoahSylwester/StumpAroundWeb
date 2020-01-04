import React, { useState } from 'react';

export default function LoginScreen(props) {

    const [textState, setTextState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: '',
    })

    const signUpButton = (
        <div>
            <a href="/Profile" style={{ padding: 10, fontSize: 18, color: '#00B100', textShadowColor: 'black', textShadowRadius: 8, textShadowOffset: { width: 0, height: 0 } }}>
                Sign up
            </a>
        </div>
    )

    return (
        <div>
            <img src='./public/logo512.png' alt='Logo' />
            <p>
                Sign up
            </p>
                    <form>
                        <label for="userName">Username</label>
                        <input type="username" class="form-control" id="userName" aria-describedby="usernameHelp" placeholder="Enter username" />
                        <label for="emailAddress">Email address</label>
                        <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" />
                        <label for="enterPassword">Password</label>
                        <input type="password" class="form-control" id="enterPassword" placeholder="Password" />
                        <label for="confirmPassword">Password</label>
                        <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password" />
                        <button type="submit" class="btn btn-primary">{signUpButton}</button>
                    </form>
        </div >
    );
}