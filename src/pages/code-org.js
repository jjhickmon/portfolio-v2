import "../style/Subpage.css";

function CodeOrg() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    AP CSA Presenter:{" "}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.youtube.com/watch?v=pdNf1O9BTYM&ab_channel=Code.org'>
                        Code.org
                    </a>
                </h2>
                <h3 className='subpage-date'>Mar. 2022</h3>
            </div>
            <p>
                I was invited by Code.org to present a lesson on the AP Computer
                Science A curriculum. This was a great opportunity to share my
                knowledge with the community and help students all over the
                world learn about computer science. I was able to share my
                passion but also learned a lot about how to effectively present
                information to a large audience.
                <br />
                <br />
                This experience perfectly aligns with my personal mission for
                CSE Diversity Equity and Inclusion (DEI). As a first-generation
                African American college student, I know that this education
                system was not built for me and that many other students feel
                this same struggle. By sharing my knowledge and experience, I
                hope to inspire students to pursue computer science and
                demonstrate that they can succeed in this field.
                <br />
                <br />
                <div className="subpage-media">
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/pdNf1O9BTYM?start=10'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen></iframe>
                </div>
            </p>
        </div>
    );
}

export default CodeOrg;
