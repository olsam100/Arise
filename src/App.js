import Signup from "./pages/signup/Signup";
import '../src/globalStyles.css'
import Signin from './pages/signin/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
   
      <Router className="App">
        <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      </Router>
  
  );
}

export default App;
