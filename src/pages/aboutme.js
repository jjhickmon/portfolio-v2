import Layout from "./layout";
import "../style/AboutMe.css";

function AboutMe() {
    return (
        <div className='static-page'>
            <Layout />
            <h1 className='page-title'>About Me</h1>
            <div className='about-page'>
                <div className='about-professional'>
                    <div className='about-card'>
                        Perception is how humans build a comprehensible model of
                        the world. We take in enormous quantities of data
                        through our senses and integrate this multi-sourced data
                        into our world model, allowing us to efficiently recall,
                        utilize, and predict information. These innate abilities
                        help us form a world model that is reasonably accurate
                        and generalizable.
                        <br></br>
                        <br></br>
                        Vision and perception have always fascinated me;
                        however, the fundamental issue in using exclusively
                        vision for certain problems, is that many real-world
                        applications require multiple modalities of data to form
                        the full context. Reducing the input to just vision is
                        effectively losing data, and deteriorating the accuracy
                        of our representation.
                        <br></br>
                        <br></br>I aim to solve this problem by researching and
                        creating large models that can efficiently use multiple
                        modalities to build a generalizable and accurate world
                        model. Throughout my Ph.D. I hope to explore the
                        applications of these ideas within a variety of
                        contexts, and after my Ph.D. I intend to become a
                        Research Scientist working on similar problems within in
                        industry, but with a focus on efficiency and scalability
                        so users across the world can benefit from my findings.
                    </div>
                    <div className='about-photo professional'></div>
                </div>
            </div>
            <footer>
                <ul className='footer-contact'>
                    <li>
                        Write
                        <br />
                        javonh@uw.edu
                    </li>
                    <li className='footer-follow'>
                        Follow
                        <br />
                        <a
                            href='https://www.linkedin.com/in/javonh/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='linkedin'>
                            <img
                                src='https://img.icons8.com/small/16/1A1A1A/linkedin.png'
                                alt='linkedin icon'
                            />
                        </a>
                        <a
                            href='https://github.com/jjhickmon'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='github'>
                            <img
                                src='https://img.icons8.com/small/16/1A1A1A/github.png'
                                alt='github icon'
                            />
                        </a>
                    </li>
                </ul>
                <div className='attribution-home'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://icons8.com/'>
                        {/* App icons by Icons8 */}
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default AboutMe;
