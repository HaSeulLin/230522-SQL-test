import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './app.scss';
import Home from './page/Home';
import Main from './page/Main';
import LoginForm from './page/LoginForm';
import HeaderNav from './components/HeaderNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/loginform' element={<LoginForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
