import './App.css';
import Background from './components/Background';
import Brand from './components/Brand';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Full from './components/Full';
import FullSlider from './components/FullSlider';
import Get from './components/Get';
import Header from './components/Header';
import Hero from './components/Hero';
import NewSletter from './components/NewSletter';
import Portada from './components/Portada';
import Rights from './components/Rights';


function App() {
  return (
  <>
    <Header />
    <Background />
    <Hero />
    <Cta />
    <Portada />
    <Full />
   <FullSlider/>
   <NewSletter />
   <Brand />
   <Get />
   <Footer />
   <Rights />
    </>
  );
}

export default App;
