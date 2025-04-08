import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left_upper}>
              <img src={logo} alt="logo" className={styles.logo} />
              <p className={styles.left_upper_txt}>
                Takeaway & Delivery template<br />
                for small - medium businesses.
              </p>
            </div>
  
            <div className={styles.columns}>
              <div className={styles.column}>
                <h4>Company</h4>
                <a href="">Home</a>
                <a href="">Order</a>
                <a href="">FAQ</a>
                <a href="">Contact</a>
              </div>
              <div className={styles.column}>
                <h4>Template</h4>
                <a href="">Style Guide</a>
                <a href="">Changelog</a>
                <a href="">Licence</a>
                <a href="">Webflow University</a>
              </div>
              <div className={styles.column}>
                <h4>Flowbase</h4>
                <a href="">More Cloneables</a>
              </div>
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
  };
  
  export default Footer;