// import { useState } from 'react';
import '../signup/signup.scss';
import Button from '../../components/button/Button';
import FieldB from '../../components/formfield/FieldB';
import FieldSm from '../../components/formfield/FieldSm';
import SocialButton from '../../components/socialButton/SocialButton';
import google from '../../images/GoogleIcon.svg';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Links from '../../components/pagelink/Links';


const Signup = () => {

   

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='signupcontainer'>
            <main className='main'>
                <Header 
                    text='Get started with Arise'
                />

                <div className="content">
                    <Link to='https://www.google.com' target='_blank' rel="noopener noreferrer" className='links'>
                        <SocialButton 
                            icon={google}
                            text="Sign up with Google"
                            className='socialButton'
                        />
                    </Link>

                    <div className='borderline'>
                        <div className="line"></div>
                        <p className='divider'>or</p>
                        <div className="line"></div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='namefields'>
                            <FieldSm label='First Name' type='text' name='firstname'/>
                            <FieldSm label='Last Name' type='text' name='lastname'/>
                        </div>
                        <FieldB 
                            label='Email Address'
                            name='email'
                        />
                        <FieldB 
                            label='Password'
                            type='password'
                            name='password'
                        />

                        <Button 
                            text='Sign up'
                        />

                    </form>

                  <Links 
                    text='Already have an account?'
                    span='Log in'
                  />
                </div>
                
            </main>
            
        </div>
    );
};

export default Signup;