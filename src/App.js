import './App.css';
import Landing from './components/landing';
import KeyStages from './components/keystages';
import KS1Curriculum from './components/ks1curriculum';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/keystages' element={<KeyStages />} />
        <Route path='/ks1' element={<KS1Curriculum />} />
      </Routes>
    </div>
  );
}

export default App;
