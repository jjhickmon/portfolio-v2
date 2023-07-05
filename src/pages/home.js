import '../style/Home.css';
import Layout from './layout';
import {NavLink} from "react-router-dom";

function Home() {

    return (
        <div>
            <Layout />
            <div className="page main-page">
                <div className="main">
                    <div className="main-photo">
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
                            Hello
                        </h1>
                        <h5>
                            Here's who I am & what I do
                        </h5>
                        <div className="main-buttons">
                            <div className="resume-button">
                                <NavLink to="/experience"><button type="button">EXPERIENCE</button></NavLink>
                            </div>
                            <div className="projects-button">
                                <NavLink to="/projects"><button type="button">PROJECTS</button></NavLink>
                            </div>
                        </div>
                        <p>
                            I am broadly interested in Computer Vision; however, my specific interests 
                            include Multimodal Machine Learning and Fair Machine Learning.
                            <br /><br />
                            My goal is to utilize multiple modalities in order to create systems that can truly 
                            understand the semantics of our world and can effectively use this semantic knowledge 
                            in real-world interaction and prediction.
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
                        Last updated July 2023
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;