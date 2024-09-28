import React, { useEffect, useRef } from "react";
import Layout from "./layout";
import "../style/Projects.css";
import { motion } from "framer-motion";

function Experience() {
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

    const pageMotion = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0, transition: { duration: .8 } },
        exit: { opacity: 0, y: -100, transition: { duration: .3 } }
      };

    return (
        <div>
            <Layout />
            <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageMotion} className='page project-page'>
                <h1 className='page-title'>Projects</h1>
                <iframe id='subpage' title='subpage' src=''></iframe>
                <div id='subpage-background'></div>
                <div id='projects'>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='multispectral'>
                            <h3 className='project-card-subheader'>
                                Multispectral Imaging for Congnitive Load Estimation
                            </h3>
                            <hr className='divider' />
                            <h4>NASA Johson Space Center</h4>
                            <h5>June 2024 - Present</h5>
                        </div>
                    </div>
                    <div className='project-card-row' id='row'>
                        <div className='project-card' id='d3g'>
                            <h3 className='project-card-subheader'>
                                D3G: Diverse Demographic Data Generation Increases Zero-Shot Image Classification Accuracy within Multimodal Models
                            </h3>
                            <hr className='divider' />
                            <h4>RAIVN Lab</h4>
                            <h5>May 2024 - Present</h5>
                        </div>
                        <div className='project-card' id='muse'>
                            <h3 className='project-card-subheader'>
                                MuSE: Multimodal Synthetic Embeddings for Zero-Shot Image Classification
                            </h3>
                            <hr className='divider' />
                            <h4>RAIVN Lab</h4>
                            <h5>Oct. 2023 - Present</h5>
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
            </motion.div>
        </div>
    );
}

export default Experience;
