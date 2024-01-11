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
                <div className="main">
                    <div className="main-photo-container">
                        <div className="main-photo"></div>
                        <div className="card">
                            <div className="card-header portrait">
                                {/* <h2>Javon Hickmon</h2> */}
                            </div>
                            <div className="card-footer">
                                <ul className="card-socials">
                                    <li>
                                        <a href="mailto:javonh@uw.edu">
                                            <img src="https://img.icons8.com/small/128/FFFFFF/new-post.png" width="32px" heigth="32px" alt="mail icon"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/javonh/" target="_blank" rel="noreferrer" aria-label="linkedin">
                                            <img src="https://img.icons8.com/small/128/FFFFFF/linkedin.png" width="32px" heigth="32px" alt="linkedin icon"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/jjhickmon" target="_blank" rel="noreferrer" aria-label="github">
                                            <img src="https://img.icons8.com/small/128/FFFFFF/github.png" width="32px" heigth="32px" alt="github icon"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="intro">
                        <h1 className="hello">
                            Javon Hickmon
                        </h1>
                        <h5>
                            Undergraduate Researcher @ <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://www.cs.washington.edu/'>
                                UW
                            </a>
                        </h5>
                        <div className="main-buttons">
                            <div className="resume-button">
                                <NavLink to="/experience" style={{ textDecoration: 'none' }}><button type="button">EXPERIENCE</button></NavLink>
                            </div>
                            <div className="projects-button">
                                <NavLink to="/projects" style={{ textDecoration: 'none' }}><button type="button">PROJECTS</button></NavLink>
                            </div>
                        </div>
                        <p>
                            I am broadly interested in <b>Machine Perception</b> and <b>Responsible AI</b>; however, my specific interests include 
                            Multimodal Machine Learning and Fair ML. 
                            <br/><br/>
                            My goal is to create robust, generalizable, and equitable systems that can
                            effectively use their semantic knowledge in real-world interaction and prediction.
                        </p>
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
                    <div className="attribution-home">
                        Last updated January 2024
                    </div>
                </footer>
            </motion.div>
        </div>
    );
}

export default Home;
