import "../../style/Subpage.css";

function Peleg() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    Undergraduate Researcher:{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.peleglab.com/'>
                        Peleg Lab
                    </a>
                </h2>
                <h3 className="subpage-date">June 2023 - Present</h3>
            </div>
            <h4 className='subpage-subheader'>Investigating the Balance of Exploration and Exploitation in Honey Bee Swarm Pathfinding</h4>
            <p>
                Honey bees are social insects that utilize pheromone signals to
                direct each other, resulting an emergent swarm behavior.
                Research has shown that bees can solve the shortest path problem
                and locate their queen by directing these pheromone signals, or
                “scenting”, in order to collectively create a communication
                network; however, little work has been done to study the
                behavior of individual bees in this process. We aim to show the
                scenting behaviors of individual honey bees directly correlates
                to the balance of exploration versus exploitation in the
                pathfinding behavior of the swarm. We utilize XMem, a
                state-of-the-art long-term video object segmentation tool, for
                individual bee tracking and segmentation. Combining this with
                additional computer vision approaches described in the
                literature, we analyze the behavior patterns of individual
                honeybees within the swarm. Through this analysis, we anticipate
                the time-series data of individual honey bees will display the
                balance between scenting and exploring that allows for this
                emergent pathfinding capability of the swarm. This improved
                tracking of individual honey bees will allow us to develop a
                better multi-agent reinforcement learning model, predicting the
                behaviors of the swarm.
                <br />
                <br />
                For this project, I:
            </p>
            <ul>
                <li>
                    Proposed the implementation of state-of-the-art Computer
                    Vision methods to improve the accuracy and temporal
                    coherence for task of object segmentation for honeybees.
                </li>
                <li>
                    Led the research, implementation, and analysis of the
                    proposed methods.
                </li>
                <li>
                    Updated the state-of-the-art object segmentation model{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/hkchengrex/XMem'>
                        XMem
                    </a>
                    {" "}to support MPS for inference on Apple devices, fixed
                    bugs in the GUI, added support for video exporting, and
                    updated the GUI to utilize the newer PyQT6.
                </li>
            </ul>
            <p>
                Mentored by{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.colorado.edu/biofrontiers/orit-peleg'>
                    Dr. Orit Peleg
                </a>
                <br />
                To follow my journey, you can read {" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://jjhickmon.github.io/dreu/'>
                    my blog posts here
                </a>
            </p>
        </div>
    );
}

export default Peleg;
