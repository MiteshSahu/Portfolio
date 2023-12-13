import React from 'react'

function About() {
    return (
        <div name="about" className='flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <div>
                    <p className='text-xl mt-10 lg:mt-20'>
                    With nearly 2 years of diverse experience in the tech industry, including impactful internships, I bring versatility to my role as a Software Engineer at Iauro Systems. Specializing in Spring Boot, Java, microservices, and JavaScript, my expertise spans not only backend development but also encompasses data engineering and frontend technologies. Successfully managing 4+ multitenant microservices, I've implemented key features to enhance functionality and save valuable time. Eager to continue contributing to the dynamic world of technology with a well-rounded skill set!
                    </p>
                    <br/>
                    <p className='text-xl w-120'>
                        My expertise lies in the following:
                        <br/>

                        <b className='text-blue-500'>Programming Languages:</b> <span>Java, JavaScript, Python, Object-Oriented Design</span>
                        <br/>
                        <b className='text-blue-500'>Databases:</b> <span>MySQL, MongoDB, PostgreSQL</span>
                        <br/>
                        <b className='text-blue-500'>Technologies:</b> <span> Hibernate, Spring, Spring-boot, JSON, Apache Airflow, Apache Spark, RESTful APIs, Swing, XML</span>
                        <br/>
                        <b className='text-blue-500'>Software/Tools:</b> <span>Postman, IntelliJ, Tomcat, VS Code, Jira, DevOps, Github Actions, CI/CD, Docker, ETL, TDD, Maven, Git, Junit, Figma</span><br/>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About;
