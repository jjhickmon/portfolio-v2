import "../../style/Subpage.css";

function ProjectDigitalTether() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    Digital Tether
                </h2>
                <h3 className='subpage-date'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://comotion.uw.edu/startups-incubation/comotion-labs/'>
                        CoMotion Labs
                    </a> & <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://brotherhoodinitiative.org/'>
                        Brotherhood Initiative
                    </a>: June 2023 - Sept. 2023
                </h3>
            </div>
            <br />
            <div className='project-image' id='digital-tether-img'></div>
            <div className='project-description'>
                <p>
                    Digital Tether is a project led by students and funded by CoMotion Labs with the goal of improving 
                    Digital Literacy for marginalized communities worldwide.
                    <br/><br/>
                    Created a Google Chrome extension that is designed to help improve digital literacy by teaching 
                    users how to identify signs of harmful websites, with the expectation that users will learn best 
                    practices and become independent, learning digital literacy.
                </p>
            </div>
        </div>
    );
}

export default ProjectDigitalTether;
