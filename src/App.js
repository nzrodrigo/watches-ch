import './App.css';
import NavBar from"./components/NavBar.js"

import ItemListCointainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ItemListCointainer />
    </div>
  );
}

export default App;