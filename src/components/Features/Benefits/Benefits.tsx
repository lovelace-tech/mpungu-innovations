import React from 'react'
import CenterContainer from '../../UI/CenteredContainer/CenterContainer';
import Card from '../../UI/Card/Card';
import styles from "./Benefits.module.css"
const Benefits:React.FC = () => {
  return (
    <section className={styles.benefitSection}>
        <CenterContainer>
            <h2 className={styles.benefitHeading}>Benefits of our Technology</h2>
            <div className={styles.benefitCardContainer}>
                <Card className={styles.benefitCard}>
                    <div className={styles.benefitCardInfo}>
                        <h3 className={styles.benefitCardHeading}>Reduced Greenhouse Gases</h3>
                        <div>
                            <img src="/images/waste/waste-1.jpg" alt="" className={styles.cardImage}/>
                            <p className={styles.benefitCardContent}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cum odio praesentium quidem.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </CenterContainer>
    </section>
  )
}

export default Benefits;