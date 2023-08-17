import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.container}>
          <p className={styles.title}>Chirag Bablani</p>
          <p className={styles.about}>
            I'm a 23-year-old Information Security Enthusiast working as a Junior Software
            Engineer at{' '}
            <a
              href="https://www.cognizant.com/us/en"
              target="_blank"
              className={styles.link}
            >
              Cognizant
            </a>
            , previously I worked as a Student Developer at{' '}
            <a
              href="https://owasp.org/"
              target="_blank"
              className={styles.link}
            >
              OWASP
            </a>
            , through Google Summer of Code(GSoC) 2020 program.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
