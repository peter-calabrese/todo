import { Route, Routes } from 'react-router';
import MainLayout from './MainLayout';
import App from '../App';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
