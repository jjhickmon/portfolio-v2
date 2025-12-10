import "../../style/Subpage.css";
import pdfD3G from "../../img/D3G_paper.pdf"

function ProjectD3G() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    D3G: Diverse Demographic Data Generation Increases Zero-Shot Image Classification Accuracy within Multimodal Models
                </h2>
                <h3 className='subpage-date'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://raivn.cs.washington.edu/'>
                        RAIVN Lab
                    </a>: May 2024 - Present
                </h3>
            </div>
            <div className='project-description'>
                <div className='project-inline-image' id='d3g-img1'></div>
                <p>
                    Image classification is a task essential for machine perception to achieve human-level image understanding. 
                    Multimodal models such as CLIP, have been able to perform well on this task by learning semantic similarities 
                    across Vision and Language; however, despite these advances, image classification is still challenging task. 
                    Models with low capacity often suffer from underfitting and thus underperform on fine-grained image classification.
                    Along with this, it is important to ensure high-quality data with rich cross-modal representations of each class, 
                    which is often difficult to generate.
                </p>
            </div>
            <p>
                When datasets do not enforce balanced demographics, the predictions will bias toward 
                the more represented class, while others will be neglected. We focus on how these issues can lead to harmful bias for 
                zero-shot image classification, and explore how to combat these issues in demographic bias. 
                <br></br>
                <br></br>
                We propose Diverse Demographic Data Generation (D3G), a training-free, zero-shot method of boosting 
                classification accuracy while reducing demographic bias in pre-trained multimodal models. 
                With this method, we utilize CLIP as our base multimodal model, and Stable Diffusion XL as our generative model. 
                We demonstrate providing diverse demographic data at inference time improves performance for these models, 
                and explore the impact of individual demographics on the resulting accuracy metric.
                <br></br>
                <br></br>
                Pipeline Architecture:
            </p>
            <div className='project-image' id='d3g-img2'></div>
            <div className='subpage-media'>
                <embed src={pdfD3G} type="application/pdf" width="70%" height="1000px" />
            </div>
        </div>
    );
}

export default ProjectD3G;
