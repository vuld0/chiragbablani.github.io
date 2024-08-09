import styles from './About.module.scss';

const About = () => {
return (
<main className={styles.main}>
<div className={styles.container}>
<p className={styles.title}>About Me</p>
<p className={styles.about}>
Hi, I’m Chirag Bablani, a 24-year-old currently based in Bangalore, India, originally from Ahmedabad, Gujarat. I’m working as a Software Engineer at Cognizant, but I’m on the lookout for new opportunities in the information security field.
<br />
<br />When I’m not coding, I’m either diving into the world of hacking, working on side projects, or enjoying video games and cricket.
<br />
<br />If you have an interesting project, want to collaborate, or just want to chat, feel free to connect with me on social media or drop me an email!
</p>
</div>
</main>
);
};

export default About;