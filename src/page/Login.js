import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const userLogin = (e) => {
        e.preventDefault();
        setAuthenticate(true)
        navigate('/')
    }
  return (
    <div className='login-form'>
        <div className="login">
            <div className="header">Login</div>
            {/* form 안에 submit타입의 button이 있다면 onClick이벤트가 아니라 onSubmit이벤트를 줘야한다. */}
            <form className="form" onSubmit={(e)=>userLogin(e)}>
                <div className='wrap'>
                    <div>
                        <p>ID</p>
                        <input id="username" type="text" name="username" required="" placeholder="Enter your ID"/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input id="password" type="password" name="password" required="" placeholder="Enter your password"/>
                    </div>
                </div>
                <button type='submit' className='login-form-btn'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login