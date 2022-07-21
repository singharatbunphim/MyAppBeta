import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import styles from '../styles/main.module.scss'
import Head from 'next/head'
import PersonalProfile from '../component/content/personalProfile'


export default function Home() {
  return (
    <div>
        <Head>
            <title>The Singto</title>
        </Head>
        <Navbar />
        <PersonalProfile />
        <Footer />
    </div>
  )
}

