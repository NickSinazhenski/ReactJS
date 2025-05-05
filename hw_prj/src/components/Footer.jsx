import React, { Component } from 'react';
import styles from './Footer.module.css';
import footerLinks from './footerLinks.js';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left_upper}>
              <img className={styles.logo} src={logo} alt="Logo" />
              <p className={styles.left_upper_txt}>
                Takeaway & Delivery template<br />
                for small - medium businesses.
              </p>
            </div>
            <div className={styles.columns}>
              {footerLinks.map((column, index) => (
                <div key={index} className={styles.column}>
                  <h4>{column.title}</h4>
                  {column.links.map((link, idx) => (
                    <a key={idx} href={link.href}>{link.name}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <hr className={styles.separator} />

          <div className={styles.bottom_txt}>
            <p>
              Built by <span className={styles.bottom_txt_clr}>Flowbase</span> · Powered by <span className={styles.bottom_txt_clr}>Webflow</span>
            </p>
            <div className={styles.social_medias}>
                <a href="" >
                     <img src={instagram} alt="Instagram" />
                </a>
                <a href="" >
                     <img src={twitter} alt="Twitter" />
                </a>
                <a href="" >
                    <img src={youtube} alt="YouTube" />
                </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;