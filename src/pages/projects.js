import React, { useEffect, useRef } from "react";
import Layout from "./layout";
import "../style/Projects.css";
import imgDiverseETHICS from '../img/diverseETHICS.jpg';
import imgVisualETHICS from '../img/visualETHICS.png';
// import imgOnComputingMoralityGod from '../img/on-computing-morality-god.jpg';
// import imgContext from '../img/context.png';
import imgReflection from '../img/reflection.jpg';
import imgDecisions from '../img/decisions.jpg'

function Projects() {
    var card = useRef(null);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(function () {
        card.allow_peek = window.matchMedia("(orientation: landscape)").matches;
        window.addEventListener("orientationchange", function() {
            card.allow_peek = window.matchMedia("(orientation: portrait)").matches;
            console.log('orientation change', card.allow_peek, window.matchMedia("(orientation: portrait)").matches)
        });

        document
            .querySelectorAll(".project-card")
            .forEach(function (project_card) {
                project_card.addEventListener("click", async function () {
                    unpeekSubpage();

                    card.current = project_card;
                    project_card.style.zIndex = "0";
                    openSubpage();
                });
                project_card.addEventListener("mouseover", function () {
                    console.log('mouseover', card.allow_peek)
                    if (card.current === null && card.allow_peek === true) {
                        document.getElementById(
                            "subpage-background"
                        ).style.transition =
                            "all 0.3s ease, z-index 1ms ease-out";
                        document.getElementById(
                            "subpage-background"
                        ).style.opacity = "1";
                        document.getElementById(
                            "subpage-background"
                        ).style.zIndex = "1";

                        project_card.style.transition =
                            "all 0.3s ease, z-index 1ms ease-out";
                        project_card.style.zIndex = "2";

                        peekSubpage(project_card);
                    }
                });
                project_card.addEventListener("mouseout", function () {
                    if (card.peek === project_card && card.allow_peek === true) {
                        unpeekSubpage();
                    }
                    if (card.current === null) {
                        document.getElementById(
                            "subpage-background"
                        ).style.transition =
                            "all 0.3s ease, z-index .5s ease-in";
                        document.getElementById(
                            "subpage-background"
                        ).style.opacity = "0";
                        document.getElementById(
                            "subpage-background"
                        ).style.zIndex = "-1";
                        project_card.style.transition =
                            "all 0.3s ease, z-index .3s ease-in";
                        project_card.style.zIndex = "0";

                        card.peek = null;
                    }
                });
                // project_card.addEventListener("mouseout", closeSubpage);
            });
    });

    function closeSubpage(event) {
        let subpage = document.getElementById("subpage");
        let subpage_background = document.getElementById("subpage-background");
        let target_element = event.target; // clicked element
        do {
            if (target_element === subpage || target_element === card.current) {
                return;
            }
            // Go up the DOM
            target_element = target_element.parentNode;
        } while (target_element);
        // subpage.style.zIndex = "0";
        subpage.style.top = "100vh";
        subpage.style.width = "70vw";
        subpage.style.height = "0";
        subpage_background.style.opacity = "0";
        subpage_background.style.zIndex = "-1";
        card.current = null;
        document.removeEventListener("click", closeSubpage);
    }

    // NOTE: Make sure to add every new subpage to App.js
    function openSubpage() {
        let page_name = card.current.id;
        document.getElementById("subpage").src =
            window.location.href + "/" + page_name;
        document.getElementById("subpage").style.zIndex = "3";
        document.getElementById("subpage").style.width = "70vw";
        document.getElementById("subpage").style.height = "90vh";
        document.getElementById("subpage").style.top = "10vh";
        document.getElementById("subpage-background").style.opacity = "1";
        document.getElementById("subpage-background").style.zIndex = "1";
        // Close subpage if clicked outside
        document.addEventListener("click", closeSubpage);
    }

    function peekSubpage(project_card) {
        card.peek = project_card
        let page_name = card.peek.id;
        document.getElementById("subpage").src =
            window.location.href + "/" + page_name;
        document.getElementById("subpage").style.zIndex = "3";
        document.getElementById("subpage").style.width = "70vw";
        document.getElementById("subpage").style.height = "90vh";
        document.getElementById("subpage").style.top = "85vh";
    }

    function unpeekSubpage() {
        if (card.peek !== null && card.allow_peek === true) {
            let page_name = card.peek.id;
            document.getElementById("subpage").src =
                window.location.href + "/" + page_name;

            let subpage = document.getElementById("subpage");
            let subpage_background = document.getElementById("subpage-background");

            // subpage.style.zIndex = "0";
            subpage.style.top = "100vh";
            // subpage.style.width = "70vw";
            // subpage.style.height = "0";
            subpage_background.style.opacity = "0";
            subpage_background.style.zIndex = "-1";
            card.peek = null;
        }
    }

    return (
        <div>
            <Layout />
            <div className='page project-page'>
                <iframe id='subpage' title='subpage' src=''></iframe>
                <div id='subpage-background'></div>
                <div id='projects'>
                    <h1 className='page-title'>Current Projects</h1>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='diverse-ethics'style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${imgDiverseETHICS})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className='project-card-subheader'>
                                DiverseETHICS: The Impact of Annotator Demographics on Moral Judgment Datasets
                            </h3>
                            <hr className='divider' />
                            <h4>Independent</h4>
                            <h5>April 2025 - present</h5>
                        </div>
                        <div className='project-card' id='modal-moral-alignment' style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${imgVisualETHICS})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className='project-card-subheader'>
                                The Influence of Modality on VLM Moral Judgment
                            </h3>
                            <hr className='divider' />
                            <h4>RAIVN Lab</h4>
                            <h5>June 2025 - present</h5>
                        </div>
                    </div>
{/* 
                    <h1 className='page-title'>Long-Term Projects</h1>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='context'  style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${imgContext})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className='project-card-subheader'>
                                The Importance of Context for Machine Moral Reasoning
                            </h3>
                            <hr className='divider' />
                            <h5>Master's Thesis</h5>
                        </div>
                        <div className='project-card' id='on-computing-morality-god'  style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${imgOnComputingMoralityGod})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className='project-card-subheader'>
                                On Computing, Morality, and God
                            </h3>
                            <h5>An Inquiry into the Foundations of Machine Morality</h5>
                            <hr className='divider' />
                            <h5>Book</h5>
                        </div>
                    </div> */}

                    <h1 className='page-title'>Past Projects <sub style={{fontSize: '1vw'}}>(both big and small)</sub></h1>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='multispectral'>
                            <h3 className='project-card-subheader'>
                                Multispectral Imaging for Cognitive Load Estimation
                            </h3>
                            <hr className='divider' />
                            <h4>NASA Johson Space Center</h4>
                            <h5>June 2024 - August 2025</h5>
                        </div>
                    </div>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='rational-reflection' style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${imgReflection})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className='project-card-subheader'>
                               The Power of Rational Reflection
                            </h3>
                            <hr className='divider' />
                            <h5>March 2025 - June 2025</h5>
                        </div>
                        <div className='project-card' id='decision-making' style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${imgDecisions})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h3 className='project-card-subheader'>
                                Toward Socially Just Political Theory for Systems of Human-AI Decision-Making
                            </h3>
                            <hr className='divider' />
                            <h5>January 2025 - March 2025</h5>
                        </div>
                    </div>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='d3g'>
                            <h3 className='project-card-subheader'>
                                D3G: Diverse Demographic Data Generation Increases Zero-Shot Image Classification Accuracy within Multimodal Models
                            </h3>
                            <hr className='divider' />
                            <h4>RAIVN Lab</h4>
                            <h5>May 2024 - June 2024</h5>
                        </div>
                        <div className='project-card' id='muse'>
                            <h3 className='project-card-subheader'>
                                MuSE: Multimodal Synthetic Embeddings for Zero-Shot Image Classification
                            </h3>
                            <hr className='divider' />
                            <h4>RAIVN Lab</h4>
                            <h5>Oct. 2023 - June 2024</h5>
                        </div>
                    </div>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='bees'>
                            <h3 className='project-card-subheader'>
                                Honeybee Swarm Dynamics: Investigating the Relationship Between Individual Decision-Making and Collective Foraging
                            </h3>
                            <hr className='divider' />
                            <h4>Peleg Lab</h4>
                            <h5>June 2023 - June 2024</h5>
                        </div>
                        <div className='project-card' id='easyship'>
                            <h3 className='project-card-subheader'>
                                Easyship Batch Order Scheduling
                            </h3>
                            <hr className='divider' />
                            <h4>Amazon</h4>
                            <h5>June 2022 - Sept. 2022</h5>
                        </div>
                    </div>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='xmem'>
                            <h3 className='project-card-subheader'>
                                XMem: Device Support Updates
                            </h3>
                            <hr className='divider' />
                            <h5>June 2023</h5>
                        </div>
                        <div className='project-card' id='digital-tether'>
                            <h3 className='project-card-subheader'>
                                Digital Tether
                            </h3>
                            <hr className='divider' />
                            <h4>CoMotion Labs & Brotherhood Initiative</h4>
                            <h5>June 2023 - Sept. 2023</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
