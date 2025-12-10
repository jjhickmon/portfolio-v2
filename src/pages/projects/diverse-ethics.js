import "../../style/Subpage.css";

function ProjectDiverseEthics() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    DiverseETHICS: The Impact of Annotator Demographics on Moral Judgment Datasets
                </h2>
            </div>
            <div className='project-description'>
                <p>
                    Many projects have explored the potential for moral reasoning within AI systems.
                    Datasets like SocialNormBank (used by Delphi), ETHICS, and Moral Stories
                    approach this problem with various philosophical frameworks to their
                    methodologies. Despite these novel approaches, current work fails to ask one important question:
                    How do annotator backgrounds influence their moral judgments?<br />
                    <br />
                    This question is typically circumvented by enforcing uniformity across annotations
                    (e.g. only recruiting annotators from the US or having a voting metric).
                    However, this uniformity may lead to models that fail to generalize across
                    diverse populations. I aim to address this question by developing a complete framework for the
                    analysis of annotator demographics on moral judgment datasets.<br />
                    <br />
                    This work is ongoing.
                </p>
            </div>
        </div>
    );
}

export default ProjectDiverseEthics;
