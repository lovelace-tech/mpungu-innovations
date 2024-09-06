
import Button from "../../UI/Button/Button"
import styles from "./Hero.module.css"


const Hero = () => {
  return (
    <section className={styles.hero}>
      <video muted autoPlay loop className={styles.heroVideo}>
        <source src="/videos/waste-to-energy.mp4" type="video/mp4"/>
        <source src="/videos/waste-to-enery2.mp4" type="video/mp4"/>
      </video>
      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>Transforming waste into clean Energy.</h1>
        <div className={styles.heroCTA}>
          <Button>Read more!</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero



