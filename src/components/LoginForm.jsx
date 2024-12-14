import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../middleware/api';
const LoginForm = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email: '',
        password: ''
    });

    const [loading,setLoading] = useState(false);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

    await api.post('/api/auth/login', user).then((res) => {
        setLoading(false);
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/events');
    }).catch((err) => {
        console.log(err);
        setLoading(false);
    });
    };

  return (
    <div className='p-10 rounded-lg shadow-lg flex flex-col gap-4 w-[35rem] bg-white'>
        <h1 className='text-2xl font-bold text-red-700 text-center'>Login to your account</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input className='border-2 border-black rounded-lg p-2' type="text" placeholder='Email' name='email' value={user.email} onChange={handleChange} required/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password</label>
                <input className='border-2 border-black rounded-lg p-2' type="password" placeholder='Password' name='password' value={user.password} onChange={handleChange} required/>
            </div>

            <button className='bg-red-700 text-white p-2 rounded-lg' type='submit' disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
        </form>
        <p className='text-center'>Don't have an account? <Link to="/signup" className='text-red-700'>Create an account</Link></p>
    </div>
  )
}

export default LoginForm
