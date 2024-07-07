import Layout from "./layout";
import "../style/AboutMe.css";
import { motion } from "framer-motion";

function AboutMe() {
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
            variants={pageMotion} className='page static-page'>
            <h1 className='page-title'>About Me</h1>
            <div className='about-page'>
                <div className='about-card'>
                    Perception is how humans build a comprehensible model of
                    the world. We take in enormous quantities of data
                    through our senses and integrate this multi-sourced data
                    into our world model, allowing us to efficiently recall,
                    utilize, and predict information. These innate abilities
                    help us form a world model that is reasonably accurate
                    and generalizable.
                    <br></br>
                    <br></br>
                    Vision and perception have always fascinated me;
                    however, the fundamental issue in using exclusively
                    vision for certain problems, is that many real-world
                    applications require multiple modalities of data to form
                    the full context. Reducing the input to just vision is
                    effectively losing data, and deteriorating the accuracy
                    of our representation.
                    <br></br>
                    <br></br>I aim to solve this problem by researching and
                    creating large models that can efficiently use multiple
                    modalities to build a generalizable and accurate world
                    model. Throughout my Ph.D. I hope to explore the
                    applications of these ideas within a variety of
                    contexts, and after my Ph.D. I intend to become a
                    Research Scientist working on similar problems within in
                    industry, but with a focus on efficiency and scalability
                    so users across the world can benefit from my findings.
                    <div className='about-photo professional'></div>
                </div>
            </div>
            <h1>Fairness and Responsible AI</h1>
            <div className='about-page'>
                <div className='about-card'>
                    Alongside my goals to further cross-modal reasoning, I intend 
                    to develop advanced multimodal systems through the lens of pressing 
                    societal issues. I am particularly concerned about Machine Learning methods 
                    that depend on a single data source—i.e., only images or only 
                    text—and inadvertently exaggerate hidden biases present in the 
                    training data with potentially disastrous results, such as when 
                    government agencies reinforce bias using predictive policing. 
                    I am determined to research Multimodal Machine Learning within 
                    various environments to increase data diversity, offset these 
                    discrepancies, and help address the bias in Machine Learning. 
                    <br></br>
                    <br></br>
                    Unifying learned representations across modalities is one of the core issue in multimodal learning.
                    Inaccurate cross-modal representation is why biases learned from single modalities propagate
                    and introduce potentially harmful behavior in multimodal models. I aim to reduce this issue by
                    understanding how we can use techniques such as a mixture of experts to push these
                    representations together while maintaining contextually rich information for complex reasoning.
                    <div className='about-photo professional2'></div>
                </div>
            </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;
