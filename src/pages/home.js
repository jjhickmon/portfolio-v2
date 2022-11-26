import '../style/Home.css';
import Layout from './layout';

function Home() {

    return (
        <div>
            <Layout />
            <div className="page main-page">
                <div className="main">
                    <div className="main-photo">
                        <div className="card">
                            <div className="card-header">
                                <h2>Javon Hickmon</h2>
                            </div>
                            <div className="card-footer">
                                <ul class="card-socials">
                                    <li>
                                        <a href="mailto:javonh@uw.edu">
                                            <img src="https://img.icons8.com/small/32/FFFFFF/new-post.png" alt="mail icon"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/javonh/" target="_blank" rel="noreferrer" aria-label="linkedin">
                                            <img src="https://img.icons8.com/small/32/FFFFFF/linkedin.png" alt="linkedin icon"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/jjhickmon" target="_blank" rel="noreferrer" aria-label="github">
                                            <img src="https://img.icons8.com/small/32/FFFFFF/github.png" alt="github icon"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/jjhickmon" target="_blank" rel="noreferrer" aria-label="twitter">
                                            <img src="https://img.icons8.com/small/32/FFFFFF/twitter.png" alt="twitter icon"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="intro">
                        <h1>
                            Hello
                        </h1>
                        <h5>
                            Here's who I am & what I do
                        </h5>
                        <div className="main-buttons">
                            <div className="resume-button">
                                <a href="resume"><button type="button">RESUME</button></a>
                            </div>
                            <div className="projects-button">
                                <a href="projects"><button type="button">PROJECTS</button></a>
                            </div>
                        </div>
                        <p>
                            My goal is to use Computer Science to further our understanding and knowledge of the world.
                            <br /><br />
                            I am currently interested in applications of Computer Vision through Deep Learning.
                        </p>
                    </div>
                </div>
                <footer>
                    <ul>
                        <li>Call<br />360-551-0375</li>
                        <li>Write<br />javonh@uw.edu</li>
                        <li className="footer-follow">Follow<br />
                            <a href="mailto:javonh@uw.edu">
                                <img src="https://img.icons8.com/small/16/1A1A1A/new-post.png" alt="mail icon"/>
                            </a>

                            <a href="https://www.linkedin.com/in/javonh/" target="_blank" rel="noreferrer" aria-label="linkedin">
                                <img src="https://img.icons8.com/small/16/1A1A1A/linkedin.png" alt="linkedin icon"/>
                            </a>
                            <a href="https://github.com/jjhickmon" target="_blank" rel="noreferrer" aria-label="github">
                                <img src="https://img.icons8.com/small/16/1A1A1A/github.png" alt="github icon"/>
                            </a>
                            <a href="https://twitter.com/jjhickmon" target="_blank" rel="noreferrer" aria-label="twitter">
                                <img src="https://img.icons8.com/small/16/1A1A1A/twitter.png" alt="twitter icon"/>
                            </a>
                        </li>
                    </ul>
                </footer>
                <footer className="attribution-home">
                    <a target="_blank" rel="noreferrer" href="https://icons8.com/">
                        App icons by Icons8<br/>
                        Copyright © 2022 Javon Hickmon - All Rights Reserved.
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default Home;