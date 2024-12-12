import Layout from "./layout";
import "../style/Research.css";
import { motion } from "framer-motion";
import resume_pdf from "../img/Javon-Hickmon-CV.pdf";
import thesis from "../img/Javon_Hickmon_Honors_Thesis_signed.pdf";

function Research() {

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
            variants={pageMotion}  className='page research-page'>
                <h1 className="page-title">Research</h1>
                <div className='download'>
                    <a href={resume_pdf} target='_blank' rel='noreferrer'>
                        <button>DOWNLOAD MY CV</button>
                    </a>
                </div>
                <div className="research-project">
                I have been fortunate to work on a variety of projects within {" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.nasa.gov/software-robotics-and-simulation-division/'>
                        NASA
                    </a>, {" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.easyship.com/integrations/amazon-shipping'>
                        Amazon
                    </a>, the {" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://raivn.cs.washington.edu/index.html'>
                        RAIVN Lab
                    </a>, the {" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.peleglab.com/'>
                        Peleg Lab
                    </a>, and more! To learn more, please visit my <a
                        target='_self'
                        rel='noopener noreferrer'
                        href='/projects'>
                        Projects
                    </a> Page.
                </div>
                <h1 className="page-title">Publications</h1>
                <div className="publication">
                    <div className="publication-left undergrad-thesis">
                    </div>
                    <div className="publication-right">
                    <h3 className="publication-title">Multimodal Approaches to Fair Image Classification: An Ethical Perspective</h3>
                    <i>Javon Hickmon</i> {" "}
                    <a
                        target='_self'
                        rel='noopener noreferrer'
                        href={thesis}>
                        [PDF]
                    </a>
                    <br></br>
                    <br></br>
                    Machine Learning (ML) systems that depend on a single data modality—i.e., only images or only text—can exaggerate hidden biases present in the training data, if the data is not carefully balanced and filtered. This thesis explores the intersection of technology and ethics in the development of fair image classification models. Specifically, I focus on improving fairness and methods of using multiple modalities to combat harmful demographic bias. Integrating multimodal approaches, which combine visual data with additional modalities such as text and metadata, allows this work to enhance the fairness and accuracy of image classification systems.
                    </div>
                </div>
                <div className="publication">
                    <div className="publication-left aaai-proposal">
                    </div>
                    <div className="publication-right">
                    <h3 className="publication-title">Multimodal Ensembling for Zero-Shot Image Classification (Abstract)</h3>
                    <i>Javon Hickmon</i> {" "}
                    <a
                        target='_self'
                        rel='noopener noreferrer'
                        href='https://doi.org/10.1609/aaai.v38i21.30551'>
                        [PDF]
                    </a>
                    <br></br>
                    <br></br>
                    Despite recent advances in vision-language fields, multimodal image classification is still challenging. Models with low capacity underperform on fine-grained image classification, and high-quality data with rich cross-modal representations can be difficult to generate. Here, we propose ensemble learning to reduce the impact of these issues on pre-trained models.
                    </div>
                </div>
                <h1 className="page-title">Presentations</h1>
                <div className="presentation">
                    <h3 className="presentation-title">Multimodal Ensembling for Zero-Shot Image Classification</h3>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://drive.google.com/file/d/1PqhxEynVrJNfOj2BEOncjMfkCL48pPXu/view?usp=sharing'>
                        [Poster Presentation]
                    </a>
                    <ul>
                    <li>2024 AAAI Undergraduate Consortium</li>
                    <li>2024 Gabriel E. Gallardo Symposium</li>
                    </ul>
                    <br></br>
                    <h3 className="presentation-title">Honeybee Swarm Dynamics: Investigating the Relationship Between Individual Decision-Making and Collective Foraging</h3>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://docs.google.com/presentation/d/1kvCzdh_pC89hF5o_XHfsxCK5fc26yPHtswN6_uPf_Gc/edit?usp=sharing'>
                        [Poster Presentation]
                    </a>
                    <ul>
                    <li>2023 SACNAS NDiSTEM Conference</li>
                    </ul>
                    <br></br>
                    <h3 className="presentation-title">Thinking Beyond Images: Using Chain-of-Thought Prompting to Harness the Power of Language in Multimodal Models</h3>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://docs.google.com/presentation/d/1_AUv1MG6D4UZlUQ866kB8j0U6T11c8Fo_nwKFAqsn_c/edit?usp=sharing'>
                        [Poster Presentation]
                    </a>{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://docs.google.com/presentation/d/1UZI9BCWsTV9rFBdLbpWmfuu9cpbSSKb-yD296iUBC54/edit?usp=sharing'>
                        [Oral Presentation]
                    </a>
                    <ul>
                    <li>2023 STARS Celebration</li>
                    <li>2023 UCLA National McNair Conference</li>
                    <li>Paul G. Allen School Undergraduate and Master’s Research Showcase</li>
                    </ul>
                </div>
                <h1 className="page-title">Teaching</h1>
                <div className="teaching-position">
                    <h3 className="teaching-title">Instructor (University of Washington)</h3>
                    <ul>
                    <li>
                        CSE 190W: Allen School Scholars Program CSE 121 Supplemental Course
                        <br></br>
                        <i>September 2024 - Present</i>
                    </li>
                    </ul>
                    <br></br>

                    <h3 className="teaching-title">Lead Undergraduate Teaching Assistant (University of Washington)</h3>
                    <ul>
                    <li>
                        CSE 190Z: Allen School Scholars Program CSE 123 Supplemental Course
                        <br></br>
                        <i>March 2024 - June 2024</i>
                    </li>
                    <li>
                        CSE 190Y: Allen School Scholars Program CSE 122 Supplemental Course
                        <br></br>
                        <i>January 2024 - March 2024</i>
                    </li>
                    <li>
                        CSE 190X: Allen School Scholars Program CSE 121 Supplemental Course
                        <br></br>
                        <i>September 2023 - December 2023</i>
                    </li>
                    </ul>
                    <br></br>

                    <h3 className="teaching-title">Undergraduate Teaching Assistant (University of Washington)</h3>
                    <ul>
                    <li>
                        CSE 190Z: Allen School Scholars Program CSE 123 Supplemental Course
                        <br></br>
                        <i>March 2023 - June 2023</i>
                    </li>
                    <li>
                        CSE 190Y: Allen School Scholars Program CSE 122 Supplemental Course
                        <br></br>
                        <i>January 2023 - March 2023</i>
                    </li>
                    <li>
                        CSE 190X: Allen School Scholars Program CSE 121 Supplemental Course
                        <br></br>
                        <i>September 2022 - December 2022</i>
                    </li>
                    </ul>
                    <br></br>

                    <h3 className="teaching-title">Check-In Teaching Assistant (University of Washington)</h3>
                    <ul>
                    <li>
                        CSE 190Z: Allen School Scholars Program CSE 123 Supplemental Course
                        <br></br>
                        <i>March 2022 - June 2022</i>
                    </li>
                    </ul>
                    <br></br>

                    <h3 className="teaching-title">AP CSA Content Presenter (Code.org)</h3>
                    <ul>
                    <li>
                        You can view the content <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.youtube.com/watch?v=pdNf1O9BTYM&ab_channel=Code.org'>
                            here
                        </a>
                        <br></br>
                        <i>March 2022</i>
                    </li>
                    </ul>
                </div>
                <h1 className="page-title">Talks and Panels</h1>
                <div className="presentation">
                    <h3 className="presentation-title">2024</h3>
                    <ul>
                        <li>UW CSE 390R Student Research Panel, Nov. 2024</li>
                        <li>LEAP REU Student Panel, Nov. 2024</li>
                        <li>GEM Fellow Panel, July 2024</li>
                        <li>UW GEN1 Career Panel, May 2024</li>
                        <li>COM² & LEAP: Research Conferences 101, May 2024</li>
                        <li>Gabriel E. Gallardo Symposium Student Leader Panel, April 2024</li>
                        <li>National LEAP Alliance Webinar on Undergraduate Research, March 2024</li>
                    </ul>
                    <h3 className="presentation-title">2023</h3>
                    <ul>
                    <li>COM² CS Ed Week Outreach Poster, Dec. 2023</li>
                    <li>"Honeybee Swarm Dynamics" - Invited Lecture @ CU Boulder, Nov. 2023</li>
                    <li>UW Direct Admit Seminar Student Leader Panel, Nov. 2023</li>
                    <li>UW CSE 390R Student Research Panel, Nov. 2023</li>
                    <li>MiT/LEAP Summer Research Program Student Panel, Nov. 2023</li>
                    <li>COM² Git and Version Control Workshop, May 2023</li>
                    <li>UW CSE Undergraduate Research Roundtable, April 2023</li>
                    <li>BS/MS Student Panel, April 2023</li>
                    <li>COM² React JS Workshop, Feb. 2023</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}

export default Research;