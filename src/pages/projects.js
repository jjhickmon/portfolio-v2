import "../style/Projects.css";
import Layout from "./layout";

function Projects() {
    return (
        <div>
            <Layout />
            <h1 className="page-title">Projects</h1>
            <div className="projects-page page">
                <div className="project-card">
                    <div className="project-card-left">
                        <div className="project-name">
                            <div className="sidebar"></div>
                            <h3>Luna</h3>
                        </div>
                        <div className="project-description">
                            <p>
                                A lightweight yet intuitive 3d graphics library
                                written in Java.
                            </p>
                            <a href="https://github.com/jjhickmon/Luna" target="_blank" rel="noreferrer" aria-label="github">
                                <img src="https://img.icons8.com/small/32/1A1A1A/github.png" alt="github icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card-right luna-img">
                    </div>
                </div>
                <div className="project-card">
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
                </div>
            </div>
        </div>
    );
}

export default Projects;