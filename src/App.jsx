import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import MoonLoader from 'react-spinners/MoonLoader';
function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className='App'>
      {loading ? (
        <MoonLoader color={'#dcb900'} loading={loading} size={100} />
      ) : (
        <>
          <Section />
        </>
      )}
    </div>
  );
}

export default App;
