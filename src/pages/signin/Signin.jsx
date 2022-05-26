import Header from '../../components/header/Header';
import '../signin/signin.scss';
import SocialButton from '../../components/socialButton/SocialButton';
import { Link } from 'react-router-dom';
import google from '../../images/GoogleIcon.svg';
import FieldB from '../../components/formfield/FieldB';
import Button from '../../components/button/Button';
import { useForm } from "react-hook-form";
import errorIcon from '../../images/errorIcon.svg';
import { useState } from 'react';
import BottomMessage from '../../components/bottomMessageGroup/BottomMessage';
import PasswordField from '../../components/formfield/PasswordField';

const Signin = () => {


    const [values, setValues] = useState({one: 'email', two: 'password'});
    const [error, setError] = useState('');
    const [showIcon, setShowIcon] = useState(<img src={errorIcon} alt='Error icon'/>)

    const handleIcon = () => {
        setShowIcon(!showIcon)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const handleError = () => {
        setError(error)
    }
    const validator = () => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        if ((values.one) === '' && (values.two) === '') {
            return (
                {
                    field_one: <div><p>Email cannot be empty</p></div>,
                    field_two: <div><p>Password cannot be empty</p></div>
                }
            )
        }
        if ((values.one).match(emailPattern) && (values.two).match(passwordPattern)) {
            return (
                {
                    field_one: '',
                    field_two: ''
                }
            )
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        validator();
    } 
   
    return (
        <div className='signincontainer'>
            <main className='main'>
                <Header 
                    text='Welcome back!'
                />

                <div className="content">
                    <Link to='https://www.google.com' target='_blank' rel="noopener noreferrer" className='links'>
                        <SocialButton 
                            icon={google}
                            text="Log in with Google"
                            className='socialButton'
                        />
                    </Link>

                    <div className='borderline'>
                        <div className="line line2"></div>
                        <p className='divider'>or</p>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldB 
                            label='Email Address'
                            name='email'
                            type='email'
                            required
                            {...register("email",
                                {
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })
                            }
                        />
                        {errors.email && <p className='emailerror'>Enter a valid email</p>}
                        <div>{}</div>
                      
                       <div className='passwordcontainer'>
                           <label htmlFor="password" className='passwordlabel'>Password</label>
                            <PasswordField 
                                className='passwordwithicon'
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                })}  
                            />
                            <span className='inputicon'>{showIcon}</span>
                        </div>
                        {errors.password && <p className='passworderror'>This is an error message.</p> }
                        
                        <div className='forgot__password'>
                            <Link to='/reset-password' className='link'> 
                                <span className='forgotlink'>Forgot your password?</span>
                            </Link>
                        </div>
                      
                        <Button 
                            text='Log in'
                        />
                    </form>
                
                    <BottomMessage 
                        link='/'
                        text='New to Arise?'
                        span='Create an account'
                    />
                </div>
            </main>
        </div>
    );
};

export default Signin;