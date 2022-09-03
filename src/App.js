// Import data

// Import components
import './App.css';
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import Directory from './components/Directory';
import Sidebar from './components/Sidebar';

function App(){
  return (
    <div>
      <searchBar/>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
