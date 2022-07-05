import { useState } from 'react';
import classes from './RegForm.module.css';

const RegForm = () => {
  // const [isLogin, setIsLogin] = useState(true);

  // const switchRegModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  return (
    <>
      <section className={classes.auth}>
        {/* <h1>{isLogin ? 'Login' : 'Sign Up'}</h1> */}
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Ripeti Password</label>
            <input type='password' id='password' required />
          </div>
          <div className={classes.actions}>
            <button>Registrati
            {/* {isLogin ? 'Login' : 'Create Account'} */}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RegForm;
