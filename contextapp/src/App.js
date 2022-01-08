import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Users from './components/Users';
import DataProvide from './context/DataProvide';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  <BrowserRouter>
    <DataProvide>
      <Navbar />
      <Routes>
        <Route />
        <Route path={'/users'}  element={<Users />}/>
        <Route path={'/form'}  element={<Form />}/>
      </Routes>         
    </DataProvide>
  </BrowserRouter>
  );
}

export default App;
