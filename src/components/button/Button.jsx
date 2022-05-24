import '../button/button.scss';

const Button = ({text}) => {
    return (
        <button className='actionButton'>
            {text}
        </button>
    );
};

export default Button;