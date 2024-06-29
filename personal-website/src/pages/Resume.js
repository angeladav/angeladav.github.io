import '../styling/Resume.css'

function fillTimeline(events) {
    events.forEach((ev) => {

    });
}

function Resume() {
    const timeline_content = [
        ["right", "AUGUST 2020", "NORTHWESTERN UNIVERSITY", "Enrolled as a freshman at the McCormick School of Engineering and Applied Science at Northwestern University. "],
        ["left", "MARCH 2021", "NORTHWESTERN UNIVERSITY", "Joined the NU PATH Lab headed by Dr. Maia Jacobs and being HCI research in improving online accessibility for individuals with photosensitive epilepsy.", "Lab website here!", "https://sites.northwestern.edu/nupath/"],
        ["right", "APRIL 2022", "NORTHWESTERN UNIVERSITY", "Accepted role as a studio/tech lead for the NU DISC (Design and Innovate for Social Change) organization."],
        ["right", "APRIL 2022", "CATERPILLAR INC.", "Worked as a software engineering intern at CAT Digital, primarily focused on developing the VisionLink Mobile app/webiste."],
        ["left", "MARCH 2023", "NORTHWESTERN UNIVERSITY", "Assisted students as a peer mentor/undergraduate TA for COMP_SCI 150 in understanding fundamental programming concepts and algorithms in Python."],
        ["left", "MAY 2023", "NORTHWESTERN UNIVERSITY", "Presented my research at the Computer Science Undergraduate Research Showcase.", "Link to an article here!", "https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/showcase-highlights-exemplary-undergraduate-student-research.html"],
        ["left", "MAY 2023", "NORTHWESTERN UNIVERSITY", "Presented my research at the Undergraduate Research & Arts Expo.", "Link to a YouTube recording here!", "https://youtu.be/KIhaSSZzXfA"],
        ["left", "JUNE 2023", "CATERPILLAR INC.", "Returned to CAT Digital to work as a software engineering intern."],
        ["right", "JUNE 2024", "NORTHWESTERN UNIVERSITY", "Graduate Northwestern University with a B.S. in Computer Engineering and a M.S. in Computer Science."],
        ["right", "AUGUST 2024", "CATERPILLAR INC.", "Will work as a full-time software engineer at CAT Digital."]



    ];
    return (
        <div className="resume">
            <img className='resume-title' src="./images/timelinetitle.png" />
            <div className='resume-description'> (Hover for links!) </div>
            <div className="resume-timeline">
                <span className='resume-timeline-rounded rounded-top'></span>
                {timeline_content.map((ev) => (
                    <div className={"resume-timeline-section " + ev[0] + "-section"}>
                        <img src='./images/timelinecircle.png' className={'resume-timeline-marker ' + ((ev[0] == "right") ? 'right-marker' : null)} />
                        <div className="resume-timeline-text">
                            <div className='resume-timeline-date'> {ev[1]} </div>
                            <div className='resume-timeline-location'> {ev[2]} </div>
                            <div className='resume-timeline-description'> {ev[3]} </div>
                            <a className='resume-timeline-additional-information' href={(ev.length > 4) ? ev[5] : null}> {(ev.length > 4) ? ev[4] : null} </a>

                        </div>
                        <span className={ev[0] + "-arrow"}></span>
                    </div>
                ))}
                <span className='resume-timeline-rounded rounded-bottom'></span>
            </div>
            <div className='resume-description'> A PDF of my resume can be downloaded <a href="./files/resume.pdf" className="resume-link" download> here </a> </div>
        </div>
    );
}

export default Resume;