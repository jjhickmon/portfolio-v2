import "../../style/Subpage.css";
import pdfDecisionMaking from "../../img/Toward_Socially_Just_Political_Theory_for_AI_Decision-Making.pdf"

function ProjectDecisionMaking() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    Toward Socially Just Political Theory for Systems of Human-AI Decision-Making
                </h2>
            </div>
            <div className='project-description'>
                <p>
                    Significant work has been done to improve the decision-making capabilites of AI systems; however,
                    few have critically examined how different formulations of justice impact these systems of
                    human-AI interaction.<br />
                    <br />
                    To examine these different formulations of justice, I present "The Artificial Judge" thought experiment.
                    Through this thought experiment, I examine three major political theories
                    (Utilitarianism, Rawlsian Liberalism, Libertarianism), and explore how features from each would affect a system of
                    human-AI decision-making. I argue Rawlsian Liberalism to be the most practical theory for socially just decision-making systems.<br />
                    <br />
                    This argument is meant to show the importance of a clear dilenation between philosophical theories of justice,
                    guiding the ways in which human-AI decision-making should function within high-stakes contexts. This paper's intended audience is the general public.<br />
                    <br />
                </p>
            </div>
            <div className='subpage-media'>
                <embed src={pdfDecisionMaking} type="application/pdf" width="70%" height="1000px" />
            </div>
        </div>
    );
}

export default ProjectDecisionMaking;
