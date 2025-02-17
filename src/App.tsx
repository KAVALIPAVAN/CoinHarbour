
import Create from "./pages/Create"
import Feature from "./pages/Feature"
import Home from "./pages/Home"
import Invest from "./pages/Invest"
import Questions from "./pages/Questions"

const App = () => {
  return (
    <div className="bg-[#050505] min-h-screen overflow-hidden">
    
    <Home/>
    <Feature/>
    <Invest/>
    <Create/>
    <Questions/>
    </div>
  )
}

export default App