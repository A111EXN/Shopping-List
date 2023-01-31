import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Basket from './pages/Basket/Basket';
import Shopping from './pages/Shopping/Shopping'

function App() {

  const categories = ["Shopping","Basket"];

  return (
    <div>
    <BrowserRouter>
      <Header categories={categories}/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/shopping' element={<Shopping/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
