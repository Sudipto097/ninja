import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Test Next JS</h1>
        <p>Hey gang, in this Next.js tutorial we'll take a look at how pages & routes are created using React components.</p>
        <p>https://youtu.be/zktJ8-k0JDc?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw</p>
        <Link href="/ninjas">
            <a>See Ninja</a>
        </Link>
        <Footer />
    </div>
  )
}
