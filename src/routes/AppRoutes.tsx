import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Login, MyTasks, Boards, BoardDetail, Organization } from '../views';
import { DailyReport } from '../views/DailyReport/DailyReport';
import { FormsProject } from '../views/Forms/FormsProject';
import { FormsSupport } from '../views/Forms/FormsSupport';
import { FormsNewRequirement } from '../views/Forms/FormsNewRequirement';

const AppRoutes = () => {
  return (
    <div className='h-full'>
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* Rutas protegidas para cualquier usuario autenticado */}
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Organization />} />
          <Route path='/tasks' element={<MyTasks />} />
          <Route path='/daily-report' element={<DailyReport />} />
          <Route path='/:id/:area/boards' element={<Boards />} />
          <Route path='/board/:id/:key' element={<BoardDetail />} />
          <Route path='/form/project/:board' element={<FormsProject />} />
          <Route path='/form/newReq/:board'  element={<FormsNewRequirement />} />
          <Route path='/form/default/:board' element={<FormsSupport />} />
        </Route>
      </Routes>

    </div>
  );
};

export default AppRoutes;
