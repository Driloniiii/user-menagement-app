import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  const status = useSelector(state => state.users.status);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchUsers());
  }, [status, dispatch]);

  return (
    <div className="container">
      <UserForm />
      {status === 'loading' ? <p>Loading users...</p> : <UserList users={users} />}
    </div>
  );
}

export default Home;
