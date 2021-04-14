import Head from "next/head";
import styles from '../../styles/Ninjas.module.css'
import Link from "next/link";

export const getStaticProps =async () =>{
    const res = await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return{
        props:{ ninjas:data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja | NINJA </title>
                <meta name='keywords' content="ninjas"/>
            </Head>
            <div>
                <h1>
                    All NINJAS :)
                </h1>
                { ninjas.map(ninjas=>(
                    <Link href={'/ninjas/' + ninjas.id} key={ninjas.id}>
                        <a className={styles.single}>
                            <h3>
                                {ninjas.name}
                            </h3>
                        </a>
                    </Link>
                )) }
            </div>
        </>
    )
}

export default Ninjas;