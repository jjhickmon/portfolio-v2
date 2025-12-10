import "../../style/Subpage.css";
import pdfMultispectral from "../../img/NASA.pdf"

function ProjectMultispectral() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    Multispectral Imaging for Cognitive Load Estimation
                </h2>
                <h3 className='subpage-date'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.nasa.gov/software-robotics-and-simulation-division/'>
                        NASA Johnson Space Center
                    </a>: June 2024 - August 2025
                </h3>
            </div>
            <div className='project-description'>
                <div className='project-inline-image' id='multispectral-img'></div>
                <p>
                    The goal of this project is to develop a non-contact system to estimate
                    human cognitive load. Ando et. al. [1]'s work shows the feasibility of developing a
                    custom time-extracted multi-spectral camera that quantifies neuron activations
                    within the lateral Prefrontal Cortex (lPFC). This is crucial because the lPFC is involved
                    in executive functions such as working memory, decision-making, and cognitive control.
                </p>
            </div>
                <p>
                    NIR light can pass through the scalp, skull, and cerebrospinal fluid until it gets to the
                    brain and is partially absorbed by oxygenated (HbO) and deoxygenated hemoglobin (HbR)
                    through functional hyperemia, where blood flow increases when tissue is active
                    from brain neurons. Applying the modified Beer-Lamber Law, I propose the measurement
                    of photon distribution to gauge hemoglobin concentration by quantifying a
                    relative change in blood oxygenation. HbO and HbR have different light absorption properties,
                    with HbO absorbing more light optimally ~850 nm (nanometers) and HbR absorbing more light at
                    ~760 nm, so I focus on these two wavelengths of light within my system.<br />
                    <br />
                    To quantify this, I propose the creation of two multispectral cameras, each consisting of an
                    NIR image sensor and two infrared light-emitting diodes with the two wavelengths of interest,
                    760 and 850 nms. I will position the cameras and lights near the participant’s forehead
                    to capture both sides of the lPFC. With proper hardware selection, I could measure lPFC
                    blood oxygenation by tuning the shutter opening period and light pulse width.
                    Finally, I can improve Ando et al. [1]’s work by using the first detection of the reflected
                    light pulse as a distance metric. Since some light will be reflected from the skull,
                    I can calculate the user’s distance by subtracting the detection time from the light pulse time
                    and then dividing it by the speed of light to get the subject’s distance from the camera.
                    This is a standard method of calculating distance with NIR light, proven to work well.<br />
                    <br />
                    [1] Ando, T., Nakamura, T., Fujii, T., Shiono, T., Nakamura, T., Suzuki, M., ... & Inoue, Y. (2019). Non-contact acquisition of brain function using a time-extracted compact camera. Scientific reports, 9(1), 17854.
                    <br />
                    <br />
                </p>
            <div className='subpage-media'>
                <h2>My Work:</h2>
                <embed src={pdfMultispectral} type="application/pdf" width="100%" height="680px" />
            </div>
        </div>
    );
}

export default ProjectMultispectral;
