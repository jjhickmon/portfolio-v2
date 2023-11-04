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
                <h3 className='subpage-date'>June 2023 - Present</h3>
            </div>
            <h4 className='subpage-subheader'>
                Honeybee Swarm Dynamics: Investigating the Relationship Between
                Individual Decision Making and Collective Foraging
            </h4>
            <p>
                Honeybees are social insects that utilize pheromone signals to
                direct each other, resulting in emergent swarm behavior.
                Research has shown that bees can solve the shortest path problem
                and locate their queen by directing these pheromone signals, or
                “scenting,” to create a communication network collectively;
                however, little work has been done to study how the behavior of
                the bees changes when in the presence of the swarm. This study
                aims to investigate how the decisions of individual honeybees
                affect the foraging and aggregation process of the collective. I
                utilize state-of-the-art video object tracking and segmentation
                tools to gather time-series data on the scenting behaviors of
                individual bees when separated from their queen. Combining this
                with additional computer vision approaches described in the
                literature, I analyze the behavior patterns of the individuals
                as the swarm forages for and aggregates around the queen.
                Through this analysis, I anticipate the time-series data from
                individual honeybees will display a predictable relationship
                between scenting and exploring that allows for the emergent
                pathfinding capability of the swarm. This improved tracking of
                individual honeybees will allow us to increase the accuracy of
                the multi-agent reinforcement learning model to predict the
                behaviors of the swarm. These improvements directly impact swarm
                robotics and tasks such as patrolling, disaster recovery, and
                search and rescue, where it is important to create a
                low-resource distributed system that can rapidly adapt to new
                operating conditions.
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
                    proposed segmentation methods.
                </li>
                <li>
                    Updated the state-of-the-art object segmentation model{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/hkchengrex/XMem'>
                        XMem
                    </a>{" "}
                    to support MPS for inference on Apple devices, fixed bugs in
                    the GUI, added support for video exporting, and updated the
                    GUI to utilize the newer PyQT6.
                </li>
            </ul>
            <p>
                Mentored by {" "}
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
                <br />
                To see my final poster, check out {" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://docs.google.com/presentation/d/1kvCzdh_pC89hF5o_XHfsxCK5fc26yPHtswN6_uPf_Gc/edit?usp=sharing'>
                    this link
                </a>
            </p>
        </div>
    );
}

export default Peleg;
