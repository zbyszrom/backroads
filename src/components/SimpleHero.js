import React from "react"
import { Link } from "gatsby"
import styles from './SimpleHero.module.scss'

const SimpleHero = ({ children }) => {
  return (
    
  <header className="defaultHero">{children}
  
  <div className={styles.banner}>
  <h1> Continue exploring</h1>
  <p>Welcome to my presentation</p>
  <Link to="/tours" className = "btn-white">all tours</Link>
  
  </div>
  </header>
    
  )
}

export default SimpleHero
