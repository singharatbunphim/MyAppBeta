import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import styles from '../styles/main.module.scss'


export default function Home() {
  return (
    <div>
        <Navbar />
        <section className={styles.section}>Hello Home</section>
        <Footer />
    </div>
  )
}
