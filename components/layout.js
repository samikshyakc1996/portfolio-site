import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles  from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from "./Footer"
const name = 'Samikshya K C'

export default function Layout({ children, home }) {
  return (
    <>
    <div className={styles.container}>
  
      <header className={styles.header}>
        {home ? (
          <>
            
            <h1 className={utilStyles.name}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={200}
                  width={150}
                  alt={name}
                />
                
                
              </a>
            </Link>
            <h2 className={utilStyles.name}>
              <Link href="/">
                <a className={utilStyles.name}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
     
      {/* {!home && (
        
        <div className={styles.backToHome}>
          {/* <Link href="/">
            <a>← Back to home</a>
          </Link> */}
        {/* </div> */}
      {/* )}  */}
    </div>
    <Footer/>
    </>
  )
}
