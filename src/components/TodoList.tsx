import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';
import { useActions } from '../hooks/useActions.ts';

const TodoList: React.FC = () => {
  const { error, limit, loading, skip, todos } = useTypedSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [0, 1, 2, 3, 4];

  useEffect(() => {
    fetchTodos(skip, limit);
  }, [skip]);

  if (loading) {
    return <h1>Идет загрузка списка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.todo}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p * 10)}
            style={{
              cursor: 'pointer',
              border: p === skip / 10 ? '2px solid green' : '1px solid gray',
              padding: '10px',
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
