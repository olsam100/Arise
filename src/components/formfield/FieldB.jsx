import '../formfield/field.scss'
import { useState } from 'react';

const FieldB = ({label, type='text'}) => {
    const [field, setField] = useState('');

    const onChange = (e) => {
        setField(e.target.value)
    }
    return (
        <div className='bigcontainer'>
            <label htmlFor={label}>{label}</label>
            <input 
                type={type} 
                className='email__password'
                value={field}
                onChange={onChange}
            />
        </div>
        
    );
};

export default FieldB;