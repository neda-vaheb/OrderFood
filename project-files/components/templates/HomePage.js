import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restrictions";
import Banner from "../modules/Banner";
import Atributes from "../modules/Atributes";
import Companies from "../modules/Companies";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>  
       <Banner/>
       <Atributes/>
       <Definition/>
       <Companies/>
       <Instruction/>
       <Guide/>
       <Restrictions/>
    </div>
  )
}

export default HomePage
