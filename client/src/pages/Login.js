import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData;  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState , [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt /> Sign In</h1>
        <p>Login and set some goals!</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Enter your username' id='username' name='username' value={username} onChange={onChange} />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' placeholder='Enter password' id='password' name='password' value={password} onChange={onChange} />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login