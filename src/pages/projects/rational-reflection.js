import "../../style/Subpage.css";
import pdfRationalReflection from "../../img/The_Power_of_Rational_Reflection.pdf"

function ProjectRationalReflection() {
    return (
        <div className='subpage'>
            <div className='subpage-header'>
                <h2>
                    The Power of Rational Reflection
                </h2>
            </div>
            <div className='project-description'>
                <p>
                    My argument detailing the purely logical flaws in Sharon Street's <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.jstor.org/stable/4321684'>
                        A Darwinian Dilemma for Realist Theories of Value
                    </a>{" "} by using John Rawls' original conception of rational reflection from
                    his work, <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.jstor.org/stable/2182612'>
                        Justice as Fairness
                    </a><br />
                    <br />
                    Specifically, Street states Darwinian evolution is a distorting force on human morals.
                    She uses this assertion to pose a two part problem to the moral realist. First, the realist
                    may claim that our perspectives on matters (she calls these evaluative attitudes) have no
                    connection to the "real" truth. Second, the realist may claim natural selection favored ancestors
                    who were able to grasp "real" truth. She argues against both these approaches, and concludes
                    by proposing antirealism as the more plausible metaethical theory.<br />
                    <br />
                    My argument against Street takes a computational perspective, by examining certain classes of problems
                    in which a <b>rational</b> reflective agent could realistically consider every possible relevant outcome.
                    My formulation of the definitions of <b>rational</b> and <b>relevant</b> lead to the conclusion that evolution's
                    effect cannot be considered as an irreparable distorion, but rather, rational reflection can result
                    in judgments which are completely uninfluenced by initial tendencies.
                </p>
            </div>
            <div className='subpage-media'>
                <embed src={pdfRationalReflection} type="application/pdf" width="70%" height="1000px" />
            </div>
        </div>
    );
}

export default ProjectRationalReflection;
