import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelecor.ts';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user.ts';
import { useActions } from '../hooks/useActions.ts';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(users);
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.firstName}</li>
      ))}
    </ul>
  );
};
export default UserList;
