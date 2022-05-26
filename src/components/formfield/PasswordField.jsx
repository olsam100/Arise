import { useState } from 'react';

const PasswordField = () => {
    const [field, setField] = useState('');

    const onChange = (e) => {
        setField(e.target.value)
    }
    return (
        <div className='passwordbox'>
            <input 
                type='password' 
                className='passwordwithicon'
                value={field}
                onChange={onChange}
            />
        </div>
        
    );
};

export default PasswordField;