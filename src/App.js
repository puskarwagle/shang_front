// Custom css and bootstrap
import './css/App.css';
import 'bootstrap/dist/js/bootstrap.js';
// Components
import Header from './components/Header';
import Cards from './components/Cards';
import About from './components/About';
import OurService from './components/OurServices';
import ExploreTech from './components/ExploreTech';
import RecentWork from './components/RecentWork';
import OurClients from './components/OurClients';
import Overview from './components/Overview';
import HeaderServices from './components/HeaderServices';
import HeaderProducts from './components/HeaderProducts';

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <About />
      <Cards/>
      <OurService/>
      <ExploreTech/>
      <RecentWork/>
      <OurClients/>
      <Overview/>
      <HeaderServices/>
      <HeaderProducts/>
    </div>
  );
}

export default App;