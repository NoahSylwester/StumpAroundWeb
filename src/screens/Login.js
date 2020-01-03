import React, {useState} from 'react';

function Login(props) {
    const [textState, setTextState] = useState({
        username: '',
        password: '',
      });

    const signUpButton = (
        <a href='/signUp' style={{ color: '#00B100', textShadowColor: 'black', textShadowRadius: 8, textShadowOffset: { width: 0, height: 0 } }}>
            Sign up
        </a>
    );

    const signInButton = (
      <div onClick={() => signIn(textState.username)}>
        <p style={{ padding: 10, fontSize: 18, color: '#00B100', textShadowColor: 'black', textShadowRadius: 8, textShadowOffset: { width: 0, height: 0 } }}>
          Sign in
        </p>
      </div>
      // <Button title="Sign in" onPress={() => signIn(textState.username)} color="#00B100" />
  );

    const _storeData = async (username) => {
      try {
        await localStorage.setItem('username', username);
      } catch (error) {
        console.log(error);
        // Error saving data
      }
    };

    const signIn = (input) => {
      let username = input;
      if (username !== undefined) {
        username = "Bigfoot"
      }
      _storeData(username);
      window.location='/main'
    }

    return (
        <div>
            <img source='./public/logo192.png' alt='logo' />
            <p>
                StumpAround
            </p>
            <form>
                <label for="emailAddress">Email address</label>
                <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" />
                <label for="enterPassword">Password</label>
                <input type="password" class="form-control" id="enterPassword" placeholder="Password" />
                <button type="submit" class="btn btn-primary">Submit</button>
                <p>
                    Don't have an account?
                    <button type="signUp" class="btn btn-secondary">Sign Up</button>
                </p>
            </form>
        </div>
    );
}

export default Login;