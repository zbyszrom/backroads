import React from "react"
import Layout from "../components/layout"
import styles from "./contact.module.scss"

const Contact = () => (
    <Layout>
      <section className={styles.contact}>
     <div className='title'>
        <h4>Contact <span>Us</span></h4>
        </div>
      
      <div className={styles.center}>
        <form
          action="https://formspree.io/youremail@email.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
             
            />
          </div>
          <div>
            <label htmlFor="email">email</label>

            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              
            />
          </div>
          <div>
            <label htmlFor="message">message</label>

            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
             
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className="btn-primary"
            />
          </div>
        </form>
      </div>
      </section> 
    </Layout>
  )
  
  export default Contact

