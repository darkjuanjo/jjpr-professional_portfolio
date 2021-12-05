import React from 'react';
import '../../css/work.css';
import trivia from '../../images/10.png';
import ticket from '../../images/11.png';
import shop from '../../images/12.png';
import runbuddy from '../../images/0.png';
import horiseon from '../../images/1.png';
import portfolio from '../../images/2.png';
import password from '../../images/3.png';
import quiz from '../../images/5.png';
import taskmaster from '../../images/6.png';
import workday from '../../images/7.png';
import gitdone from '../../images/8.png';
import weather from '../../images/9.png';

function Work() {

    const projects = [
        {
            id: '10',
            img: trivia,
            name: 'Trivia Master Deluxe',
            technology: 'HTML, CSS, Javascript',
            description: 'Basic Web Game using 2 APIs not used during the course',
            category: 'Front-End',
            type: 'Project',
            github: 'https://github.com/darkjuanjo/Phase-1-Project',
            deployed: 'https://darkjuanjo.github.io/Phase-1-Project/'
        },
        {
            id: '11',
            img: ticket,
            name: 'Ticket Support',
            technology: 'HTML, CSS, Javascript, Node',
            description: 'Basic Web Application with Front-End and Back-End that allows for user creation, API/User encryption and personalized dashboard.',
            category: 'Full Stack',
            type: 'Project',
            github: 'https://github.com/darkjuanjo/Ticket-Support',
            deployed: 'https://radiant-tundra-30535.herokuapp.com/'
        },
        {
            id: '12',
            img: shop,
            name: 'Shop PC Parts',
            technology: 'React, Node, Express, CSS, MongoDB',
            description: 'Fully Working Commericial PC parts webpage using MERN',
            type: 'Full MERN Stack',
            github: 'https://github.com/darkjuanjo/SHOP_PC_PARTS',
            deployed: 'https://shop-pc-parts.herokuapp.com/'

        }
    ]

    const assignments = [
        {
            id:"0",
            img:runbuddy,
            name: 'Run Buddy',
            technology: 'HTML, CSS',
            description: 'Basic Website using only HTML and Basic CSS',
            category: 'Front-End',
            type: 'Module',
            github: 'https://github.com/darkjuanjo/run-buddy',
            deployed: 'https://darkjuanjo.github.io/run-buddy/'
        },
        {
            id:"1",
            name: 'Horiseon',
            img:horiseon,
            technology: 'HTML, CSS',
            description: 'Basic Website using only HTML and Advances CSS',
            category: 'Front-End',
            type: 'Challenge',
            github: 'https://github.com/darkjuanjo/Horiseon',
            deployed: 'https://darkjuanjo.github.io/Horiseon/'
        },
        {
            id:"2",
            img: portfolio,
            name: 'Portfolio HTML',
            technology: 'HTML, CSS',
            description: 'Basic Website using only HTML and Advances CSS',
            category: 'Front-End',
            type: 'Challenge',
            github: 'https://github.com/darkjuanjo/darkjuanjo.github.io',
            deployed: 'https://darkjuanjo.github.io/'
        },
        {
            id:"3",
            img: password,
            name: 'Random Password Generator',
            technology: 'HTML, CSS, Javascript',
            description: 'Random Password generated through Javascript',
            category: 'Front-End',
            type: 'Challenge',
            github: 'https://github.com/darkjuanjo/random_password_generator',
            deployed: 'https://darkjuanjo.github.io/random_password_generator/'
        },
        {
            id:"5",
            img: quiz,
            name: 'Javascript Quiz',
            technology: 'CSS, Javascript',
            description: 'Quiz Minigame with DOM elements generated through Javascript',
            category: 'Front-End',
            type: 'Challenge',
            github: 'https://github.com/darkjuanjo/Javascript__Fundamentals_Quiz',
            deployed: 'https://darkjuanjo.github.io/Javascript__Fundamentals_Quiz/'
        },
        {
            id:"6",
            img: taskmaster,
            name: 'TaskMaster Pro Edition',
            technology: 'HTML, CSS, Javascript',
            description: 'Task organizer with Modal and data persistence using HTML, CSS and Javascript',
            category: 'Front-End',
            type: 'Module',
            github: 'https://github.com/darkjuanjo/taskmaster-pro',
            deployed: 'https://darkjuanjo.github.io/taskmaster-pro/'
        },
        {
            id:"7",
            img: workday,
            name: 'Work Day Scheduler',
            technology: 'HTML, CSS, Javascript',
            description: 'Work Day Agenda with persistence that uses Javascript for time management',
            category: 'Front-End',
            type: 'Challenge',
            github: 'https://github.com/darkjuanjo/schedule-organizer',
            deployed: 'https://darkjuanjo.github.io/schedule-organizer/'
        },
        {
            id:"8",
            img: gitdone,
            name: 'Git it Done',
            technology: 'HTML, CSS, Javascript',
            description: 'Basic Github open issue search using an API',
            category: 'Front-End',
            type: 'Module',
            github: 'https://github.com/darkjuanjo/git-it-done',
            deployed: 'https://darkjuanjo.github.io/git-it-done/'
        },
        {
            id:"9",
            img: weather,
            name: 'Weather Dashboard',
            technology: 'HTML, CSS, Javascript',
            description: 'Basic Weather dashboard using an API',
            category: 'Front-End',
            type: 'Challenge',
            github: 'https://github.com/darkjuanjo/weather-dashboard',
            deployed: 'https://darkjuanjo.github.io/weather-dashboard/'
        }
    ];
    return (
        <section id='work-section'>
            <h2 className='title space'>Work</h2>
            <article id='gallery' className='space'>
            {projects.map((project, i) => (
                <div id='project' className='space border' key={project.name}>
                    <img src={project.img}
                        alt={project.name}
                    >
                    </img>
                    <div id='project-info'>
                    <ul className='block'>
                        <li id='work-li' className='nav'>
                            <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                                <h3>{project.name}</h3>
                            </a>
                        </li>
                        <li id='work-li'><p>{project.technology}</p></li>
                        </ul>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <img id='github'
                            alt=''
                            ></img>
                        </a>
                    </div>
                </div>
                ))}
                {assignments.map((assignment, i) => (
                <div id='work' className='space border' key={assignment.name}>
                    <div id='assignment'>
                    <img id='assignment-img' 
                    src={assignment.img}
                        alt={assignment.name}
                    ></img>
                    <div id='assignment-info'>
                        <ul className='block'>
                            <li id='work-li' className='nav'>
                                <a href={assignment.deployed} target="_blank" rel="noopener noreferrer">
                                    <h3>{assignment.name}</h3>
                                </a></li>
                            <li id='work-li'><p>{assignment.technology}</p></li>
                        </ul>
                        <a href={assignment.github} target="_blank" rel="noopener noreferrer">
                            <img id='github'
                                    alt=''
                            ></img>
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </article>
        </section>
       
    );
};

export default Work;