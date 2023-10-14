import './App.css';
import Home from './component/pages/Home';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Home/>
     </BrowserRouter>
    </div>
  );
}

export default App;
