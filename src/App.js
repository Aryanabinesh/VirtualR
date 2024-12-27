
import './App.css';
import Featuresection from './components/Featuresection';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import Pricesection from './components/Pricesection';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Herosection/>
        <Featuresection/>
        <Workflow/>
        <Pricesection/>
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
