import { useState } from 'react';
import './App.css';
// import Employee from './components/Employee';
import TodoRowitem from './components/TodoRowitem';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { seq: 1, desc: 'Learn', assigned: 'Test' },
    { seq: 2, desc: 'Learn', assigned: 'Test' },
    { seq: 3, desc: 'Learn', assigned: 'Test' },
    { seq: 4, desc: 'Learn', assigned: 'Test' },
    { seq: 5, desc: 'Learn', assigned: 'Test' }
  ]);

  const [todoToEdit, setTodoToEdit] = useState(null);

  const addOrUpdateTodo = (seq, description, assigned) => {
    if (seq) {
      // Update existing todo
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.seq === seq
            ? { ...todo, desc: description, assigned: assigned }
            : todo
        )
      );
      setTodoToEdit(null); // Clear edit state after update
    } else {
      // Add new todo
      const newTodo = {
        seq: todos.length + 1,
        desc: description,
        assigned: assigned
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
    }
  };


  const deleteTodoRow = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.seq !== id));
  };

  const updateTodo = (seq) => {
    const todo = todos.find(todo => todo.seq === seq);
    if (todo) setTodoToEdit(todo);
  }


  return (<>
    <div className="container">
      <NewTodoForm addOrUpdateTodo={addOrUpdateTodo} todoToEdit={todoToEdit} />
      <div className='card mt-5'>
        <div className='card-header'>
          Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>description</th>
                <th scope='col'>assigned</th>
                <th scope='col'></th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => <TodoRowitem key={todo.seq} data={todo} onDelete={deleteTodoRow} onUpdate={updateTodo} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* <div className="container">
      <Employee />
    </div> */}
  </>
  );


}

export default App;
