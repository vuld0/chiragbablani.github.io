import React from 'react';
import styles from './Footer.module.scss';
import { VscGithubInverted, VscTwitter } from 'react-icons/vsc';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import {MdMail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/vuld0">
        <VscGithubInverted className={styles.icon} />
      </a>
      <a href="https://twitter.com/vuld0">
        <VscTwitter className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/chiragbablani0/">
        <FaLinkedinIn className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/chirag_bablani/">
        <SiInstagram className={styles.icon} />
      </a>
      <a href="mailto:chiragsonubablani@gmail.com">
        <MdMail className={styles.icon} />
      </a>
    </div>
  );
};

export default Footer;
