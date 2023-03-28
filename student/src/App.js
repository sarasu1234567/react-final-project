import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import{Route,Routes} from 'react-router-dom';
import View from './components/View';
import Addstudent from './components/Addstudent';

function App() {
  return (
    <div classname="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<View />}/>

        <Route path='/Add' element={<Addstudent/>}/>
        </Routes>
        <Addstudent/>
      
    </div>
    );
  }
  

export default App;
