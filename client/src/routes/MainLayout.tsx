import { Outlet } from 'react-router';
import './routes.css';
const MainLayout = () => {
  return (
    <div>
      <div className='header'>
        <p>todo</p>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
