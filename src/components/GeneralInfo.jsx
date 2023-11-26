import React, { useState } from 'react';
import Modal from 'react-modal';

const GeneralInfo = () => {
  const [info, setInfo] = useState({ name: '', surname: '', telephone: '', email: '', socialMedia: '' });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleEditInfo = () => {
    setModalIsOpen(true);
  };

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  };

  const handleCancelEditing = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='component-container' id='general-info-container'>
      <h2>General Information</h2>
      <p>Name: {info.name}</p>
      <p>Surname: {info.surname}</p>
      <p>Telephone: {info.telephone}</p>
      <p>Email: {info.email}</p>
      <p>Social Media: {info.socialMedia}</p>
      <button onClick={handleEditInfo}>Edit</button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCancelEditing}>
        <form onSubmit={handleUpdateInfo}>
          <h2>Edit General Information</h2>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={info.name} onChange={handleInputChange} />
          <label htmlFor="surname">Surname</label>
          <input id="surname" name="surname" value={info.surname} onChange={handleInputChange} />
          <label htmlFor="telephone">Telephone</label>
          <input id="telephone" name="telephone" value={info.telephone} onChange={handleInputChange} />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={info.email} onChange={handleInputChange} />
          <label htmlFor="socialMedia">Social Media</label>
          <input id="socialMedia" name="socialMedia" value={info.socialMedia} onChange={handleInputChange} />
          <button type="submit">Update Information</button>
          <button type="button" onClick={handleCancelEditing}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default GeneralInfo;
