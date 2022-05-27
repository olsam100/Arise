import Header from '../../components/header/Header';
import '../signin/signin.scss';
import SocialButton from '../../components/socialButton/SocialButton';
import { Link } from 'react-router-dom';
import google from '../../images/GoogleIcon.svg';
import FieldB from '../../components/formfield/FieldB';
import Button from '../../components/button/Button';
import errorIcon from '../../images/errorIcon.svg';
import { useState } from 'react';
import BottomMessage from '../../components/bottomMessageGroup/BottomMessage';
import PasswordField from '../../components/formfield/PasswordField';

const Signin = () => {


    // const [values, setValues] = useState({email: '', password: ''});
    const [error, setError] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(false);

    // const toggleError = () => {
    //     setToggleIcon(!toggleIcon)
    // }
    const [showIcon, setShowIcon] = useState(<img src={errorIcon} alt='Error icon'/>)

    const handleIcon = () => {
        setShowIcon(!showIcon)
    }



    const handleError = () => {
        setError(!error)
    }
    // const validator = () => {
    //     const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    //     if ((values.email) && (values.password)) {
    //         return (
    //             {
    //                 field_one: <div><p>Email cannot be empty</p></div>,
    //                 field_two: <div><p>Password cannot be empty</p></div>
    //             }
    //         )
    //     }
    //     if ((values.email).test(emailPattern) !== '' && (values.password).test(passwordPattern) !== '') {
    //         return (
    //             {
    //                 field_one: '',
    //                 field_two: ''
    //             }
    //         )
    //     }
    // }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // validator();
        handleError()
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

                    <form onSubmit={handleFormSubmit}>
                        <FieldB 
                            label='Email Address'
                            name='email'
                            type='email'
                            required
                        />
                        {error ? <p className='emailerror'>Enter a valid email</p> : ''}
                        
                      
                       <div className='passwordcontainer'>
                           <label htmlFor="password" className='passwordlabel'>Password</label>
                            <PasswordField 
                                className='passwordwithicon'
                               
                                onChange={toggleIcon}
                            />
                            {error ? <span className='inputicon'>{showIcon}</span> : ''}
                            {error && <p className='passworderror'>This is an error message.</p>}
                        </div>
                        
                        
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