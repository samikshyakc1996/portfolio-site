import Head from "next/head"
import Image from "next/image"
import Layout from "../components/layout"
import styles from '../components/layout.module.css'
import Link from "next/link"

import Intro from "../components/Intro"

// import Script from "next/script"
 function FirstPost(){
    return(
        <>
<Layout>
<div className={styles.body}>
        <Head>
            <title>Home-page</title>
        </Head>
        <Intro/>
        {/* <Cards> */}
    <div className={styles.cards}>
            
        <Link href="./posts/project">
       <div className={styles.card}>
           <a href="">
       <Image className={styles.image} src="/images/project.png"
                width={160}
                height={180}
                alt="water"
        />
        <figcaption className={styles.figcaption}>Project</figcaption>
        </a>
       </div>
       
        </Link>
        
        {/* <p>     Hobbies page</p> */}
        <Link href="./posts/hobbies">
       <div className={styles.card}>
           <a href="">
        <Image className={styles.image} src="/images/hobby.jpeg"
                width={160}
                height={180}
                alt="water"
        />
        <figcaption className={styles.figcaption}>Hobbies</figcaption>
        </a>
        </div>
        </Link>
        
        {/* <p>Experience</p> */}
        <Link href="./posts/experience">
        <div className={styles.card}>
            <a href="">
        <Image className={styles.image} src="/images/experience.jpg"
                width={160}
                height={180}
                alt="water"
                
        />
        <figcaption className={styles.figcaption}>Experience</figcaption>
        </a>
        </div>
        </Link>
    </div>
        
</div>
</Layout>

        </>
    )

    
}

export default FirstPost;