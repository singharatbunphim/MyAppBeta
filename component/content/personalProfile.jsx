import styles from '../../styles/content/personalProfile.module.scss'
import { AiFillFacebook , AiOutlineGithub , AiFillInstagram } from 'react-icons/ai'
import Experience from './Experience'
import Feature from './features/main'
const PersonalProfile = () => {

    return (
        <>
            <div className={styles.wrapper_container}>
                <div className={styles.col_1_content}>
                        <div className={styles.name}>
                            <div className={styles.f_name}>Singharat</div>
                            <div className={styles.l_name}>Bunphim</div>
                        </div>

                        <div className={styles.lorem}>
                            Freelance Visual Product Design and Developer based in Sisaket Thailand.
                        </div>

                        <div className={styles.end}>
                            <button type="button">Hire me</button>
                        </div>
                </div>

                <div className={styles.col_2_content}>
                    <div className="personal"></div>
                    <div className={styles.circle_bg}></div>
                    <div className={styles.shourtContact}>
                        <span><AiOutlineGithub /></span>
                        <span><AiFillFacebook /></span>
                        <span><AiFillInstagram /></span>
                    </div>
                </div>
            </div>
            
            <Feature />
            <Experience />
        
            
        </>
    )
}


export default PersonalProfile;