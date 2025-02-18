
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import WaitlistForm from "./components/WaitlistForm"
import SignIn from "./pages/SignIn"

const App = () => {
  return (
     <BrowserRouter>
      <div className="bg-[#050505] min-h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/waitlist" element={<WaitlistForm />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App