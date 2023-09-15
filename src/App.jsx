import Features from "./components/features/Features"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Reviews from "./components/reviews/Reviews"
import Teams from "./components/teams/Teams"
import './styles/index.scss'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Teams/>
    <Reviews/>
    </>
  )
}

export default App
