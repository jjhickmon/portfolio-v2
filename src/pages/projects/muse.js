import "../../style/Subpage.css";

function ProjectMuSE() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    MuSE: Multimodal Synthetic Embeddings for Zero-Shot Image Classification
                </h2>
                <h3 className='subpage-date'><a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://raivn.cs.washington.edu/'>
                        RAIVN Lab
                    </a>: Oct. 2023 - Present
                </h3>
            </div>
            <div className='project-description'>
                <div className='project-inline-image' id='muse-img1'></div>
                <p>
                    Artificial intelligence has made significant progress in image classification, 
                    an essential task for machine perception to achieve human-level image understanding. 
                    Despite this importance, many issues can arise from traditional multimodal image classification methods; 
                    however, two are particularly challenging. First, fine-grained image classification is 
                    unachievable if the model is too small and underfits the data. Second, if the model wasn’t 
                    trained on enough high-quality data or a modality lacks enough representation of a class, the model 
                    may contain inherent bias. 
                </p>
            </div>
            <p>
                We propose Multimodal Synthetic Embeddings as a framework to reduce the impact of these issues on pre-trained models. 
                By leveraging open-vocabulary models, We aim to generate vision-language descriptions that emphasize 
                the differences between similar classes, improving fine-grained classification accuracy without any 
                additional training or fine-tuning.
                <br></br>
                <br></br>
                Pipeline Architecture:
            </p>
            <div className='project-image' id='muse-img2'></div>
        </div>
    );
}

export default ProjectMuSE;
