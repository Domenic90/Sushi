import { useState, useRef } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    setIsLoading(true)
    let url
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQ0zYdmBN1e-MbcTcMwXps9hexzFUjSXg"
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=      AIzaSyBQ0zYdmBN1e-MbcTcMwXps9hexzFUjSXg"
    }
    fetch(url, {
      method: "POST", 
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => {
      setIsLoading(false)
      if (res.ok){
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = "Registrazione fallita, ricontrolla i dati"
          throw new Error(errorMessage)
        })
      }
    })
    .then(data => console.log(data))
    .catch(err => alert(err.message))
  }

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required ref={passwordInputRef} />
          </div>
          <div className={classes.actions}>
          {isLoading ? <p>Loading...</p> : <button>{isLogin ? 'Login' : 'Create Account'}</button>}
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
