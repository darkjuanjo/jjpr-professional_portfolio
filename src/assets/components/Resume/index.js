import React from 'react';
import '../../css/resume.css';


function Resume() {
    const info = 
        {
            title:'About Me',
            me: `Product/Software engineer with background of 4+ years in quality assurance and test automation for products in competitive markets. 
                 Excel at creating tools/solutions and leading efforts to improve testing capacity, increase efficiency, significantly simplify processes, 
                 and contribute to enhancing product performance and features. Skilled at finding and tracking bugs. Leverage experience in a variety of programming 
                 languages and tools, including HTML, CSS, JQuery, APIs, Third Party APIs, AJAX, C, Java, C++, C# and Javascript, Node, MSQL, Sequelize.
                 Core strength include the following:`,
            name:'Skills',
            skills: ['HTML','Javascript','CSS','Node','Testing',
                    'Model-View-Controller(MVC)','React', 'SQL','Mongodb', 
                    'PWA','Analytical Software Analysis(JMP)','C++','C#','Java'  
                   ]
        };

    const profession = 
        {
            title: 'Professional Progression',
            jobs: [
                {
                  job_title:'Project Engineer I',
                  employer: 'Skyworks Solution Inc. 2017-2019',
                  skills: [ 'Streamlined workflow in daily data management by developing apps in C# and JMP that automated data conversion and statistical analysis.',
                            'Helped design and develop various products, including FEMs and PAs. ',
                            'Increased data processing speed by 80% by developing a C# application that automated the analysis process. ',
                            'Improved existing processes, procedures, technical enhancements, resource requirements, and stakeholder engagement procedures to align with strategic goals.',
                            'Wrote protocols, qualification documents, test plans and test reports for quality assurance purposes.',
                            'Brainstormed with peers and other members of the design team to determine enhancements and product features. ',
                            'Developed a conversion tool to convert data from “. adt" HP file format to Credence excel format resulting inability to rapidly generate analysis without creating excel macros.',
                            'Automated more than half of the analysis process using C#, enabling higher efficiency.',
                          ]
                }
            ]
        };

    const education = 
        {
            title:'Education',
            schools: [
                {
                    name:'Cetys Universidad',
                    title: 'Bachelor of Science in Cybernetic Electronics',
                    GPA: '3.596',
                    location: 'Mexicali Baja California, Mexico Aug-2015'
                }
            ]
        }

    return (
        <>
         <p className='space margin download'>Download my resume <span><a href="https://drive.google.com/uc?export=download&id=1wBGweFGHe-jKw0lZYaeeeEQC_FO2j6gp">Resume</a></span></p>
            <section className='justify-center space'>
                <img alt='' id='me'></img>
            </section>
            <section id='resume' className='space nowrap'>       
                <h2 className='title'>{info.title}</h2>
                <div className='content'>
                <p>{info.me}</p>
                {info.skills.map((skill,i) => (
                    <ul key={i}>
                        <li id='work-li'>{skill}</li>
                    </ul>
                ))}
                </div>
            </section>
            <section id='resume' className='space nowrap'>       
                    <h2 className='title'>{profession.title}</h2>
                    <div className='content'>
                    {profession.jobs.map((job, i) => (
                        <>
                        <h3 key={i}>{job.job_title}</h3>
                        <p>{`Employer: ${job.employer}`}</p>
                        {job.skills.map((skill, i) => (
                            <ul key={i}>
                                <li id='work-li'>{skill}</li>
                            </ul>
                        ))}
                        </>
                    ))}
                    </div>
            </section>
            <section id='resume' className='space nowrap'>       
                    <h2 className='title'>{education.title}</h2>
                    <div className='content'>
                    {education.schools.map((school) => (
                        <>
                        <h3>{school.title}</h3>
                        <p>{school.name } {` - GPA : ${school.GPA}`}</p>
                        <p>{school.location}</p>
                        </>
                    ))}
                    </div>
            </section>
        </>
    );
};

export default Resume;