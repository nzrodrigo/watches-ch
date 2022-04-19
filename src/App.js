import './App.css';
import NavBar from"./components/NavBar.js"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import CarWidget from './components/CarWidget';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/item/:productId' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<CarWidget />}></Route>
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;