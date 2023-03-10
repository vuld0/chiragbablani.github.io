import styles from './About.module.scss';

const About = () => {
return (
<main className={styles.main}>
<div className={styles.container}>
<p className={styles.title}>About Me</p>
<p className={styles.about}>
My name is Chirag Bablani and I am a 23-year-old currently residing in Bangalore, India, originally from Ahmedabad, Gujarat. I am currently working as a Junior Software Engineer at Cognizant, but I am actively seeking new opportunities in the field of information security.
<br />
<br />In my free time, I enjoy hacking and learning about it, as well as coding in Python and writing scripts. I also have a passion for gaming and bikes.
<br />
<br />If you have an interesting project or would like to collaborate, or simply want to say hello, please feel free to reach out to me on any of the social platforms provided below, or via email.
</p>
</div>
</main>
);
};

export default About;