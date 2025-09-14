import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header"

import { Outlet } from "react-router-dom";
import FlairFollower from "./components/common/FlairFollower"

function App() {
  

  return (
    <>
      
      <div>
        <FlairFollower />
        <Header />
        <Outlet />
        <Footer/>
        
      </div>
        
    </>
  )
}

export default App
