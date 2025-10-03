import React, { useState } from 'react';

function UserEditForm({ user, saveEdit, cancelEdit }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [company, setCompany] = useState(user.company?.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Name and Email are required!');
      return;
    }
    saveEdit({ ...user, name: name.trim(), email: email.trim(), company: { name: company.trim() || 'N/A' } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
      <button type="submit">Save</button>
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </form>
  );
}

export default UserEditForm;
