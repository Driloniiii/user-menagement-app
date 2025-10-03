import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserDetails() {
  const { id } = useParams();
  const users = useSelector(state => state.users.list);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = users.find(u => u.id.toString() === id);
    if (localUser) setUser(localUser);
    else {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error(err));
    }
  }, [id, users]);

  if (!user) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
      <p><strong>Website:</strong> {user.website || 'N/A'}</p>
      <p><strong>Company:</strong> {user.company?.name || 'N/A'}</p>
      <p><strong>Address:</strong> {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.zipcode}` : 'N/A'}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default UserDetails;
