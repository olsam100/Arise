import { useState } from 'react';
import '../formfield/field.scss'

const FieldSm = ({label, type, name}) => {
    const [field, setField] = useState('');

    const onChange = (e) => {
        setField(e.target.value)
    }
    return (
        <div className='smallfieldcontainer'>
            <label htmlFor={label}>{label}</label>
            <input 
                type={type} 
                className='namefield'
                onChange={onChange}
                value={field}
            />
        </div>
    );
};

export default FieldSm;