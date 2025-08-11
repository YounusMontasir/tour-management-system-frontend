
import { Outlet } from 'react-router';
import CommonLayout from './components/layout/CommonLayout';



const App = () => {
  return (
    <CommonLayout>
      <Outlet></Outlet>
    </CommonLayout>
  );
};

export default App;