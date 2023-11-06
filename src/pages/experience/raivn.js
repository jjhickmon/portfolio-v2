import "../../style/Subpage.css";

function Raivn() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    Undergraduate Researcher:{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://raivn.cs.washington.edu/index.html'>
                        RAIVN Lab
                    </a>
                </h2>
                <h3 className="subpage-date">Dec. 2022 - Present</h3>
            </div>
            <h4 className='subpage-subheader'>Thinking Beyond Images: Using Chain-of-Thought Prompting to Harness the Power of Language in Multimodal Models</h4>
            <p>
                Image classification is a fundamental problem in Computer
                Vision, and recent progress in Multimodal Machine Learning has
                enabled researchers to train large models using both images and
                text as input. Alongside the improvements in Multimodal
                Learning, recent work in Natural Language Processing has
                demonstrated the effectiveness of chain-of-thought prompting — a
                technique that allows the model to generate its own series of
                intermediate steps — in improving the performance of Large
                Language Models, particularly for tasks that involve common
                sense and symbolic reasoning. Despite these recent advancements,
                little work has been done to understand how improvements for
                Large Language Models affect the performance of Multimodal
                Models. I aim to demonstrate that incorporating chain-of-thought
                prompting into Multimodal Models can lead to significant
                improvements in accuracy for the task of few-shot image
                classification. I leverage OpenFlamingo, a powerful open-source
                9 billion parameter Vision Language Model, to generate
                intermediate descriptions for the classification results,
                eliciting a chain-of-thought. Preliminary results indicate
                chain-of-thought improves the accuracy of few-shot image
                classification. Improving the task of image classification
                furthers the generalizability of Multimodal Machine Learning,
                effectively reducing the impact of hidden biases from a single
                modality of data which will result in fairer and much more
                representative systems.
                <br />
                <br />
                For this project I have:
            </p>
            <ul>
                <li>
                    Utilized chain-of-thought prompting as a
                    means of leveraging the knowledge contained within Language
                    Models to improve the image classification task. Specifically
                    image classification for Multi-Modal Models.
                </li>
                <li>
                    Worked with the Open Flamingo team to improve and test their
                    framework for training large multimodal models.
                </li>
                <li>
                    Written custom ImageNet evaluation code resulting in a 15x speedup
                    in evaluation time when compared to previous methods.
                </li>
            </ul>
            <p>
                Mentored by{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/ali-farhadi-098430b1/'>
                    Dr. Ali Farhadi
                </a>{" "}
                and{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://sarahpratt.github.io/'>
                    Sarah Pratt
                </a>
                .
                <br/>
                To view my presentation on this work, check out{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://docs.google.com/presentation/d/1UZI9BCWsTV9rFBdLbpWmfuu9cpbSSKb-yD296iUBC54/edit?usp=sharing'>
                    this link
                </a>
                <br/>
                You can find my poster for this project{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://docs.google.com/presentation/d/1_AUv1MG6D4UZlUQ866kB8j0U6T11c8Fo_nwKFAqsn_c/edit?usp=sharing'>
                    here
                </a>
            </p>
        </div>
    );
}

export default Raivn;
