import React from 'react'
import img from "../images/defaultBcg.jpg"
import styles from './about.module.scss'
const About =()=>
{
    return (
        <section>
        <div className='title'>
        <h4>About <span>Us</span></h4>
        </div>
        <div className={styles.center}>
        <article className={styles.img}>
        <div className={styles.imgContainer}>
        <img src={img} alt="about company" />
        </div>
        </article>
        <article className={styles.info}>
        <h4>explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>  
        </article>
        </div>
        </section>
    )
}

export default About