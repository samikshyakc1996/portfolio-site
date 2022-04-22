import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/layout"
import Link from "next/link"
import styles from "../../components/layout.module.css"
// import Script from "next/script"
export default function experience(){
    return(
        <>
        <Layout>
        <Head>
            <title>Experience</title>
        </Head>
        <div className={styles.experienceWrapper}>
        <h1 className={styles.pageTitle}> Experience</h1>
        <p>
            I hold a bachelors degree in Software Engineering.

        </p>
        <p>
            I also have Project Management graduate certificate in IT.
        </p>
        <p>
            Currently I am doing Web Design and Development at Humber.
        </p>
        <p>
            I have been working as a Front-End developer for over 5 years now.
            I love developing interacting sites using <em>HTML5, CSS3, Javascript.</em>
            
        </p>
        <p>
            Recently, I have started using <em>REACT JS framework, Next JS and Node JS.</em>
             Plus few other templates just as <em>EJS, Mustache </em>etc. 
            More time I spend with these frameworks more I love web designing.
        </p>
        
        <p>
            I have done internship in Software Testing and quality assurance. Both manual and 
            automation testings were practiced during that time.
        </p>
        
        </div>
        </Layout>
      
        </>
    )
}