import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<SignUp />} path={} ></Route>
      </Routes>
    </div>
  );
}

export default App;
