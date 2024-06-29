import '../styling/AboutMe.css'
import { useState } from 'react';

function displayOrHideAccordion(id, state) {
    const elem = document.getElementById(id);
    if (!elem.style.maxHeight) {
        elem.style.maxHeight = elem.scrollHeight * 2 + "px";
        elem.style.opacity = 1;
    }
    else {
        elem.style.maxHeight = null;
        elem.style.opacity = 0;
    }
};

function AboutMe() {
    const [personalClick, setPersonalClick] = useState(false);
    const [skillsClick, setSkillsClick] = useState(false);
    const [projectsClick, setProjectsClick] = useState(false);

    return (
        <div className='aboutme'>
            <div className='aboutme-photo-container'>
                <img className='aboutme-photo' src="./images/circleme.png" />
            </div>
            <div className='aboutme-title'> Angela Davis</div>

            <div className='aboutme-accordion-container'>
                <div className='aboutme-accordion-header-container'>
                    <div className='aboutme-accordion'> PERSONAL </div>
                    <button className='aboutme-accordion-icon-button' onClick={
                        () => {
                            const newClick = !personalClick;
                            setPersonalClick(newClick);
                            displayOrHideAccordion('personal', newClick);
                        }}>
                        <img className='aboutme-accordion-icon' src={personalClick ? './images/minus.svg' : './images/plus.svg'} />
                    </button>
                </div>
                <div className='aboutme-accordion-content' id="personal">
                    <div className='aboutme-accordion-content-text'>
                        Hi! As you can probably tell, my name is Angela Davis and I’m a recent graduate of Northwestern University. I have an avid interest in both mobile development and processor architecture (more specifically, RISC-V). Additionally, I am passionate about improving online accessibility for underrepresented communities. Outside of my career, you can find me video editing, trying out new eats, and catching up on the latest season of Brooklyn Nine-Nine.  </div>

                </div>
            </div>

            <div className='aboutme-accordion-container'>
                <div className='aboutme-accordion-header-container'>
                    <div className='aboutme-accordion'> SKILLS </div>
                    <button className='aboutme-accordion-icon-button' onClick={
                        () => {
                            const newClick = !skillsClick;
                            setSkillsClick(newClick);
                            displayOrHideAccordion('skills', newClick);
                        }}>
                        <img className='aboutme-accordion-icon' src={skillsClick ? './images/minus.svg' : './images/plus.svg'} />
                    </button>
                </div>
                <div className='aboutme-accordion-content' id="skills">
                    <div className='aboutme-accordion-content-text'>
                        <div className='aboutme-accordion-skill-container'>
                            <div className='aboutme-accordion-skill-type'> Languages </div>
                            <div className='aboutme-accordion-skills'> Python, Javascript/Typescript, CSS/HTML, C/C++, Java, Verilog, MATLAB </div>
                        </div>
                        <div className='aboutme-accordion-skill-container'>
                            <div className='aboutme-accordion-skill-type'> Frameworks </div>
                            <div className='aboutme-accordion-skills'> Angular, Django, React, NextJS </div>
                        </div>
                        <div className='aboutme-accordion-skill-container-last'>
                            <div className='aboutme-accordion-skill-type'> Other </div>
                            <div className='aboutme-accordion-skills'> GraphQL, Jest, Android Studio </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='aboutme-accordion-container'>
                <div className='aboutme-accordion-header-container'>
                    <div className='aboutme-accordion'> PROJECTS </div>
                    <button className='aboutme-accordion-icon-button' onClick={
                        () => {
                            const newClick = !projectsClick;
                            setProjectsClick(newClick);
                            displayOrHideAccordion('projects', newClick);
                        }}>
                        <img className='aboutme-accordion-icon' src={projectsClick ? './images/minus.svg' : './images/plus.svg'} />
                    </button>
                </div>
                <div className='aboutme-accordion-content' id="projects">
                    <div className='aboutme-accordion-content-text'>
                        Here are some cool projects I’ve worked on!
                        <div className='aboutme-accordion-project-container'>
                            <div className='aboutme-accordion-project-title'> 5 Stage Pipelined RISC-V Processor  </div>
                            <div className='aboutme-accordion-project-content'>
                                <div> I collaborated with two other students to develop a 5 Stage Pipelined RISC-V processor in Verilog. Notable features included a 2-bit branch predictor and full forwarding. See the image below for our Verilog modules. </div>
                                <img className='aboutme-image' src='./images/RISCVmodules.png' />
                                <a className='aboutme-link' href="https://github.com/Brighton-Sibanda/Risc_takers"> Link to the Github Repo here! </a>
                            </div>
                        </div>

                        <div className='aboutme-accordion-project-container'>
                            <div className='aboutme-accordion-project-title'> RISC-V YouTube Explainer </div>
                            <div className='aboutme-accordion-project-content'>
                                <div> With completely self-made visual assets and my own video editing skills, I scripted and put together a YouTube Explainer discussing basic computer architecture concepts and RISC-V. </div>
                                <iframe className='aboutme-image' width="560" height="315" src="https://www.youtube.com/embed/Qx6shOnydLs?si=CWhVDwX4gq0JQ_ky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className='aboutme-accordion-project-container'>
                            <div className='aboutme-accordion-project-title'> Glove-Controlled MicroBot  </div>
                            <div className='aboutme-accordion-project-content'>
                                <div> Using flex sensors and Bluetooth, another student and I developed a glove-controlled MicroBot that moves and stops according to hand movements of the glove-wearer. </div>
                                <img className='aboutme-image' src='./images/microbot.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;