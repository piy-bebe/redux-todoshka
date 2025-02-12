import React from 'react';
import UserList from './components/UserList.tsx';
import TodoList from './components/TodoList.tsx';

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
