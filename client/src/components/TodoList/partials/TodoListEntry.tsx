import { Todo } from '../../../constants';
import CircleButton from './CircleButton';
import trash from '../../../assets/trash.svg';

import './todolistentry.css';
interface TodoListEntryProps {
  todo: Todo;
  updateData: any;
  index: number;
}
const TodoListEntry = ({ todo, updateData, index }: TodoListEntryProps) => {
  return (
    <div className='entryContainer'>
      <div className='leftHalfContainer'>
        <CircleButton
          completed={todo.completed}
          updateData={updateData}
          index={index}
        />
        <p
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.title}
        </p>
      </div>
      <img
        className='trashCan'
        onClick={() => console.log('delete')}
        src={trash}
      />
    </div>
  );
};

export default TodoListEntry;
