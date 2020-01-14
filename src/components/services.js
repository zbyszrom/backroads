import React from 'react'
import services from "../constants/services"
import styles from "./services.module.scss"

const Services =()=>
{
    return (
        <section style={{background: 'var(--mainGrey)'}}>
        <div className='title'>
        <h4>Our <span>Services</span></h4>
        </div>
        <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
        </div>
        </section>
    )
}

export default Services