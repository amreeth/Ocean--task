import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";


const Form = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()



  const submitHandler=async(e)=>{
    e.preventDefault()
    try {
      const {data}=await axios.post('http://localhost:4000/api/user',{
        name,phonenumber,email,password
      })

      if(data){
        alert('user added')
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
      <input type='name'
        placeholder='Enter name'
        required
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter the email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type='number'
        placeholder='Enter phonenumber'
        required
        value={phonenumber}
        onChange={(e)=>setPhonenumber(e.target.value)}
        />
        <input type='password'
        placeholder='Enter password'
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
