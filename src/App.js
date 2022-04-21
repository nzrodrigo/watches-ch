import './App.css';
import NavBar from"./components/NavBar.js"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Cart from './components/CartWidget';
import {CartContextProvider} from './components/context/CartContext'

function App() {
  
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/item/:productId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;