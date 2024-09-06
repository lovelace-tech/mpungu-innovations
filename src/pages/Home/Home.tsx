import Benefits from "../../components/Features/Benefits/Benefits"
import Hero from "../../components/Features/Hero/Hero"
import Hiw from "../../components/Features/Hiw/Hiw"
import Problem from "../../components/Features/Problem/Problem"
import TakeAction from "../../components/Features/TakeAction/TakeAction"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Problem/>
      <Hiw/>
      <TakeAction/>
      <Benefits/>
    </div>
  )
}

export default Home