import styles from "./layout.module.css"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import Link from "next/Link"
function Footer() {
    return (
      <footer className={styles.footer}>
        
        <p>Get in touch with me via: 
            <a href="">
        <Link href="https://github.com/samikshyakc1996">
        <AiFillGithub className={styles.icons}/>
        </Link>
        </a>
        <a href="">
        <Link href="https://www.linkedin.com/in/samikshya-kc-15a7401a6/">
        <AiFillLinkedin className={styles.icons}/>
        </Link>
        </a>
        </p>
      </footer>
    );
  }
  export default Footer;