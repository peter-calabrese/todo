import './newtodo.css';

const NewTodo = () => {
  return (
    <div className='newTodoContainer'>
      <input className='newTodoInput' placeholder='Enter new todo' />
      <button className='newTodoButton'>Add +</button>
    </div>
  );
};

export default NewTodo;
