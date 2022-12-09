import InputUseForm from '../common/InputUseForm'
import images from '../../assets/images';
import { useForm } from 'react-hook-form';
import './Register.scss'
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { createUser } from '../../sevices/axios/usersServices';
import { useState } from 'react';
import style from '../common/InputUseForm/style';

function Register() {
  const navigate = useNavigate()
  const [checkConfirm, setCheckConfirm] = useState(false)

  const validation = yup.object({
    name: yup.string().required("you must enter full name"),
    password: yup.string().required("you must enter password").min(6).max(50),
    email: yup.string().required("you must enter email").email()
  })

  const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validation),
    mode: "onBlur",
  });

  const onSubmit = (data) =>{
    if (!checkConfirm) {
      createUser(data)
      .then(res =>{
        localStorage.setItem("avatar", res.data.avatar)
        localStorage.setItem("name", res.data.name)
        localStorage.setItem("id", res.data.id)
        navigate("/sign-in")
      })
    } else {
      alert("Passwords do not match")
    }
  }

  const handleConfirmPassword = (e) => {
    if(e.target.value === watch('password')) {
      setCheckConfirm(false)
    } else {
      setCheckConfirm(true)
    }
  }

  return(
    <div className='register'>
      <img className='banner' src={images.done} alt='banner' />
      <h3>Get's things done<br />with TODO</h3>
      <p>Let's help you meet up your tasks</p>
      <Form onFinish={handleSubmit(onSubmit)} style={{ boxSizing: "border-box", padding: "0 20px 0 30px"}}>
        <InputUseForm
          name='name'
          placeholder="Enter your full name"
          control={control}
          error={errors.name}
        />
        <InputUseForm
          placeholder="Enter your email"
          name='email'
          control={control}
          error={errors.email}
        />
        <InputUseForm
          placeholder="Enter password"
          name='password'
          type="password"
          control={control}
          error={errors.password}
        />
        <Input
          placeholder="Confirm password"
          type="password"
          status={checkConfirm ? "error" : ""}
          onBlur={(e) => handleConfirmPassword(e)}
          style={style.input}
        />
        <button type="submit" className='button'>
          Register
        </button>
      </Form>
      <div className='question'>
        Already have an account ?
        <span onClick={()=> navigate('/sign-in')}>
          {` `}Sign In
        </span>
      </div>
    </div>
  )
}

export default Register;