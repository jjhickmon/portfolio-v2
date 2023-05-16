import Layout from "./layout";
import "../style/AboutMe.css";

function AboutMe() {
    return (
        <div className="static-page">
            <Layout />
            <h2 className="about-title title">About Me</h2>
            <div className="about-page">
                <div className="about-professional">
                    <div className="about-professional-bg"></div>
                    <div className="about-professional-card">
                        Perception is how humans build a comprehensible model of the world. 
                        We take in enormous quantities of data through our senses and integrate this multi-sourced data 
                        into our world model, allowing us to efficiently recall, utilize, and predict information. 
                        These innate abilities help us form a world model that is reasonably accurate and generalizable. 
                        Vision and perception have always fascinated me; however, the fundamental issue in using exclusively vision 
                        for certain problems, is that many real-world applications require multiple modalities of data to form the full context. 
                        Reducing the input to just vision is effectively losing data, and deteriorating the accuracy of our representation. 
                        <br></br>
                        <br></br>
                        I aim to solve this problem by researching and creating large models 
                        that can efficiently use multiple modalities to build a generalizable and accurate world model. 
                        Throughout my Ph.D. I hope to explore the applications of these ideas within a variety of contexts, 
                        such as utilizing vision and language to elicit a chain-of-though allowing for robust decision making 
                        for agents within a muti-agent environment or exploring methods of multimodal and multilingual 
                        sentiment analysis. After my Ph.D. I intend to become a Research Scientist working on similar 
                        problems within in industry, but with a focus on efficiency and scalability so users across the world 
                        can benefit from my findings. 
                    </div>
                    <div className="about-professional-photo"></div>
                </div>
                <div className="about-personal">
                    <div className="about-personal-photo"></div>
                    <div className="about-personal-card">
                        When I'm not at the computer, you can find me playing guitar, skate boarding, rock climbing, or simply running around Hyrule!
                    </div>
                    <div className="about-personal-bg"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;