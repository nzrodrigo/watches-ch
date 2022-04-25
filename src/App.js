import './App.css';
import NavBar from"./components/NavBar.js"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext'

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
            <Route path='/cart' element={<h1>NOT FOUND 404</h1>}></Route>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;