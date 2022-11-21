
import './App.css';
import menu from './Items';

import "./component/bootstrap.min.css"
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Shop from './component/Shop';
import Home from './component/Home';
import Maggi from './component/basics/Maggi';
import Samosa from './component/basics/Samosa';
import GarlicBread from './component/basics/GarlicBread';
import Muffin from './component/basics/Muffin';
import BlackCoffee from './component/basics/BlackCoffee';
import Latte from './component/basics/Latte';
import Cappuccino from './component/basics/Cappuccino';
import Americano from './component/basics/Americano';
import Espresso from './component/basics/Espresso';
import Mocha from './component/basics/Mocha';
import Brown from './component/basics/Brown';
import Bacon from './component/basics/Bacon';
import Hazelnut from './component/basics/Hazelnut';
import EggPie from './component/basics/EggPie';
import Flasky from './component/basics/Flasky';
import Pineapple from './component/basics/Pineapple';
import ChocolatePastry from './component/basics/ChocolatePastry';
import FerreoRocher from './component/basics/FerreoRocher';
import FruitPastries from './component/basics/FruitPastries';
import HappyBirthday from './component/basics/HappyBirthday';
import UserData from './component/UserData';
import Products from './component/Products';
import Faq from './component/Faq';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      
      <Routes>
        <Route path='/shop' exact element={<Shop/>}/>
        <Route path='/home' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<UserData/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/home/maggie' element={<Maggi/>}/>
        <Route path='/shop/samosa' element={<Samosa/>}/>
        <Route path='/shop/gralic-bread' element={<GarlicBread/>}/>
        <Route path='/shop/muffin' element={<Muffin/>}/>
        <Route path='/shop/black-coffee' element={<BlackCoffee/>}/>
        <Route path='/shop/latte' element={<Latte/>}/>
        <Route path='/shop/cappuccino' element={<Cappuccino/>}/>
        <Route path='/shop/americano' element={<Americano/>}/>
        <Route path='/shop/espresso' element={<Espresso/>}/>
        <Route path='/shop/mocha' element={<Mocha/>}/>
        <Route path='/shop/Brown-Butter-Tart' element={<Brown/>}/>
        <Route path='/shop/Bacon-Egg' element={<Bacon/>}/>
        <Route path='/shop/Hazelnut-Cream-Sandwich' element={<Hazelnut/>}/>
        <Route path='/shop/egg-pie' element={<EggPie/>}/>
        <Route path='/shop/flaky-laminated-pastry' element={<Flasky/>}/>
        <Route path='/shop/Pineapple-Pastries' element={<Pineapple/>}/>
        <Route path='/shop/Chocolate-truffle-Pastry' element={<ChocolatePastry/>}/>
        <Route path='/shop/Ferreo-Rocher-Chocolate' element={<FerreoRocher/>}/>
        <Route path='/shop/Fruit-Pastries' element={<FruitPastries/>}/>
        <Route path='/shop/Happy-Birthday-cake' element={<HappyBirthday/>}/>
        <Route path='/faq' element={<Faq/>}/>
      </Routes>

      <Footer/>
      
      
    </div>
  );
}



export default App;
