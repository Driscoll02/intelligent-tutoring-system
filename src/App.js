import './App.css';
import Landing from './components/landing';
import KeyStages from './components/keystages';
import KS1Curriculum from './components/ks1curriculum';
import KS2Curriculum from './components/ks2curriculum';
import { Route, Routes, useParams } from 'react-router-dom'
import NumberPlaceValue from './components/questioncomponents/numberandplacevalue';
import AdditionAndSubtraction from './components/questioncomponents/additionandsubtraction';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/keystages' element={<KeyStages />} />
        <Route path='/ks1' element={<KS1Curriculum />} />
        <Route path='/ks2' element={<KS2Curriculum />} />
        <Route path='/numberplacevalue/:id' element={<NumberPlaceValue currentID={useParams()} questiontitle={"Number and Place Value"} />} />
        <Route path='/additionsubtraction/:id' element={<AdditionAndSubtraction currentID={useParams()} questiontitle={"Addition and Subtraction"} />} />
      </Routes>
    </div>
  );
}

export default App;
