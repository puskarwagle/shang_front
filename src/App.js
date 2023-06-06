// Custom css and bootstrap
import './css/App.css';
import 'bootstrap/dist/js/bootstrap.js';
// Components
import Header from './components/Header';
import About from './components/About';
import Cards from './components/Cards';
import SideBar from './components/SideBar';
import OurService from './components/OurServices';
import ExploreTech from './components/ExploreTech';
import RecentWork from './components/RecentWork';
import OurClients from './components/OurClients';
import Overview from './components/Overview';
import HeaderServices from './components/HeaderServices';
import HeaderProducts from './components/HeaderProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <About />
      <Cards/>
      <main>
        <SideBar/>
        <article>
          <OurClients/>
          <OurService/>
          <ExploreTech/>
          <RecentWork/>
          
          {/* <Overview/> */}
          {/* <HeaderServices/> */}
          {/* <HeaderProducts/> */}
        </article>
      </main>
      <Footer/>
    </div>
  );
}

export default App;