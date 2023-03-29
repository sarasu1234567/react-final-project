import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import View from './components/View';
import Addbook from './components/Addbook';

function App() {
  return (
    <div classname="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<View />} />

        <Route path='/Add' element={<Addbook data={{ id: '', name: '', grade: '' }}
          method="post" />} />
      </Routes>
<View/>
<Addbook/>
    </div>
  );
}


export default App;
