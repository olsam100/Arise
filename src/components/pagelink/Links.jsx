import { Link } from 'react-router-dom'

const Links = ({text, span}) => {
    return (
        <Link to='/signin' className='links signinlink'>
            <h4>{text}</h4> <span>{span}</span>
        </Link>
    );
};

export default Links;