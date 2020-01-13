import React from 'react'
import styles from "./footer.module.scss"
import { Link } from "gatsby"
import links from "../constans/links"
import socialIcons from "../constans/social-icons"
const Footer = () => {
    return (
      <footer>
      <div className={styles.icons}>
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
      <div className={styles.copyright}>
      copyright &copy; backroads travel company {new Date().getFullYear()} all
      rights reserved
    </div> 
    </footer>
      )
}

export default Footer