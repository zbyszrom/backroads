import React from "react"
import { Link } from "gatsby"
import styles from './simpleHero.module.scss'

const SimpleHero = ({ children }) => {
  return (
    
  <header className="defaultHero">{children}
  
  <div className={styles.banner}>
  <h1> Continue exploring</h1>
  <p>Welcome to your new Gatsby site.</p>
  <Link to="/tours" className = "btn-white">expolore tours</Link>
  
  </div>
  </header>
    
  )
}

export default SimpleHero
