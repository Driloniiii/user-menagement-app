import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, deleteUser } from '../features/users/usersSlice';
import UserEditForm from './UserEditForm';

function UserCard({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const saveEdit = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    setEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Delete this user?')) dispatch(deleteUser(user.id));
  };

  if (editing) return <UserEditForm user={user} saveEdit={saveEdit} cancelEdit={() => setEditing(false)} />;

  return (
    <div className="user-card">
      <h3 onClick={() => navigate(`/user/${user.id}`)}>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name || 'N/A'}</p>
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default UserCard;
