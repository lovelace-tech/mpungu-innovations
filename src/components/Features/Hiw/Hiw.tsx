import CenterContainer from "../../UI/CenteredContainer/CenterContainer";
import styles from "./Hiw.module.css"
import HiwContent from "./HiwContent/HiwContent";


const data = [
    {
        id:1,
        image: "/images/waste/waste-1.jpg",
        title: "Waste Collection",
        description: "We recognize the importance of reducing our environmental footprint in every aspect of our operations, including waste collection. That's why we're committed to adopting eco-friendly methods to collect waste from our facilities and offices. We're exploring the use of alternative fuel vehicles, such as electric or biofuel-powered garbage trucks, to reduce greenhouse gas emissions and air pollution. We're also implementing smart waste collection systems that optimize routes and schedules, reducing fuel consumption and lowering emissions.",
    },
    {
        id:2,
        image: "/images/waste/waste-1.jpg",
        title: "Waste Sorting",
        description: "First, large objects such as furniture and appliances are removed from the waste stream through mechanical sorting. The remaining waste is then fed into a trommel screen, which separates the waste into different sizes. The smaller waste particles are then sorted using air classification, which separates light materials such as paper and plastic from heavier materials. The heavier materials are then sorted using magnetic and eddy current separators, which separate ferrous and non-ferrous metals from other materials. Finally, the remaining waste is sorted using optical scanners, which use light to identify the type of material and sort it accordingly.",
    },
    {
        id:3,
        image: "/images/waste/waste-1.jpg",
        title: "Anaerobic Digestion",
        description: "Industries are the powerhouses of production, generating vast quantities of waste. From manufacturing processes to packaging materials, industrial waste includes everything from discarded machinery parts to chemical byproducts. Without responsible disposal practices, this waste can pollute air, water, and soil, posing a significant threat to both human health and the environment.",
    },
];



const Hiw = () => {
  return (
    <section className={styles.sectionProblem}>
        <CenterContainer>
            <h3 className={styles.problemHeading}>
                Waste-to-energy conversion, is a new possibility towards a sustainable future. It is a process which involves transforming non-recyclable waste into electricity, heat, or fuel, reducing greenhouse gas emissions and dependence on fossil fuels.
            </h3>
            <div>
                <h2 className={styles.wteHeading}>How it Works?</h2>
                <ul className={styles.problemWrapper}>
                    {data.map((problem,index) =>{
                        return (
                            <HiwContent item = {problem} key={index} index={index}/>
                        )
                    })}
                </ul>
            </div>
        </CenterContainer>
    </section>
  )
}

export default Hiw;