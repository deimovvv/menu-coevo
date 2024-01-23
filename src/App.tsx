import {BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar/Navbar";
/* import Experience from "./components/three.js/Experience"; */

const App = () => {

  return (
    <main className="main">
      <Router>
          <Navbar />
          //@ts-ignore
          <AppRoutes/>
      </Router>
      
      
    
    </main>
    
  )
}

export default App
