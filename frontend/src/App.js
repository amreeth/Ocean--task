import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Form from './Components/Form'
import Users from './Components/Users'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Form/>}></Route>
          <Route path='/' element={<Users/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
