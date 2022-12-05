import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Info from './Components/Info';
import Testi from './Components/Testi';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Section />
      <Info />
      <Testi />
    </div>
  );
}

export default App;
