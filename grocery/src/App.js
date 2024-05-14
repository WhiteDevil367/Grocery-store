//import {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './GroceryApp/Login/Login'

// const Home = lazy(()=>{import('./GroceryApp/Home/Home.js')})
// const Cart = lazy(()=>{import('./GroceryApp/Cart/Cart.js')});
// const Signup = lazy(()=>{import('./GroceryApp/Signup/Signup.js')})

import Home from './GroceryApp/Home/Home';
import Cart from './GroceryApp/Cart/Cart'
import Signup from './GroceryApp/Signup/Signup'

function App(){
    return(
        <BrowserRouter>
        
        
        <Routes>
        <Route path='/' Component={Login}  />
           <Route path='/products' Component={Home}  />
           <Route path='/cart' Component={Cart}  />
           <Route path='/signup' Component={Signup}  />
      </Routes>
        
      </BrowserRouter>
    )
}
export default App