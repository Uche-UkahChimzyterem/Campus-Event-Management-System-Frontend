import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import api from '../middleware/api';

const SignUpForm = () => {
    const navigate = useNavigate();
    const options = [
        { value: 'Workshop', label: 'Workshop' },
        { value: 'Seminar', label: 'Seminar' },
        { value: 'Club activites', label: 'Club activites' }
      ]

      const handlePreferencesChange = (selectedOptions) => {
        // Map selected options to their values
        const preferences = selectedOptions.map(option => option.value);
        setUserDetails({ ...userDetails, eventPreferences: preferences });
    };

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        eventPreferences: []
    });
    const [loading,setLoading] = useState(false);



    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        if(userDetails.password !== userDetails.confirmPassword){
            setLoading(false);
            alert("Passwords do not match");
            return;
        }
        const user = {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            role: "user",
            preferences: userDetails.eventPreferences
        }   

        await api.post('/api/auth/register', user).then((res) => {
            setLoading(false);
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/events');
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    };
  return (
    <div className='p-10 rounded-lg shadow-lg flex flex-col gap-4 w-[35rem] bg-white'>
    <h1 className='text-2xl font-bold text-red-700 text-center'>Create an account</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input className='border-2 border-black rounded-lg p-2' type="text" placeholder='Email' name='email' value={userDetails.email} onChange={e => setUserDetails({...userDetails, email: e.target.value})} />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input className='border-2 border-black rounded-lg p-2' type="password" placeholder='Password' name='password' value={userDetails.password} onChange={e => setUserDetails({...userDetails, password: e.target.value})}/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="password">Confirm Password</label>
            <input className='border-2 border-black rounded-lg p-2' type="password" placeholder='Password' name='confirmPassword' value={userDetails.confirmPassword} onChange={e => setUserDetails({...userDetails, confirmPassword: e.target.value})}/>
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="password">Preferences</label>
            <Select isMulti options={options} onChange={handlePreferencesChange} className='border-2 border-black rounded-lg' type="text" placeholder='Select your preferences'/>
        </div>

        <button className='bg-red-700 text-white p-2 rounded-lg' type='submit' disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>
    </form>
    <p className='text-center'>Already have an account? <Link to="/login" className='text-red-700'>Login</Link></p>
</div>
  )
}

export default SignUpForm
