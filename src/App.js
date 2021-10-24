
import './App.css';

import Nav from './components/Navbar/Nav';
import FirstSection from './components/Section/FirstSection';
import SecondSection from './components/Section/SecondSection';
import ThirdSection from './components/Section/ThirdSection';
function App() {
  return (
   <div id="main">
     <div id="parent">
     <Nav />
     <FirstSection />
     <SecondSection />
      <ThirdSection />
     </div>
     
   </div>
  );
}

export default App;
