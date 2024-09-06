import { NavLink } from "react-router-dom"
import { navLinks } from "../../../utils/navLinks"
import Logo from "../Logo/Logo"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Logo/>
        <ul className={styles.navLinks}>
            {navLinks.map((link,i)=>{
                return(
                    <li key={i} className={styles.navList}>
                        <NavLink to={"#"} className={styles.NavLink}>{link}</NavLink>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar;