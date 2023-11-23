import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from './components/homePage/homePage';
import {CartPage} from './components/cartPage/cartPage.jsx'
import {Navbar} from './components/navbar/navbar.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
