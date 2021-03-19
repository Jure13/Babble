import React, {useState} from 'react';
import styles from './login.module.css';

import PropTypes from 'prop-types';

/*
export interface LoginProps {
    
}
 
export interface LoginState {
    
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

    }
    render() {
    return(
        <div className="logIn">
            <h1>Please, Log In:</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
  )
}
}

export default Login;*/

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

    return(
      <div className={styles.logIn}>
        <h1 className={styles.please}>Please, Log In:</h1>
        <form onSubmit={handleSubmit}>
          <label className={styles.userInput}>
            <p className={styles.username}>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label className={styles.passInput}>
            <p className={styles.password}>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button className={styles.submit} type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }