import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.title}>
      <h1>Test Next JS</h1>
        <p className={styles.text}>Hey gang, in this Next.js tutorial we'll take a look at how pages & routes are created using React components.</p>
        <p className={styles.text}>https://youtu.be/O3yKwz4wRHc?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw</p>
        <Link href="/ninjas">
            <a className={styles.btn}>See Ninja</a>
        </Link>

    </div>
  )
}
