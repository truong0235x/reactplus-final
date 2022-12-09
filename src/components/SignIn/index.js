import InputUseForm from '../common/InputUseForm'
import images from '../../assets/images';
import { useForm } from 'react-hook-form';
import './SignIn.scss'
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function SignIn() {
  const navigate = useNavigate()

  const validation = yup.object({
    password: yup.string().required("you must enter password").min(6).max(50),
    email: yup.string().required("you must enter email").email()
  })

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(validation),
    mode: "onBlur",
    defaultValues: {
      isGraduate: false
    }
  });

  const onSubmit = (data) =>{
    navigate("/dashboard")
  }

  return(
    <div className='sign-in'>
      <img className='banner' src={images.done} alt='banner' />
      <div className='title'>
        <p>
          Welcome back<br />
          to<br />
          <span>OUR REMINDER</span>
        </p>
      </div>
      <Form onFinish={handleSubmit(onSubmit)} style={{ boxSizing: "border-box", padding: "0 20px 0 30px"}}>
        <InputUseForm
          placeholder="Enter your email"
          name='email'
          control={control}
          error={errors.email}
        />
        <InputUseForm
          placeholder="Enter password"
          type="password"
          name='password'
          control={control}
          error={errors.password}
        />
        <button type='submit' className='button'>
          Sign In
        </button>
      </Form>
      <div className='question'>
        Don't have an account ?
        <span onClick={()=> navigate('/register')}>
          {` `}Sign Up
        </span>
      </div>
    </div>
  )
}

export default SignIn;