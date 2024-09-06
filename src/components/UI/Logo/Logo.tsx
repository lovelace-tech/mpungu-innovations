import { NavLink } from "react-router-dom"
import styles from "./Logo.module.css"


const Logo = () => {
  return (
    <div className={styles.navLink}>
        <NavLink to='/'>
        <img src="/images/logo/mpungu.jpg" alt="golden eagle" className={styles.logoImage}/> 
        </NavLink>
    </div>
  )
}

export default Logo