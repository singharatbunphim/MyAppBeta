import styles from '../styles/footer.module.scss'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_header}>
                    <span><h1>SHOW MY DATA CONTENT</h1></span>
                </div>
                <div className={styles.footer_bottom}>



                    <div className={styles.footer_cards}>
                        <span><a>Content</a></span>
                        <div className={styles.cards_items}>
                            <Link href="/project">Introduction</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Profile</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Experiance</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Skill</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">feature</Link>
                        </div>
                    </div>

                    
                    <div className={styles.footer_cards}>
                        <span><a>myprojects</a></span>
                        <div className={styles.cards_items}>
                            <Link href="/project">Clone Unbarlly</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">ScanEarn</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">E-commerce</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Blog</Link>
                        </div>
                    </div>

                    <div className={styles.footer_cards}>
                        <span><a>Test</a></span>
                        <div className={styles.cards_items}>
                            <Link href="/project">Null</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Null</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Null</Link>
                        </div>
                        <div className={styles.cards_items}>
                            <Link href="/project">Null</Link>
                        </div>
                    </div>


                </div>
                <div className={styles.footer_end}>
                    <span><h4> Copyright &copy; 2022 & The Singto </h4></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer