import { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './constants';

const App = () => {
  const [data, setData] = useState<Todo[]>([
    {
      title:
        'Complete the project report for the quarterly review to ensure all data is accurate and up to date.',
      completed: false,
    },
    {
      title:
        'Plan a surprise birthday party for Sarah, including invitations, decorations, and a cake.',
      completed: true,
    },
    {
      title:
        'Read the latest novel by my favorite author to discuss it with my book club next week.',
      completed: false,
    },
    {
      title:
        'Organize the garage this weekend to make space for the new shelves and tools we bought.',
      completed: true,
    },
    {
      title:
        'Prepare a healthy meal plan for the week that includes breakfast, lunch, and dinner options.',
      completed: false,
    },
    {
      title:
        'Finish the online course on digital marketing to enhance my skills and advance my career.',
      completed: true,
    },
    {
      title:
        'Schedule a dentist appointment for a routine check-up and cleaning for next month.',
      completed: false,
    },
    {
      title:
        'Write a thank-you note to my friend for the wonderful gift they gave me on my birthday.',
      completed: true,
    },
    {
      title:
        'Research the best travel destinations for our summer vacation and create a detailed itinerary.',
      completed: false,
    },
    {
      title:
        'Attend the community meeting to discuss the new park development and share my thoughts.',
      completed: true,
    },
  ]);
  const updateData = (index: number, key: string, value: any) => {
    setData((prev) => {
      const shallow = [...prev];
      shallow[index] = {
        ...shallow[index],
        [key]: value,
      };
      return shallow;
    });
  };
  return (
    <div
      style={{
        padding: '1rem',
        background: 'var(--bg)',
        height: 'calc(100vh - 200px - 32px)',
      }}
    >
      <div
        style={{
          maxWidth: 750,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <NewTodo />
        <TodoList data={data} updateData={updateData} />
      </div>
    </div>
  );
};

export default App;
