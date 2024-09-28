import '../style/Home.css';
import { motion } from "framer-motion";
import Layout from './layout';
import {NavLink} from "react-router-dom";

function Home() {
    const pageMotion = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0, transition: { duration: .8 } },
        exit: { opacity: 0, y: -100, transition: { duration: .3 } }
      };
    return (
        <div>
            <Layout />
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageMotion}
             className="page main-page">
                <div className="main-bg">
                    <div className="main">
                        <div className="main-photo-container">
                            <div className="main-photo"></div>
                        </div>
                        <div className="intro">
                            <h1 className="hello">
                            Javon Hickmon
                            </h1>
                            <h5>
                                Master's Student @ <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.cs.washington.edu/'>
                                    UW
                                </a>
                            </h5>
                            <div className="main-buttons">
                                <div className="resume-button">
                                    <NavLink to="/research" style={{ textDecoration: 'none' }}><button type="button">RESEARCH</button></NavLink>
                                </div>
                                <div className="projects-button">
                                    <NavLink to="/projects" style={{ textDecoration: 'none' }}><button type="button">PROJECTS</button></NavLink>
                                </div>
                            </div>
                            <p>
                                I am broadly interested in <b>Human-AI Interaction</b>, <b>Computer Vision</b>, and <b>Responsible AI</b>.
                                As a result, my current research is centered around Multimodal Machine Learning, Fair ML, and Cognitive Science.
                                <br/><br/>
                                I aim to create systems that facilitate improved human decision-making capabilities, mitigate social injustices, and allow for an improved understanding of cognition.
                                {/* I am currently exploring how we can use Deep Learning to non-invasively measure
                                human cognitive workload. I aim to leverage this information and understand how
                                we can create adaptive decision-making systems that facilitate a reduction in harmful cognitive bias. */}
                                {/* <br/><br/>
                                My goal is to create robust, generalizable, and equitable systems that can
                                effectively use their semantic knowledge in real-world interaction and prediction. */}
                            </p>
                        </div>
                    </div>
                </div>
                <footer>
                    <ul className="footer-contact">
                        <li>Write<br />javonh@uw.edu</li>
                        <li className="footer-follow">Follow<br />
                            <a href="https://www.linkedin.com/in/javonh/" target="_blank" rel="noreferrer" aria-label="linkedin">
                                <img src="https://img.icons8.com/small/16/1A1A1A/linkedin.png" alt="linkedin icon"/>
                            </a>
                            <a href="https://github.com/jjhickmon" target="_blank" rel="noreferrer" aria-label="github">
                                <img src="https://img.icons8.com/small/16/1A1A1A/github.png" alt="github icon"/>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-updated">
                        Last updated September 2024
                    </div>
                </footer>
            </motion.div>
        </div>
    );
}

export default Home;
