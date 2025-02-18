import Bottom from "./Bottom"
import Create from "./Create"
import Feature from "./Feature"
import Home from "./Home"
import Invest from "./Invest"
import Questions from "./Questions"


const Main = () => {
  return (
    <div className="bg-[#050505] min-h-screen overflow-hidden">
    <Home/>
    <Feature/>
    <Invest/>
    <Create/>
    <Questions/>
    <Bottom/>
    </div>
  )
}

export default Main