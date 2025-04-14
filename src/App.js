import { useEffect } from 'react';
import './App.css';
import Pages from './Component/Pages/Pages';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Component/Common/Footer';

  function App() {
    useEffect(() => {
      AOS.init()
      AOS.refresh()
    }, [])
  return (
    <div className="App">
      <Pages />
      <Footer />
    </div>
  );
}

export default App;