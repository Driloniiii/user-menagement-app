import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice';

function UserForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Name and Email are required!');
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      company: { name: company.trim() || 'N/A' },
      address: { street: '', city: '', zipcode: '' },
      phone: '',
      website: ''
    };

    dispatch(addUser(newUser));
    setName('');
    setEmail('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name (required)" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (required)" />
      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
