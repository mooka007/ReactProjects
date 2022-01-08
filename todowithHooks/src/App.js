import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './Component/Task';
import Navbar from './Navbar/Navbar';
import Users from './users/Users';
import Details from './users/Details';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes> 
          <Route path='/users' element={<Users />} /> {/* for link  */}
          <Route path='/task' element={<Task />} />
          <Route path='/details/:id'  element={<Details />}/>
        </Routes>
      </BrowserRouter>
        {/* <Users /> without any link 
        <Task /> */}
    </div>
  );
}

export default App;
