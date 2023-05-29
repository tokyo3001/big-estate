import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./pages/home";
import faq from "./pages/faq";

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route exact path="/" Component={home} />
          <Route exact path="/faq" Component={faq} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
