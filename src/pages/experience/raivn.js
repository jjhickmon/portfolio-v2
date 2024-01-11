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
                <h3 className='subpage-date'>Dec. 2022 - Present</h3>
            </div>
            <p>Within the RAIVN Lab I have:</p>
            <ul>
                <li>
                    Led the development of a novel method to utilize generative diffusion-based model
                    ensembling to improve multimodal <b>fine-grained image classification</b> accuracy.
                    <ul>
                        <li>We have already achieved accuracies higher than OpenAI's CLIP ViT-L/14 model on a variety of datasets,
                            although the project is currently still in development.</li>
                    </ul>
                </li>
                <li>
                    Researched methods to leverage the knowledge contained
                    within <b>Large Language Models</b> to improve image classification
                    for <b>Multimodal Machine Learning</b> models.
                </li>
                <li>
                    Wrote custom evaluation code, resulting in a <b>~15x evaluation speedup</b> while
                    decreasing the misclassification rate of our system.
                </li>
                <li>
                    Independently wrote the implementation of <b>multimodal chain-of-thought</b> and showed
                    consistently higher accuracies on a subset of images from the ImageNet dataset.
                </li>
            </ul>
            <p>
                Mentored by{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://sarahpratt.github.io/'>
                    Sarah Pratt
                </a>{" "}
                under the supervision of{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/ali-farhadi-098430b1/'>
                    Dr. Ali Farhadi
                </a>
                .
            </p>
            <br />
            <hr />
            <br />
            <h4 className='subpage-subheader'>
                Multimodal Ensembling for Zero-Shot Image Classification
            </h4>
            <p>
                Artificial intelligence has made significant progress in im-
                age classification, an essential task for machine perception
                to achieve human-level image understanding. Despite recent
                advances in vision-language fields, multimodal image classi-
                fication is still challenging, particularly for the following two
                reasons. First, models with low capacity often suffer from un-
                derfitting and thus underperform on fine-grained image clas-
                sification. Second, it is important to ensure high-quality data
                with rich cross-modal representations of each class, which is
                often difficult to generate. Here, I utilize Ensemble Learn-
                ing to reduce the impact of these issues on pre-trained mod-
                els. By leveraging open-vocabulary models, I aim to create a
                meta-model that combines the predictions of multiple open-
                vocabulary multimodal models trained on different data to
                create more robust predictions. In this work, I intend to im-
                prove fine-grained classification accuracy without additional
                training or fine-tuning by creating an ensemble of multimodal
                models. This ensemble will better distinguish the differences
                between similar classes while staying completely zero-shot.
                <br />
                <br />
                This work has been accepted for presentation at the{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://aaai.org/aaai-conference/undergraduate-consortium/'>
                    2024 AAAI Undergraduate Consortium
                </a>
            </p>
            <br />
            <h4 className='subpage-subheader'>
                Thinking Beyond Images: Using Chain-of-Thought Prompting to
                Harness the Power of Language in Multimodal Models
            </h4>
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
                I presented this work at the{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://starscelebration.org/'>
                    2022 STARS Celebration
                </a>
                {" "}and the{" "}
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.aap.ucla.edu/mcnair/'>
                    2023 UCLA National McNair Conference</a>.
                <br />
                <ul>
                    <li>To view my presentation on this work, check out{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://docs.google.com/presentation/d/1UZI9BCWsTV9rFBdLbpWmfuu9cpbSSKb-yD296iUBC54/edit?usp=sharing'>
                        this link
                    </a>
                    </li>
                    <li>
                    You can find my poster for this project{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://docs.google.com/presentation/d/1_AUv1MG6D4UZlUQ866kB8j0U6T11c8Fo_nwKFAqsn_c/edit?usp=sharing'>
                        here
                    </a>
                    </li>
                </ul>
            </p>
        </div>
    );
}

export default Raivn;
