import { TodoListProps } from '../../constants';
import TodoListEntry from './partials/TodoListEntry';

const TodoList = ({ data, updateData }: TodoListProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        overflow: 'auto',
        height: 'calc(100vh - 200px - 50px)',
        borderBottom: '2px solid rgba(255,255,255,0.2)',
        borderRadius: '8px',
      }}
    >
      {data.map((item, index) => (
        <TodoListEntry todo={item} updateData={updateData} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
