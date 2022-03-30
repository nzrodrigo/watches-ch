import logo from './logo.svg';
import './App.css';
import NavBar from"./components/NavBar.js"

import ItemListCointainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListCointainer greetings="mensajito"/>
    </div>
  );
}

export default App;