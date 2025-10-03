import React, { useState } from 'react';
import UserCard from './UserCard';

function UserList({ users }) {
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(null); // null = no sort by default

  
  let filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );


  if (sortAsc !== null) {
    filteredUsers = [...filteredUsers].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name or email"
      />
      <button className="sort-btn" onClick={() => setSortAsc(prev => prev === true ? false : true)}>
        Sort {sortAsc === null ? '' : sortAsc ? 'Descending' : 'Ascending'}
      </button>

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map(user => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}

export default UserList;
