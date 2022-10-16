import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import cn from '../../../../dispatcher/node_modules/classnames';
import { wrappHandleChangeFunc } from '../services/helpFuncs';

function AuthPage({ ip = 'http://45.12.6.133:8080/api/signIn', setExecutorId }) {
  const [telephoneNum, setTelephoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [awaiting, setAwaiting] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const navigate = useNavigate();

  const handleSumbit = async (event) => {
    event.preventDefault();
    setAwaiting(true);
    let request = await fetch(ip, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        login: telephoneNum,
        password,
      }),
    })
    if (request.ok) {
      let { executorId } = await request.json();
      setExecutorId(executorId);
      navigate('/myaccount');
    } else {
      setIsAuth(request.ok);
      setAwaiting(false);
    }
  }
  const handleChangeTeleph = wrappHandleChangeFunc(setTelephoneNum);
  const handleChangePass = wrappHandleChangeFunc(setPassword);

  let inputClassName = cn('form-auth__input', {
    'form-auth__input_err': !isAuth,
  })
  return (
    <div className='form-auth'>
      {awaiting ? <p>Awaiting...</p> :
        <form className="form-auth__content">
          <div className='form-pair'>
            <label>Введите ваш номер телефона</label>
            <input autoComplete="off" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleChangeTeleph} value={telephoneNum} className={inputClassName} type="text" name="auth_teleph" placeholder="8 (999) 999-99-99" required />
          </div>
          <div className='form-pair'>
            <label>Введите ваш пароль</label>
            <input autoComplete="off" onChange={handleChangePass} value={password} className={inputClassName} type="password" name="auth_pass" required />
          </div>
          <button onClick={handleSumbit} className="button form-auth__button" type="submit" name="form_auth_submit">Войти</button>
        </form>}
    </div>
  )
}


export { AuthPage }