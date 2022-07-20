import Footer from "../component/Footer";
import styles from '../styles/main.module.scss'
import Navbar from "../component/Navbar";

const about = () => {
    return (
        <div>
            <Navbar />
            <h1>Hello About</h1>
            <section className={styles.section}>Good Homework</section>
            <Footer />
        </div>
    )
}


export default about;