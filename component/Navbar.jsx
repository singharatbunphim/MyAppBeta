import styles from '../styles/navbar.module.scss';
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>MyLogo</div>
            <div className={styles.menubar}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="/project"><a>Project</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;