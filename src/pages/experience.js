import React, { useEffect, useRef } from "react";
import resume_pdf from "../img/Javon-Hickmon-CV.pdf";
import Layout from "./layout";
import "../style/Experience.css";

function Experience() {
    var card = useRef(null);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(function () {
        document
            .querySelectorAll(".resume-card")
            .forEach(function (resume_card) {
                resume_card.addEventListener("click", function () {
                    card.current = resume_card;
                    resume_card.style.zIndex = "0";
                    openSubpage();
                });
                resume_card.addEventListener("mouseover", function () {
                    if (card.current === null) {
                        document.getElementById(
                            "subpage-background"
                        ).style.transition =
                            "all 0.3s ease, z-index 1ms ease-out";
                        document.getElementById(
                            "subpage-background"
                        ).style.opacity = "1";
                        document.getElementById(
                            "subpage-background"
                        ).style.zIndex = "1";
                        resume_card.style.transition =
                            "all 0.3s ease, z-index 1ms ease-out";
                        resume_card.style.zIndex = "2";
                    }
                });
                resume_card.addEventListener("mouseout", function () {
                    if (card.current === null) {
                        document.getElementById(
                            "subpage-background"
                        ).style.transition =
                            "all 0.3s ease, z-index .5s ease-in";
                        document.getElementById(
                            "subpage-background"
                        ).style.opacity = "0";
                        document.getElementById(
                            "subpage-background"
                        ).style.zIndex = "-1";
                        resume_card.style.transition =
                            "all 0.3s ease, z-index .3s ease-in";
                        resume_card.style.zIndex = "0";
                    }
                });
            });
    });

    function closeSubpage(event) {
        let subpage = document.getElementById("subpage");
        let subpage_background = document.getElementById("subpage-background");
        let target_element = event.target; // clicked element
        do {
            if (target_element === subpage || target_element === card.current) {
                return;
            }
            // Go up the DOM
            target_element = target_element.parentNode;
        } while (target_element);
        subpage.style.zIndex = "0";
        subpage.style.top = "50vh";
        subpage.style.width = "0";
        subpage.style.height = "0";
        subpage_background.style.opacity = "0";
        subpage_background.style.zIndex = "-1";
        card.current = null;
        document.removeEventListener("click", closeSubpage);
    }

    // NOTE: Make sure to add every new subpage to App.js
    function openSubpage() {
        let page_name = card.current.id;
        document.getElementById("subpage").src =
            window.location.href + "/" + page_name;
        document.getElementById("subpage").style.zIndex = "3";
        document.getElementById("subpage").style.width = "70vw";
        document.getElementById("subpage").style.height = "70vh";
        document.getElementById("subpage").style.top = "15vh";
        document.getElementById("subpage-background").style.opacity = "1";
        document.getElementById("subpage-background").style.zIndex = "1";
        // Close subpage if clicked outside
        document.addEventListener("click", closeSubpage);
    }

    return (
        <div>
            <Layout />
            <div className='resume-page'>
                <h1 className='page-title'>Experience</h1>
                <iframe id='subpage' title='subpage' src=''></iframe>
                <div id='subpage-background'></div>
                <div id='resume-experience'>
                    <div className='download'>
                        <a href={resume_pdf} target='_blank' rel='noreferrer'>
                            <button>DOWNLOAD MY CV</button>
                        </a>
                    </div>
                    <div className='resume-top-container'>
                        <div className='resume-card' id='raivn'>
                            <div className='resume-card-left'>
                                <div className='job-info'>
                                    <h3 className='resume-card-subheader'>
                                        Undergraduate Researcher
                                    </h3>
                                    <hr className='divider' />
                                    <h4>RAIVN Lab</h4>
                                    <h5>Dec. 2022 - Present</h5>
                                </div>
                            </div>
                            <div className='resume-card-right'>
                                <div className='job-description'>
                                    <ul>
                                        <li>
                                            Worked to utilize chain-of-thought
                                            prompting as a means of leveraging
                                            the knowledge contained within
                                            Language Models to improve the image
                                            classification task.
                                        </li>
                                        <br />
                                        <li>
                                            Worked with the Open Flamingo team
                                            to improve their ImageNet evaluation
                                            code. I enabled batching and
                                            caching, effectively increasing the
                                            eval rate.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='resume-card' id='peleg'>
                            <div className='resume-card-left'>
                                <div className='job-info'>
                                    <h3 className='resume-card-subheader'>
                                        Undergraduate Researcher
                                    </h3>
                                    <hr className='divider' />
                                    <h4>Peleg Lab</h4>
                                    <h5>June 2023 - Present</h5>
                                </div>
                            </div>
                            <div className='resume-card-right'>
                                <div className='job-description'>
                                    <ul>
                                        <li>
                                            Proposed the implementation of
                                            state-of-the-art Computer Vision
                                            methods to improve the temporal
                                            coherence of the honeybee object
                                            segmentation.
                                        </li>
                                        <li>
                                            Led the research, implementation,
                                            and analysis of the proposed
                                            methods.
                                        </li>
                                        <li>
                                            To follow my journey, you can read
                                            my blog posts{" "}
                                            <a
                                                target='_blank'
                                                rel='noreferrer'
                                                href='https://jjhickmon.github.io/dreu/'>
                                                <b>here</b>
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pop-up">
                            <h4>Click to learn more!</h4>
                        </div>
                    </div>
                    <div className='resume-bottom-container'>
                        <div className='resume-bottom-bg'></div>
                        <div className='resume-card' id='uw'>
                            <div className='resume-card-left'>
                                <div className='job-info'>
                                    <h3 className='resume-card-subheader'>
                                        Teaching Assistant
                                    </h3>
                                    <hr className='divider' />
                                    <h4>University of Washington</h4>
                                    <h5>Mar. 2022 - Present</h5>
                                </div>
                            </div>
                            <div className='resume-card-right'>
                                <div className='job-description'>
                                    <ul>
                                        <li>
                                            Assisted in the teaching
                                            and curriculum development for the
                                            12X series' workshops. These
                                            workshops support first-generation,
                                            low-income, and underrepresented
                                            students in Computer Science at the
                                            University of Washington.
                                        </li>
                                        <br />
                                        <li>
                                            Taught introductory Java programming
                                            concepts, selected catered problems
                                            for students, and hosted weekly 1-on-1
                                            check-ins.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='resume-card' id='amazon'>
                            <div className='resume-card-left'>
                                <div className='job-info'>
                                    <h3 className='resume-card-subheader'>
                                        SDE Intern
                                    </h3>
                                    <hr className='divider' />
                                    <h4>Amazon</h4>
                                    <h5>June 2022 - Sept. 2022</h5>
                                </div>
                            </div>
                            <div className='resume-card-right'>
                                <div className='job-description'>
                                    <ul>
                                        <li>
                                            Built technologies within a large
                                            distributed computing environment
                                            that impacted the experience of
                                            millions of Amazon sellers
                                            worldwide.
                                        </li>
                                        <br />
                                        <li>
                                            Designed, developed, and implemented
                                            features for a full-stack mobile
                                            application with a heavy focus on
                                            RESTful APIs, code architecture, and
                                            test automation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='resume-card' id='code-org'>
                            <div className='resume-card-left'>
                                <div className='job-info'>
                                    <h3 className='resume-card-subheader'>
                                        AP CSA Presenter
                                    </h3>
                                    <hr className='divider' />
                                    <h4>Code.org</h4>
                                    <h5>Mar. 2022</h5>
                                </div>
                            </div>
                            <div className='resume-card-right'>
                                <div className='job-description'>
                                    <ul>
                                        <li>
                                            Presented Computer Science
                                            Principles in a fun and engaging
                                            manner for the Code.org AP Computer
                                            Science A curriculum.
                                        </li>
                                        <br />
                                        <li>
                                            Millions of high school students
                                            furthered their learning using the
                                            content.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pop-up">
                            <h4>Click on a card to learn more!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
