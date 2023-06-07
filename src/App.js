// Custom css and bootstrap
import React from 'react';
import './css/App.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './components/Header';
import About from './components/About';
import Cards from './components/Cards';
import SideBar from './components/SideBar';
import OurService from './components/OurServices';
import ExploreTech from './components/ExploreTech';
import RecentWork from './components/RecentWork';
import OurClients from './components/OurClients';
import Overview from './components/Overview';
// import HeaderServices from './components/HeaderServices';
// import HeaderProducts from './components/HeaderProducts';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <About />
      <Cards/>
      <main >
        <SideBar/>
        <article>
          <OurService/>
          <ExploreTech/>
          <RecentWork/>
          {/* <HeaderServices/> */}
          {/* <HeaderProducts/> */}
          <OurClients/>
          <Overview/>
          < ContactUs />
        </article>
      </main>
      <Footer/>
    </div>
  );
}

export default App;