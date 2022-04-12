import './App.css';
import NavBar from"./components/NavBar.js"
import ItemListCointainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRoute, Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListCointainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;