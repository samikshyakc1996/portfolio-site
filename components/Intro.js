import React, { Component } from "react";
import styles from './layout.module.css';
class Info extends Component {
  render() {
    return (
      <main>
        <article>
         
          <section id="about">
            <h2>About</h2>
            <div className={styles.intro}>
             
              <p>
                She is a front-end web developer, currently studying a Web
                design and development course at Humber.
              </p>
              <p>
                She has a Software engineer degree and a Project Management-IT
                degree as well.
              </p>
              <p>
                In addition to that She has done numerous other courses to
                enhance her skill such as: Shecodes, Udemy courses,
                Javascript30.
              </p>
            </div>

          </section>
          </article>
          </main>
    );
  }
}

export default Info;