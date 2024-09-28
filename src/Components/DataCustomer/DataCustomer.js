import React, { useState, useContext,useEffect } from 'react';
import '../Header/Header.css';
import './DataCustomer.css';
import { useLocation } from 'react-router-dom';
import { getDocs,collection,addDoc,deleteDoc,doc,updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import { useSchema } from './Validation/Validation.js';
import { useNavigate } from 'react-router-dom';
import { CounterContext } from '../../App.js';
const DataCustomer = () => {
  const navigate=useNavigate();
  const location=useLocation();
   const invoice=location.state.invoice;
   const orders=location.state.orders;
  const dataCollection=collection(db,"customerData");
    var root = document.querySelector(':root');
    root.style.setProperty('--visibility','hidden');
    root.style.setProperty('--color','#fff');
    root.style.setProperty('--heightImg','250px');
    const[FormData,setFormData]=useState({
      name:"",
      location:"",
      number:"",
      invoice:invoice,
      orders:orders

    });
   
    const[errors,setErrors]=useState({});
    const { count,setCount } = useContext(CounterContext);

 
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await useSchema.validate(FormData, { abortEarly: false }); 
      } catch (error) {
        const newErrors = {};
        error.inner.forEach(err => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }

    if(!errors.name && !errors.location && !errors.number){ 
      await addDoc(dataCollection,{FormData});
      setCount([]);
      navigate('/');
      
    }
       
       
    };


    
    const handleChange=(e)=>{
      const{name,value}=e.target;
      setFormData({...FormData,[name]:value});
    }

  return (

    <div className='container '>
       <h1>Customer Data</h1>
       <form className='form' onSubmit={handleSubmit}>
        <input type='text' className='Name-Input' name='name' placeholder='Name...' value={FormData.name} onChange={handleChange} /><br/>
        {errors.name && <div className='Name-Error'>{errors.name}</div>}
        <input type='text' name='location' placeholder='Location...' value={FormData.location} onChange={handleChange}  /><br/>
        {errors.location && <div className='Location-Error'>{errors.location}</div>}
        <input type='text'  className='Phone-Input' name='number' placeholder='phone number...' value={FormData.number} onChange={handleChange}  /><br/>
        {errors.number && <div className='Number-Error'>{errors.number}</div>}    
        <button>Confirm</button> 
      </form>
    </div>
  )
}

export default DataCustomer
