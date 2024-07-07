import "../../style/Subpage.css";

function ProjectMultispectral() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    Multispectral Imaging for Congnitive Load Quantification
                </h2>
                <h3 className='subpage-date'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.nasa.gov/software-robotics-and-simulation-division/'>
                        NASA Johson Space Center
                    </a>: June 2024 - Present
                </h3>
            </div>
            <div className='project-description'>
                <div className='project-inline-image' id='multispectral-img'></div>
                <p>
                    For this project, I led the research and development of technology aimed at the accurate tracking 
                    and monitoring of human cognitive load. To achieve this, I designed novel experiments to induce 
                    high cognitive workload in a controlled environment, utilized hyperspectral imaging and 
                    Deep Learning to create a high-throughput generaizable Convolutional Neural Network,
                    and was able to non-invasively monitor cognitive load for participants.
                    <br />
                    <br />
                    This project is currently in progress.
                </p>
            </div>
        </div>
    );
}

export default ProjectMultispectral;
