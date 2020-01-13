import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"
import styles from "./navbar.module.scss"


const Navbar = () => {
  
  
    return (
      <nav > 
        <div className={styles.center}>
        <div className={styles.header}>      
      <img src={logo} alt="backroads logo" />
      <button type="button" className={styles.btn}>
        <FaAlignRight className={styles.icon}/>
          </button>
        </div>
        <ul className={styles.links}>
          
        {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
      
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
       </div>
      </nav> 
    )
      
        }

export default Navbar