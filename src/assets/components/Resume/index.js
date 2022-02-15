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
                    job_title:'Senior Product Engineer',
                    employer: 'Skyworks Solution Inc. 2019-2021',
                    skills: [ 'Worked with design engineers in defining/developing evaluation test methodologies, evaluation of test plans and test modes.',
                              'Managed and maintained project schedules that aligned with product introduction and release dates.Engaged and supported local and offshore application teams to resolve product use case questions and problems after production release.',
                              'Review and analyze lots on hold and provide disposition. Worked with US Product and Test Engineers to improve First Pass Yield and transfer test solutions to Mexicali and offshore.',
                              'Analyzed customer complaints data and reviewed possible risks, as well as defined testing procedures to catch failures and generate documentation to provide disposition at the assembly line.'
                            ],
                    key_elements:['Improved QA First Pass Yield from 40 to 80%.',
                                 'Created a database of discoloration and ESD failures.']
                  },
                {
                  job_title:'Project Engineer I',
                  employer: 'Skyworks Solution Inc. 2017-2019',
                  skills: [ 'Worked with design engineers in defining/developing evaluation test methodologies, evaluation of test plans and test modes.', 
                            'Managed and maintained project schedules that aligned with product introduction and release dates.', 
                            'Engaged and supported local and offshore application teams to resolve product use case questions and problems after production release.',
                          ],
                key_elements:['Efficiently developed data cleanup tool using C# that improved data analysis speed by 79%.',
                              'Developed data analysis script JMP to generate daily use reports.']
                },
                {
                    job_title:'Jr. Product Engineer',
                    employer: 'Skyworks Solution Inc. 2015-2017',
                    skills: [ 'Worked with design engineers in defining/developing evaluation test methodologies, evaluation of test plans and test modes.', 
                              'Engaged and supported local and offshore application teams to resolve product use case questions after product and test transfers.', 
                              'Reviewed parts on hold and dispositioned based on data analysis.'
                            ],
                    key_elements:['Improved QA First Pass ●	Developed C# application to convert old data to newer data format styleYield from 40 to 80%.',
                                  'Created a database of ●	Increased product yield from 70% to 90% and ESD failures.',
                                  'Automated data analysis with C# apps'
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
         {/* <p className='space margin download'>Download my resume <span><a href="/doc/JuanJosePazResume.docx" download>Resume</a></span></p> */}
         <p className='space margin download'><span><a href="/doc/JuanJosePazResume.docx" download>Download my resume Resume</a></span></p>
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
                <p> </p>
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
                        <h4 className='italics'>{'Key Accomplishments'}</h4>
                        {job.key_elements.map((element, i) => (
                            <ul key={i}>
                                <li id='work-li'>{element}</li>
                            </ul>
                        ))}
                        <br></br>
                        <p className='line'></p>
                        <br></br>
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