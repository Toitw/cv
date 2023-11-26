import React, { useState } from 'react';

const Education = () => {
  const [educations, setEducations] = useState([]); // Replace with your actual data
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingEntry, setEditingEntry] = useState({ degree: '', school: '', year: '' });

  const handleAddEducation = () => {
    // Create a new education entry
    const newEducation = {
      degree: '',
      school: '',
      year: '',
    };

    // Add the new education entry to the list
    setEducations([...educations, newEducation]);
  };

  const handleEditEducation = (index) => {
    // Set the editing index and entry
    setEditingIndex(index);
    setEditingEntry(educations[index]);
  };

  const handleUpdateEducation = (e) => {
    e.preventDefault();

    // Update the education entry
    const updatedEducations = [...educations];
    updatedEducations[editingIndex] = editingEntry;
    setEducations(updatedEducations);

    // Clear the editing index and entry
    setEditingIndex(null);
    setEditingEntry({ degree: '', school: '', year: '' });
  };

  const handleCancelEditing = () => {
    // Clear the editing index and entry
    setEditingIndex(null);
    setEditingEntry({ degree: '', school: '', year: '' });
  };

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
      {editingIndex !== null && (
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
      )}
    </div>
  );
};

export default Education;