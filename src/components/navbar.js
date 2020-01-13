import React from 'react'
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import links from "../constans/links"
import socialIcons from "../constans/social-icons"
import logo from "../images/logo.svg"
import styles from "./navbar.module.scss"


const Navbar = () => {
    return (
      <nav>
       
      <img src={logo} alt="backroads logo" />
      <button type="button" className={styles.btn}>
            <FaAlignRight className={styles.icon}/>
          </button>
      
      <div className={styles.socialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </nav> 
    )
    
}

export default Navbar