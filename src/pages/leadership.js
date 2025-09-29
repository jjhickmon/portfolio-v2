import Layout from "./layout";
import "../style/Leadership.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Leadership() {
    useEffect(() => {
        if (window.instgrm) window.instgrm.Embeds.process();
    }, []);

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
            variants={pageMotion}  className='static-page'>
            <h1 className='page-title'>Leadership</h1>
            <div className='leadership-page'>
                <div className='leadership-img'></div>
                <div className='leadership-section'>
                    <div className='leadership-card'>
                        <h2 className='leadership-header'>
                           Student Advisor:{" "}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://com2.cs.washington.edu/'>
                                COM²
                            </a>
                        </h2>
                        <h3 className='leadership-date'> May 2024 - May 2025</h3>
                        <div className='leadership-card-body'>
                            <div className='leadership-card-left'>
                                <p>
                                    <b>Seattle Public Schools Outreach</b><br />
                                    Through this role, I was able to develop and host outreach initiatives
                                    in collaboration with Seattle Public Schools. Through these efforts,
                                    12 volunteers from UW presented to 577 SPS students in 22 classes
                                    for 11 teachers at 10 schools! This was the first collaboration between
                                    COM² and SPS, and I am excited to see where this partnership goes in the future.
                                    <br />
                                    <br />
                                    <b>Seattle Public Libraries Outreach</b><br />
                                    In addition, I created the <b>UW's first</b> outreach program between the
                                    Allen School and Seattle Public Libraries. This program aimed to provide
                                    introductory computer science workshops to learners of all ages within the Seattle area.
                                    We recruited 10 volunteers and hosted 4 workshops at library branches within the
                                    North, East, Central, and South regions of Seattle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='leadership-section husky100'>
                    <div className='leadership-card'>
                        <h2 className='leadership-header'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://www.washington.edu/husky100/year/2024/#name=javon-hickmon'>
                                Husky100
                            </a>
                        </h2>
                        <h3 className='leadership-date'> May 2024</h3>
                        <div className='leadership-card-body'>
                            <div className='leadership-card-left'>
                                <p>
                                    Each year, the Husky 100 recognizes 100 undergraduate, graduate and professional students from the UW Bothell, Seattle and Tacoma campuses in all areas of study who are making the most of their time at the University of Washington.
                                </p>
                            </div>
                            <div className='leadership-card-right'>
                                <div className='husky100-img'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='leadership-section education-director'>
                    <div className='leadership-card'>
                        <h2 className='leadership-header'>
                            Education Director:{" "}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://com2.cs.washington.edu/'>
                                COM²
                            </a>
                        </h2>
                        <h3 className='leadership-date'> May 2023 - Present</h3>
                        <div className='leadership-card-body'>
                            <div className='leadership-card-left'>
                                <p>
                                    <b>Objective</b>
                                    <br />
                                    Lead workshops and academic-related
                                    programming for the Allen School students
                                    (e.g. Intro to React Workshop). This is the
                                    first time this role is being offered and
                                    there is room for flexibility in
                                    responsibilities in coordination with the
                                    Chair.
                                    <br />
                                    <br />
                                    <b>Responsibilities</b>
                                </p>
                                <ul>
                                    <li>
                                        Facilitate at least one workshop or
                                        academic-related event per quarter
                                    </li>
                                    <li>
                                        Collaborate with other RSOs and campus
                                        entities (Professors, Staff, etc.)
                                    </li>
                                    <li>
                                        Research student wants and needs to
                                        create relevant programming and
                                        materials Expected Time
                                    </li>
                                </ul>
                            </div>
                            <div className='leadership-card-right'>
                                <iframe
                                    className='leadership-video'
                                    src='https://www.youtube.com/embed/_H1VY1BJsb4?start=58'
                                    title='YouTube video player'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='leadership-section social-events-coordinator'>
                    <div className='leadership-card'>
                        <h2 className='leadership-header'>
                            Social Events Coordinator:{" "}
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://com2.cs.washington.edu/'>
                                COM²
                            </a>
                        </h2>
                        <h3 className='leadership-date'>
                            {" "}
                            May 2022 - May 2023
                        </h3>
                        <div className='leadership-card-body'>
                            <div className='leadership-card-left'>
                                <p>
                                    <b>Objective</b>
                                    <br />
                                    Co-lead the planning and execution of the
                                    Allen School’s quarterly department-wide
                                    social events (Fall Fest, Winter Ball, and
                                    Spring Barbecue).
                                    <br />
                                    <br />
                                    <b>Responsibilities</b>
                                </p>
                                <ul>
                                    <li>
                                        Manage event planning committees for
                                        event decorations and entertainment
                                        Reach out to external vendors for food,
                                        decorations, and entertainment as
                                        necessary
                                    </li>
                                    <li>
                                        Work with the Chair to provide periodic
                                        event updates and request support as
                                        necessary
                                    </li>
                                    <li>
                                        Delegate responsibilities and tasks
                                        among Associate Officers Work with the
                                        Vice Chair to plan Big/Little events
                                    </li>
                                    <li>
                                        Work with the Treasurer to ensure that{" "}
                                        <a
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href='https://com2.cs.washington.edu/'>
                                            COM²
                                        </a>{" "}
                                        is not exceeding its allotted event
                                        budget Work with the Graphics and
                                        Communications Directors to coordinate
                                        event advertising
                                    </li>
                                </ul>
                                <br />
                                <p>
                                    <b>Remarks</b>
                                    <br />
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://com2.cs.washington.edu/'>
                                        COM²
                                    </a>{" "}
                                    has been an integral part of my
                                    undergraduate experience at UW. Our RSO has
                                    played a critical role in my life by
                                    facilitating friendships and helping me
                                    discover my passion for research and
                                    academia.
                                    <br />
                                    <br />
                                    Despite this, I’ve noticed a serious lack of
                                    academic and skill-building-focused events
                                    hosted by most RSOs within the Allen School.
                                    Upon further exploring the history of this
                                    issue, I found that the last skill-building
                                    workshop we held was in 2013. In an effort
                                    to amend this issue, I made it my mission as
                                    Social Event Coordinator to host at least
                                    one workshop. I met this milestone by
                                    leading the planning, content development,
                                    and teaching of{" "}
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://com2.cs.washington.edu/'>
                                        COM²'s
                                    </a>{" "}
                                    React JS and Git Development Workshops.
                                    <br />
                                    <br />
                                    Both of these events meant a lot to me
                                    because I always wished I could have
                                    attended similar workshops while learning
                                    these technologies. This is was the reason
                                    why I ran for the position of Education
                                    Director. The role truly aligned with my
                                    personal goals and values, so I wanted to
                                    use my passion to create as many educational
                                    opportunities as possible for all CSE
                                    students.
                                </p>
                            </div>
                            <div className='leadership-card-right'>
                                <iframe
                                    className='leadership-post'
                                    title='leadership-instagram-post'
                                    src='https://www.instagram.com/p/Cs0WpVpMU-I/embed'
                                    width='315'
                                    height='415'
                                    frameBorder='0'
                                    scrolling='no'
                                    allowtransparency='true'></iframe>
                                <iframe
                                    className='leadership-post'
                                    title='leadership-instagram-post'
                                    src='https://www.instagram.com/p/CnqgueRrO_s/embed'
                                    width='315'
                                    height='400'
                                    frameBorder='0'
                                    scrolling='no'
                                    allowtransparency='true'></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    );
}

export default Leadership;
