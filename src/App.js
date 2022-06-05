import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Products } from './components/Products';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Product} from './components/Product';
import {Routes,Route} from 'react-router-dom';
import {PageNotFound} from './components/PageNotFound';
import {Faq} from "./components/Faq";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products/*" element={ <Products/>}>
        <Route path=":id" element={ <Product/>}></Route>
        </Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>}></Route>
        
     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

