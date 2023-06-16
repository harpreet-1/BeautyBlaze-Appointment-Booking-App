import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(``,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then((res)=>res.json()).then((data)=>alert(data)).catch((err)=>alert(err))
    setEmail('');
    setPassword('');
  };

  return (
    <form className='SignInform' onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email} placeholder='Enter your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password} placeholder='Enter your Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
