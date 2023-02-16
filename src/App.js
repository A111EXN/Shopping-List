import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Basket from './pages/Basket/Basket';
import Shopping from './pages/Shopping/Shopping'
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs'
import Auth from './pages/Auth/Auth';
import CategoriesDetails from './pages/CategoriesDetails/CategoriesDetails'
import Other from './pages/Other/Other';


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
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/categories/:categoryName" element={<CategoriesDetails/>}/>
          <Route path='categories/Other' element={<Other/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
