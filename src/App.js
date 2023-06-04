// Custom css and bootstrap
import './css/App.css';
import 'bootstrap/dist/js/bootstrap.js';
// Components
import Header from './components/Header';
import About from './components/About';
import OurService from './components/OurServices';
import Cards from './components/Cards';

// import Cards from './components/Cards';

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <About />
      <OurService/>
      <Cards />
    </div>
  );
}

export default App;