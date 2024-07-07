import "../../style/Projects.css";
import Layout from "../layout";
import { motion } from "framer-motion";

function Projects() {
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
            variants={pageMotion}>
            <h1 className="page-title">Projects</h1>
            <div className="projects-page page">
                <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>XMem
                                <a className="github-icon" href="https://github.com/hkchengrex/XMem" target="_blank" rel="noreferrer" aria-label="github">
                                    <img src="https://img.icons8.com/small/32/1A1A1A/github.png" alt="github icon"/>
                                </a>
                            </h3>
                        </div>
                        <div className="project-description">
                            <p>
                                [ECCV 2022] Long-Term Video Object Segmentation with an Atkinson-Shiffrin Memory Model
                                <br/><br/>
                                Contributions: Added support for MPS Apple Silicon and quality of life improvements to the GUI
                            </p>
                        </div>
                    </div>
                    <div className="project-card-right XMem-img">
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>Digital Tether</h3>
                        </div>
                        <div className="project-description">
                            <p>
                                Digital Tether is a project led by students and funded by CoMotion Labs with the goal of improving Digital Literacy for marginalized communities worldwide.
                                <br/><br/>
                                Created a Google Chrome extension that is designed to help improve digital literacy by teaching users how to identify signs of harmful websites, with the expectation that users will learn best practices and become independent, learning digital literacy.
                            </p>
                        </div>
                    </div>
                    <div className="project-card-right DigitalTether-img">
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>TinyGAN
                                <a className="github-icon" href="https://github.com/jjhickmon/tinyGAN" target="_blank" rel="noreferrer" aria-label="github">
                                    <img src="https://img.icons8.com/small/32/1A1A1A/github.png" alt="github icon"/>
                                </a>
                            </h3>
                        </div>
                        <div className="project-description">
                            <p>
                                TinyGAN is a simple demo project meant to test my understanding of
                                Generative Networks by creating a simple Generative Adversarial Network (GAN).
                                This project does not use any prewritten Deep Learning libraries.
                                <br/><br/>
                                The goal is to create a GAN that can produce a checkered pattern, with the 
                                top left and bottom right squares white and the top right and bottom left 
                                squares black.
                            </p>
                        </div>
                    </div>
                    <div className="project-card-right TinyGAN-img">
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>Luna
                                <a className="github-icon" href="https://github.com/jjhickmon/Luna" target="_blank" rel="noreferrer" aria-label="github">
                                    <img src="https://img.icons8.com/small/32/1A1A1A/github.png" alt="github icon"/>
                                </a>
                            </h3>
                            
                        </div>
                        <div className="project-description">
                            <p>
                                Luna, is a lightweight yet intuitive 3d graphics library
                                written in Java. This project was written primarily for
                                education purposes to test my knowledge of linear algebra, 
                                geometry, and calculus.
                                <br/><br/>
                                Wrote the renderer and integrated it with 3D scanning software 
                                by allowing the engine to load .obj files, one of the most 
                                widely used 3D file formats.
                            </p>
                        </div>
                    </div>
                    <div className="project-card-right luna-img">
                    </div>
                </div>
                {/* <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>Delivr</h3>
                        </div>
                        <div className="project-description">
                            <p>
                                A mapping web app that automates complex route
                                planning while accounting for commonly overlooked
                                obstructions.
                            </p>
                        </div>
                    </div>
                    <div className="project-card-right delivr-img">
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>Weather</h3>
                        </div>
                        <div className="project-description">
                            <p>
                            A simple, responsive weather web app. Uses accurate 
                            meteorological data to forecast weather at any
                            location.
                            </p>
                            <a href="https://github.com/jjhickmon/Weather" target="_blank" rel="noreferrer" aria-label="github">
                                <img src="https://img.icons8.com/small/32/1A1A1A/github.png" alt="github icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card-right weather-img">
                    </div>
                </div> */}
            </div>
            </motion.div>
        </div>
    );
}

export default Projects;