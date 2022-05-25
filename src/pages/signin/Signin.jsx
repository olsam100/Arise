import Header from '../../components/header/Header';
import '../signin/signin.scss';
import SocialButton from '../../components/socialButton/SocialButton';
import { Link } from 'react-router-dom';
import google from '../../images/GoogleIcon.svg';
import FieldB from '../../components/formfield/FieldB';
import Button from '../../components/button/Button';
import { useForm } from "react-hook-form";
import err from '../../images/errorIcon.svg'
import { useState } from 'react';

const Signin = () => {

    const [icon, setIcon] = useState(!err)

    const errIcon = () => {
        setIcon(err)
    }
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
                            required
                            {...register("email",
                                {
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })
                            }
                        />
                        {errors.email && <p className='emailerror'>Enter a valid email</p>}
                        
                      
                       
                        <FieldB 
                            label='Password'
                            type='password'
                            name='password'
                            required
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                            })}  
                        />
                        <span>{icon}</span>
                        {errors.password && <p className='passworderror'>This is an error message.</p> }
                        
                        <div className='forgot__password'>
                            <Link to='/forgot-password' className='link'> 
                                <span>Forgot your password?</span>
                            </Link>
                        </div>
                      
                        <Button 
                            text='Log in'
                            onClick={errors.password && errIcon}
                        />
                    </form>
                
                    <div className='pageLink'>
                    <Link to='/' className='nav'>
                        <h4 className='signinlink'>New to Arise?</h4><span className='span'>Create an account</span>
                    </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Signin;