import React, { useState } from 'react';
import Modal from 'react-modal';

const Education = () => {
  const [educations, setEducations] = useState([]); // Replace with your actual data
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingEntry, setEditingEntry] = useState({ degree: '', school: '', year: '' });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddEducation = () => {
    // Set a new blank education entry for editing
    setEditingEntry({ degree: '', school: '', year: '' });
    setEditingIndex(null); // Important to indicate a new entry is being added

    // Open the modal
    setModalIsOpen(true);
};

const handleUpdateEducation = (e) => {
    e.preventDefault();

    // Update the education entry
    let updatedEducations = [...educations];
    if (editingIndex === null) {
        updatedEducations = [...educations, editingEntry]; // Add new entry
    } else {
        updatedEducations[editingIndex] = editingEntry; // Update existing entry
    }
    setEducations(updatedEducations);

    // Clear the editing index and entry
    setEditingIndex(null);
    setEditingEntry({ degree: '', school: '', year: '' });

    // Close the modal
    setModalIsOpen(false);
};

  const handleCancelEditing = () => {
    // Clear the editing index and entry
    setEditingIndex(null);
    setEditingEntry({ degree: '', school: '', year: '' });

    // Close the modal
    setModalIsOpen(false);
  };

  const handleEditEducation = (index) => {
    // Set the editing index and entry
    setEditingIndex(index);
    setEditingEntry(educations[index]);

    // Open the modal
    setModalIsOpen(true);
  }

  const handleInputChange = (e) => {
    // Update the editing entry
    setEditingEntry({ ...editingEntry, [e.target.name]: e.target.value });
  };

  const handleDeleteEducation = (index) => {
    // Remove the education entry at the given index
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  return (
    <div>
      {educations.map((education, index) => (
        <div key={index}>
          <h2>Degree: {education.degree}</h2>
          <p>School: {education.school}</p>
          <p>Year: {education.year}</p>
          <button onClick={() => handleEditEducation(index)}>Edit</button>
            <button onClick={() => handleDeleteEducation(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddEducation}>Add Education</button>
        <Modal isOpen={modalIsOpen} onRequestClose={handleCancelEditing}>
        <form onSubmit={handleUpdateEducation}>
          <h2>Edit Education</h2>
          <label htmlFor="degree">Degree</label>
          <input id="degree" name="degree" value={editingEntry.degree} onChange={handleInputChange} />
          <label htmlFor="school">School</label>
          <input id="school" name="school" value={editingEntry.school} onChange={handleInputChange} />
          <label htmlFor="year">Year</label>
          <input id="year" name="year" value={editingEntry.year} onChange={handleInputChange} />
          <button type="submit">Update Education</button>
          <button type="button" onClick={handleCancelEditing}>Cancel</button>
        </form>
        </Modal>
    </div>
  );
};

export default Education;