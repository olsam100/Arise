
import logo from '../../images/Arise_logo.svg';

const Header = ({text}) => {
    return (
        <div className="header">
            <img src={logo} alt="Arise logo" className='logo'/>
            <h1 className='getStarted'>{text}</h1>
        </div>
    );
};

export default Header;