import resume_pdf from "../img/resume-summer-2022.pdf";
import Layout  from "./layout";
import '../style/Resume.css';

function Resume() {
    return (
        <div>
            <Layout />
            <div className="resume-page">
                <h2 className="resume-title title">Resume</h2>
                <div id="resume-experience">
                    <div className="resume-download">
                        <h3 className="sub-title">Experience</h3>
                        <div className="download">
                            <a href={resume_pdf} download="Javon Hickmon Resume"><button>DOWNLOAD</button></a>
                        </div>
                    </div>
                    <div className="resume-card amazon">
                        <div className="resume-card-left">
                            <div className="job-info">
                                <h3 className="resume-card-subheader">SDE Intern</h3>
                                <hr className="divider" />
                                <h4>Amazon</h4>
                                <h5>2022</h5>
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
                                <h5>2022</h5>
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
                    <div className="resume-card uw">
                        <div className="resume-card-left">
                            <div className="job-info">
                                <h3 className="resume-card-subheader">Teaching Assistant</h3>
                                <hr className="divider" />
                                <h4>University of Washington</h4>
                                <h5>2022</h5>
                            </div>
                        </div>
                        <div className="resume-card-right">
                            <div className="job-description">
                                <ul>
                                    <li>
                                        For the CSE 143: Intro to Programming course
                                    </li>
                                    <br />
                                    <li>
                                        Taught Java programming concepts such as programming using 
                                        ADTs, generative/structural recursion, and the 
                                        intricacies of binary trees.
                                    </li>
                                    <br />
                                    <li>
                                        Performed weekly one-hour check-ins with multiple students.
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
                                <h3 className="college-name"><b>Olympic College</b> - Associates of Arts</h3>
                                <ul>
                                    <li>2019 - 2021</li>
                                    <li>Running Start Student</li>
                                </ul>
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
                                    Java (4 years), Python (3 years), JS (3 years), HTML/CSS (4 years), React JS (1 year)
                                    </li>
                                </ul>
                            </div>
                            <div id="learning" className="technical-skills">
                                <h3>Learning</h3>
                                <ul>
                                    <li>
                                    PyTorch, React Native
                                    </li>
                                </ul>
                            </div>
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

export default Resume;