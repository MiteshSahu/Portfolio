import React from 'react'
import iauro from "../assets/iauro.png";

function WorkExperience() {
    const handleDemoUrl = (url) => {
        window.open(url, '_blank')
    }
    const workex = [

        {
            id: 1,
            src: iauro,
            responsibilities: [
            "Managed 4+ Spring Boot microservices, introducing key features like database-level multitenancy to enhance product functionality",
            "Developed a robust microservice used to automate data pipeline execution, eﬃciently optimizing the data processing workﬂow",
            "Improved code coverage from 30% to 85% by implementing SonarQube, integrating JUnit Tests, and leveraging Mockito for improved code quality",
            "developed a Figma plugin and published it in market place, drastically boosting UI development speed by 85%",
            "Architected and developed a codebase capable of generating dynamic Airﬂow DAGs, used to trigger spark and python jobs in kubernetes pod"],
            name: "iauro Systems",
            role: "Associate Software Engineer",
            duration: "April 2022 - Present"
        },
    ]

    return (
        <div name='workexperience'
             className='bg-black display flex flex-col justify-center items-center bg-gradient-to-b w-max-content mx-auto h-max-content text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-0 flex flex-col justify-center w-full h-full'>
                <div className='pb-4 mb-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>
                        Work Experience
                    </p>
                </div>
                <div className='py-2 px-2 sm:px-0'>
                    {
                        workex.map(({id, src, responsibilities, name, role, duration}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg grid grid-cols-4 '>
                                <div className='col-span-1'>
                                    <img src={src} alt="" className='p-2 rounded-md h-30 w-full duration-200 hover:105'/>
                                    <div className='flex-col items-center text-center justify-center'>
                                        <p className='text-xs py-1 px-3'>{name}</p>
                                        <p className='text-sm font-bold text-orange-500 py-1 px-3 hover:scale-105 duration-200'>{role}</p>
                                        <p className='text-xs py-1 px-3'>{duration}</p>
                                    </div>
                                </div>
                                <div className='flex-col items-center col-span-3 pt-3 pb-2'>
                                    <ul>
                                        {responsibilities.map((responsibility, index) => (
                                          <li className='text-lg' key={index}>- {responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default WorkExperience
