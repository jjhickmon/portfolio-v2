import "../../style/Subpage.css";

function ProjectModalMoralAlignment() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    The Influence of Modality on VLM Moral Judgment
                </h2>
            </div>
            <div className='project-description'>
                <p>
                    In recent years, large-scale Vision Language Models (VLMs) have become 
                    increasingly ubiquitous, causing a need for alignment with users' sense of morality. 
                    Most work exploring the moral alignment of large models has been limited to the unimodal context, 
                    focusing on purely language or purely vision. Given the widespread integration of 
                    VLMs into daily life, it has become necessary to measure not only the moral alignment 
                    with users, but also the model's moral judgment consistency across different modalities. 
                    To assess this behavior, we evaluate multiple suites of VLMs to explore their cross-modal 
                    alignment given a variety of situations. We show that VLMs do not produce consistent 
                    judgments when faced with the same situation in different modalities. 
                    Furthermore, we conduct an early exploration to probe the source of this misalignment and 
                    offer suggestions for future research on the matter. 
                    We hope these findings will lead to future training paradigms that improve and 
                    enforce cross-modal alignment, particularly for VLM moral judgment.<br />
                    <br />
                    This work is ongoing.
                </p>
            </div>
        </div>
    );
}

export default ProjectModalMoralAlignment;
