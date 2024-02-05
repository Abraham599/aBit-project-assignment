import { useState } from "react"
import Band from "./components/Band"
import Cover from "./components/Cover"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Releases from "./components/Releases";
import Footer from "./components/Footer";

function App() {
const [content,setContent] = useState(["John Bill / Creator / Moved to NYC / 27.11.22 / Live now/","John Bill / Creator / Moved to NYC / 27.11.22 / Live now /", "John Bill / Creator / Moved to NYC / 27.11.22 / Live now"]);
  return (
    <div className="w-full h-screen overflow-x-hidden	">
      <Navbar/>
      <Cover/>
      <Band content={content}/>
      <Profile/>
      <Dashboard/>
      <Releases/>
      <footer>
      <Footer/>
      </footer>
      
    </div>
  )
}

export default App
