import '../signup/signup.scss'
import '../passwordreset/resetpassword.scss'
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import BottomMessage from '../../components/bottomMessageGroup/BottomMessage';
import logo from '../../images/Arise_logo.svg'

const ResetPassword = () => {
    return (
        <div className='resetcontainer'>
            <div className="content">
                <div className='top'>
                    <img src={logo} alt="Arise logo" />
                    <h1 className='getStarted'>Reset your password</h1>
                    <Card />
                </div>
                <div className='emailcontainer'>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email"  
                        className='emailfield'
                    />
                </div>
            
                <Button 
                    text='Reset password'
                />
                <BottomMessage 
                            link='/signin'
                            text='Just remembered your password?'
                            span='Sign in'
                />
            </div>
        </div>
    );
};

export default ResetPassword;