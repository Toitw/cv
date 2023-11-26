import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const FieldOrText = ({ label, name, type, value, onChange, editing }) => {
    return (
        <label>
            {label}:
            {editing ? (
                <input 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <span> {value}</span>
            )}
        </label>
    );
};

function GeneralInfo() {
    const [editing, setEditing] = useState(false);
    const [info, setInfo] = useState({ name: '', surname: '', email: '', telephone: '' });

    const handleInputChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const toggleEdit = () => {
        setEditing(!editing);
    };

    return (
        <div className='general-info-container'>
            <form>
                <div className='general-info-input-container'>
                    <FieldOrText label="Name" name="name" type="text" value={info.name} onChange={handleInputChange} editing={editing} />
                    <FieldOrText label="Surname" name="surname" type="text" value={info.surname} onChange={handleInputChange} editing={editing} />
                    <FieldOrText label="Email" name="email" type="email" value={info.email} onChange={handleInputChange} editing={editing} />
                    <FieldOrText label="Telephone" name="telephone" type="tel" value={info.telephone} onChange={handleInputChange} editing={editing} />
                </div>
                <button type="button" onClick={toggleEdit}>{editing ? 'Save' : 'Edit'}</button>
            </form>
        </div>
    );
}

export default GeneralInfo;


