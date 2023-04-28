import './App.css';
import Landing from './components/landing';
import KeyStages from './components/keystages';
import KS1Curriculum from './components/ks1curriculum';
import KS2Curriculum from './components/ks2curriculum';
import { Route, Routes, useParams } from 'react-router-dom'
import NumberPlaceValue from './components/questioncomponents/numberandplacevalue';
import AdditionAndSubtraction from './components/questioncomponents/additionandsubtraction';
import MultiplicationDivision from './components/questioncomponents/multiplicationanddivision';
import Measurement from './components/questioncomponents/measurement';
import Fractions from './components/questioncomponents/fractions';
import Algebra from './components/questioncomponents/algebra';
import PositionAndDirection from './components/questioncomponents/positionanddirection';
import PropertiesOfShapes from './components/questioncomponents/propertiesofshapes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/keystages' element={<KeyStages />} />
        <Route path='/ks1' element={<KS1Curriculum />} />
        <Route path='/ks2' element={<KS2Curriculum />} />
        <Route path='/numberplacevalue/:id/:stage' element={<NumberPlaceValue currentID={useParams()} currentStage={useParams()} />} />
        <Route path='/additionsubtraction/:id/:stage' element={<AdditionAndSubtraction currentID={useParams()} currentStage={useParams()} />} />
        <Route path='/multiplicationdivision/:id/:stage' element={<MultiplicationDivision currentID={useParams()} currentStage={useParams()} />} />
        <Route path='/measurement/:id/:stage' element={<Measurement currentID={useParams()} currentStage={useParams()} />} />
        <Route path='/fractions/:id/:stage' element={<Fractions currentID={useParams()} currentStage={useParams()} />} />
        <Route path='/algebra/:id/:stage' element={<Algebra currentID={useParams()} />} currentStage={useParams()} />
        <Route path='/positiondirectionshapes/:id/:stage' element={<PositionAndDirection currentID={useParams()} currentStage={useParams()} />} />
        <Route path='/propertiesofshapes/:id/:stage' element={<PropertiesOfShapes currentID={useParams()} currentStage={useParams()} />} />
      </Routes>
    </div>
  );
}

export default App;
