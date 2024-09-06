
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>upper</div>
        <section>
            <div className={styles.copyright}>
            <strong>&copy;</strong>
            <em>Mpungu Innovations Co.</em>
            {Date.now()}
            </div>
        </section>
    </footer>
  )
}

export default Footer