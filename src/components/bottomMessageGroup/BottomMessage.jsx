import { Link } from 'react-router-dom';
import '../../pages/signup/signup.scss'

const BottomMessage = ({link, text, span}) => {
    return (
        <div className='pageLink'>
            <Link to={link} className='nav'>
                    <h4 className='signinlink'>{text}</h4> <span className='span'>{span}</span>
            </Link>
        </div>
    );
};

export default BottomMessage;