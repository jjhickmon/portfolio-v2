import resume_pdf from "../img/cv-spring-2023.pdf";
import Layout  from "./layout";
import '../style/Experience.css';

function Experience() {
    return (
        <div>
            <Layout />
            <div className="resume-page">
                <h2 className="resume-title title">Experience</h2>
                <div id="resume-experience">
                    <div className="resume-download">
                        {/* <h3 className="sub-title">Resume</h3> */}
                        <div className="download">
                            <a href={resume_pdf} target="_blank"><button>DOWNLOAD MY CV</button></a>
                        </div>
                    </div>
                    <div className="resume-card raivn">
                        <div className="resume-card-left">
                            <div className="job-info">
                                <h3 className="resume-card-subheader">Undergraduate Researcher</h3>
                                <hr className="divider" />
                                <h4>RAIVN Lab</h4>
                                <h5>Dec. 2022 - Present</h5>
                            </div>
                        </div>
                        <div className="resume-card-right">
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Working to utilize chain-of-thought prompting as a means of leveraging 
                                        the knowledge contained within Language Models to improve the image classification task.
                                    </li>
                                    <br />
                                    <li>
                                        Worked with the Open Flamingo team to improve their ImageNet evaluation code.
                                        I enabled batching and caching, effectively increasing the eval rate.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume-card uw">
                        <div className="resume-card-left">
                            <div className="job-info">
                                <h3 className="resume-card-subheader">Teaching Assistant</h3>
                                <hr className="divider" />
                                <h4>University of Washington</h4>
                                <h5>Mar. 2022 - Present</h5>
                            </div>
                        </div>
                        <div className="resume-card-right">
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Taught CSE 122, 123, 142 & 143.
                                    </li>
                                    <br />
                                    <li>
                                        Taught introductory Java programming concepts and hosted weekly 1-on-1 check-ins.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume-card amazon">
                        <div className="resume-card-left">
                            <div className="job-info">
                                <h3 className="resume-card-subheader">SDE Intern</h3>
                                <hr className="divider" />
                                <h4>Amazon</h4>
                                <h5>June 2022 - Sept. 2022</h5>
                            </div>
                        </div>
                        <div className="resume-card-right">
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Built technologies within a large distributed computing environment 
                                        that impacted the experience of millions of Amazon sellers worldwide.
                                    </li>
                                    <br />
                                    <li>
                                        Designed, developed, and implemented features for a full-stack mobile 
                                        application with a heavy focus on RESTful APIs, code architecture, 
                                        and test automation.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume-card code-org">
                        <div className="resume-card-left">
                            <div className="job-info">
                                <h3 className="resume-card-subheader">AP CSA Presenter</h3>
                                <hr className="divider" />
                                <h4>Code.org</h4>
                                <h5>Mar. 2022</h5>
                            </div>
                        </div>
                        <div className="resume-card-right">
                            <div className="job-description">
                                <ul>
                                    <li>
                                        Presented Computer Science Principles in a fun and engaging 
                                        manner for the Code.org AP Computer Science A curriculum.
                                    </li>
                                    <br />
                                    <li>
                                        Millions of high school students furthered their learning 
                                        using the content.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resume-bottom-container">
                    <div id="resume-education">
                        <h3 className="resume-card-subheader">Education</h3>
                        <hr className="bottom-divider" />
                        <div className="education-list">
                            <div className="uw-bs">
                                <h3 className="college-name"><b>University of Washington</b> - BS Computer Science</h3>
                                <ul>
                                    <li>2021 - 2024</li>
                                    <li>Direct Admission: Paul G. Allen School of Computer Science</li>
                                </ul>
                            </div>
                            <div className="olypmic-aa">
                                <h3 className="college-name"><b>Olympic College</b> - AA</h3>
                                {/* <ul>
                                    <li>2019 - 2021</li>
                                    <li>Running Start Student</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <div id="resume-skills">
                        <h3 className="resume-card-subheader">Skills</h3>
                        <hr className="bottom-divider" />
                        <div className="skills-list">
                            <div id="proficient" className="technical-skills">
                                <h3>Proficient In</h3>
                                <ul>
                                    <li>
                                    Java (5 years), Python (4 years), JS (4 years), HTML/CSS (5 years), React JS (2 years), PyTorch (1 year)
                                    </li>
                                </ul>
                            </div>
                            {/* <div id="learning" className="technical-skills">
                                <h3>Learning</h3>
                                <ul>
                                    <li>
                                    PyTorch, React Native
                                    </li>
                                </ul>
                            </div> */}
                            <div id="tools" className="technical-skills">
                                <h3>Development Tools</h3>
                                <ul>
                                    <li>
                                    Git, Vim, GitHub, VS Code, IntelliJ, Google Colab, Jupyter Notebooks
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;