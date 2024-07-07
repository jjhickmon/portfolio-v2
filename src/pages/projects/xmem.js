import "../../style/Subpage.css";

function ProjectXMem() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    XMem: Device Support Updates
                </h2>
                <h3 className='subpage-date'>June 2023</h3>
            </div>
            <br />
            <div className='project-image' id='xmem-img'></div>
            <br />
            <div className='project-description'>
                <p>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/hkchengrex/XMem'>
                        XMem
                    </a>{" "}
                    is a state-of-the-art video object segmentation architecture for long videos with unified feature memory stores
                    inspired by the Atkinson-Shiffrin memory model. XMem is currently used by millions of users
                    worldwide through tools such as Meta AI’s Segment Anything Model (SAM).
                    <br />
                    <br />
                    For this project, I implemented MPS device support for Apple Silicon as well as various quality of life improvements
                    to the GUI.
                </p>
            </div>
        </div>
    );
}

export default ProjectXMem;
