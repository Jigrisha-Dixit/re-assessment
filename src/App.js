import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import LandingPage from './components/LandingPage';
import Search from './components/search';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/landing' element={<LandingPage/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
