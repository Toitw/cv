import React, { useState } from 'react';
import Modal from 'react-modal';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingEntry, setEditingEntry] = useState({ company: '', position: '', duration: '' });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setEditingEntry({ ...editingEntry, [e.target.name]: e.target.value });
  };

  const handleAddExperience = () => {
    setEditingEntry({ company: '', position: '', duration: '' });
    setEditingIndex(null);
    setModalIsOpen(true);
  };

  const handleEditExperience = (index) => {
    setEditingIndex(index);
    setEditingEntry(experiences[index]);
    setModalIsOpen(true);
  };

  const handleUpdateExperience = (e) => {
    e.preventDefault();
    const updatedExperiences = [...experiences];
    if (editingIndex === null) {
      updatedExperiences.push(editingEntry);
    } else {
      updatedExperiences[editingIndex] = editingEntry;
    }
    setExperiences(updatedExperiences);
    setModalIsOpen(false);
    setEditingIndex(null);
    setEditingEntry({ company: '', position: '', duration: '' });
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleCancelEditing = () => {
    setModalIsOpen(false);
    setEditingIndex(null);
    setEditingEntry({ company: '', position: '', duration: '' });
  };

  return (
    <div className='component-container' id='experience-container'>
        <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>Company: {experience.company}</h3>
          <p>Position: {experience.position}</p>
          <p>Duration: {experience.duration}</p>
          <button onClick={() => handleEditExperience(index)}>Edit</button>
          <button onClick={() => handleDeleteExperience(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddExperience} >Add Experience</button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCancelEditing}>
        <form onSubmit={handleUpdateExperience}>
          <h2>Edit Experience</h2>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" value={editingEntry.company} onChange={handleInputChange} />
          <label htmlFor="position">Position</label>
          <input id="position" name="position" value={editingEntry.position} onChange={handleInputChange} />
          <label htmlFor="duration">Duration</label>
          <input id="duration" name="duration" value={editingEntry.duration} onChange={handleInputChange} />
          <button type="submit">Update Experience</button>
          <button type="button" onClick={handleCancelEditing}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default Experience;
