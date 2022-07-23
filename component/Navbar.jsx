import styles from '../styles/navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React , { useState , useEffect } from 'react'
import {TiThMenuOutline} from 'react-icons/ti'

const Navbar = () => {

    const [isScrollDown , setScrollDown ] = useState(false);

    const HandleScroll = () => {
        const ofset = window.scrollY;


        if( ofset > 200 ) {
            setScrollDown(true)
        }else {
            setScrollDown(false)
        }


    }

    useEffect(() => {
        window.addEventListener('scroll', () => HandleScroll() );

    }, [isScrollDown])
    

    const router = useRouter();


    return (
        <nav className={`${isScrollDown ? `${styles.active} ` :  "" } ${styles.navbar}`}>
            <div className={styles.logo}>The Singto</div>
            <div className={styles.menubar}>
                <ul>
                    <li className={`${router.pathname == "/" ? `${styles.active}` : "" }`}><Link href="/"><a>Home</a></Link></li>
                    <li className={`${router.pathname == "/about" ? `${styles.active}` : "" }`}><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="/project"><a>Project</a></Link></li>
                </ul>
            </div>
            <div className={styles.hamburger_menu}><TiThMenuOutline /></div>
        </nav>
    )
}


export default Navbar;