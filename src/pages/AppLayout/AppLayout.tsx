import { Outlet } from "react-router-dom";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../../components/UI/Footer/Footer";


const AppLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout;