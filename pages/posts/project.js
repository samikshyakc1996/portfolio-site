import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/layout"
import styles from "../../components/layout.module.css"
import Link from "next/link"
// import Script from "next/script"
export default function project(){
    return(
        <>
        <Layout>
        <Head>
            <title>Projects</title>
        </Head>
        <h1 className={styles.pageTitle}>Projects</h1>
        <a href="">
        <Link href="https://samikshyakc1996.github.io/weather-app-project/">
       <div className={styles.projectCard_odd}>
        <Image  src="/images/weather-pic.png"
                width={200}
                height={200}
                alt="Weather-app"
                
        />
        <p>Weather app. It provides the temperature for the entered cities.</p>
        </div>
        </Link>
        </a>
        <a href="">
        <Link href="https://samikshyakc1996.github.io/audio-player-project/">
        <div className={styles.projectCard_even}>
        <p>Audio app. There are lists of songs which lets us to play any song of our choice. </p>

        <Image src="/images/audio-app-pic.png"
                width={200}
                height={200}
                alt="Audio-player-app"
        />
        </div>
        </Link>
        </a>
        <a href="">
        <Link href="https://cool-kheer-e3c3fc.netlify.app/">
        <div className={styles.projectCard_odd}>
        <Image src="/images/recipe-app.png"
                width={200}
                height={200}
                alt="Recipe-app"
        />
        <p>Recipe app. This app provides us the recipe information and ingredients for myriads of items.</p>
        </div>
        </Link>
        </a>
        <a href="">
        <Link href="https://luminous-lebkuchen-52b841.netlify.app/">
        <div className={styles.projectCard_even}>
        <p> E-commerce site. Here we can add items to bags and proceed to checkout page.
        </p>
        <Image src="/images/e-commerce.png"
                width={200}
                height={200}
                alt="E-commerce-site"
        />
       
        </div>
        </Link>
        </a>
        <a href="">
        <Link href="https://ronaksakhuja.github.io/wddmphotogallery/login.html">
        <div className={styles.projectCard_odd}>
        <Image src="/images/photostash.png"
                width={200}
                height={200}
                alt="PhotoGallery-app"
        />
        <p>Photostash. This is a photo gallery app where user can log in, add images, delete if they want to and store them in a firebase database.</p>
        </div>
        </Link>
        </a>
        <a href="">
        <Link href="https://samikshyakc1996.github.io/fetch-api/">
        <div className={styles.projectCard_even}>
        <p>BMI-app. This app is to measure your BMI(Body Mass Index). After entering your height and weight, the app displays your BMI.</p>

        <Image src="/images/BMI-app.png"
                width={200}
                height={200}
                alt="BMI-APP"
        />

        </div>
        </Link>
        </a>
        <a href="">
        <Link href="https://slides.com/samikshya/serif">
        <div className={styles.projectCard_odd}>
        <Image src="/images/logo.png"
                width={200}
                height={160}
                alt="Home decor app"
        />
        <p>This is a home decor business plan. Here, we offer services such as interior designing,
                maintenance of house appliances.
        </p>
        </div>
        </Link>
        </a>
        {/* <Script src="/js/main.js"
        strategy="lazyOnLoad"
        /> */}
        
        </Layout>
       
        </>
    )
}

