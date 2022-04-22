import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/layout"
import styles from "../../components/layout.module.css"

import Link from "next/link"
// import Script from "next/script"
export default function hobbies(){
    return(
        <>
        <Layout>
        <Head>
            <title>Hobbies</title>
        </Head>
        <div className={styles.hobbiesWrapper}>
        <h1 className={styles.pageTitle}>Hobbies</h1>
        
       
        {/* <Script src="/js/main.js"
        strategy="lazyOnLoad"
        /> */}
        
        <h2>Reading Books</h2>
        <p>Reading books, I believe is a great way to to become a better you. It helps us to develop socially, connect with people while improving one`&apos;`s reading, writing ability.</p>
        <p>
        Though there isn`&apos;`t much in my list, its my 2022 resolution to add a lot more numbers in the list. Here are some of the books I have read:
        </p>
        <h2> 1) Gone Girl</h2>
        <Image src="/images/gonegirl.jpeg"
                width={200}
                height={200}
                alt="gonegirl"
        />
<p>
This is my first book. I first watched a movie then came to this book. Since then I enjyoed reading.
</p>
<p>
Amy, a wife of Nick Dunne, disappears in their 5th wedding anniversary. Media focuses on the husband and suspects he may not be innocent.
</p>

<h2> 2) Tempting Fate</h2>
<Image src="/images/tempting_fate.jpeg"
                width={200}
                height={200}
                alt="Tempting fate"
        />
<p>
        This is a beautiful piece by a best-selling author Jane Green. The book describes about risks and rewards of `&quot;`Having it all`&quot;`, when Gabby in her fourties and after about twenty years of marriage starts too feel void, and realises her youth slipping.
        </p>
<h2>3) Girl Missing</h2>

<Image src="/images/girl_missing.png" width={200}
                height={200}alt="Girl Missing"/>
<p>
I recently read this book. I just fell in love with the string and firece character Katrina, Kat is. She is a Medical examiner, goes to any extent to find out the truth behind who is killing junkies. Everyday she deals with corpse and here is a small part of the conversation I liked: <br/>

`&apos;`Found out I couldn`&apos;`t stand being around sick people. `&apos;` She shook her head and laughed `&apos;`Imagine that.`&apos;`

`&apos;`So you chose the morgue.`&apos;`

`&apos;`It`&apos;`s quiet. It`&apos;`s contained.`&apos;`
</p>

<h1>Travel</h1>

<h4>I love Travelling</h4>

<p>
I am from Nepal. A country full of beauty. Nepal is a blessed country with numerous mountains, lakes, rivers and forests.
</p>
<p>
We have 8 out of the 14 mountains above 8,000 meters in Nepal. Mount Everest, Kanchenjunga, Lhotse, Makalu, Dhaulagiri, Manaslu, Annapurna, and Cho-Oyu are the eight mountains that are over 8,000 meters.
</p>
<p>

<h3> Macchapuchre Basecamp</h3>

<p>
I have been to Macchapuchre base camp, which is another beautiful mountain in my hometown.</p>
</p>
<Image src="/images/basecamp.jpeg" alt="basecamp pic" width={200}
                height={200}
                />

<h2> Sikkim</h2>

<p>
Sikkim is another beautiful city sharing border with Bhutan, India, and Tibet.
This picture below is of Lake lachung wearing traditional costume of the place.
</p>
<Image src="/images/sikkim.jpeg" alt="Sikkim-costume" width={200}
                height={200}
               />
</div>
        </Layout>
        
        </> 
    )
}